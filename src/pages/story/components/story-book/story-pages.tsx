import { forwardRef, useContext } from 'react'
import { StoryBookContext } from './story-book-context'
import { useGenerateImage } from '@shared/hooks/use-generate-image'
import FadeInImage from '@shared/components/fade-in-image/fade-in-image'
import { replaceNameInContent } from '@shared/utils/korean-particle'
import { useStoryNode } from '../../hooks/use-story-node'
import StoryText from '../story-text/story-text'
import ChoiceList from '../choice-list/choice-list'

interface LeftPageProps {
  nodeId: number
  /** 지금 읽고 있는 장면인지 — 지난 장면은 선택지를 누를 수 없다 */
  isCurrent: boolean
}

/**
 * 왼쪽 페이지 — 글 + 선택지.
 * 책 넘김 라이브러리가 페이지 DOM을 직접 다루므로 ref를 받아야 하고,
 * 데이터는 props 대신 각 페이지가 직접 조회한다 (캐시에 미리 받아 둔 값을 쓴다).
 */
export const LeftPage = forwardRef<HTMLDivElement, LeftPageProps>(({ nodeId, isCurrent }, ref) => {
  const { childName, disabled, chosen, onChoose } = useContext(StoryBookContext)
  const { data } = useStoryNode(nodeId)
  const content = data?.content ? replaceNameInContent(data.content, childName) : ''

  return (
    <div ref={ref} className='size-full overflow-hidden bg-surface-card'>
      <div className='relative flex size-full flex-col'>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 bg-linear-to-r from-ink/6 to-transparent to-12%'
        />
        <div className='relative flex min-h-0 flex-1 flex-col justify-center gap-20 overflow-y-auto px-[clamp(2.4rem,3.2vw,4rem)] pt-[clamp(8rem,11vh,9.6rem)] pb-[clamp(5.6rem,8vh,7.2rem)]'>
          <StoryText title={`${childName}의 모험`} content={content} />
          <hr className='border-border' />
          <ChoiceList
            choices={
              data?.choices.map(({ choiceId, content: text }) => ({
                id: String(choiceId),
                text,
              })) ?? []
            }
            disabled={!isCurrent || disabled}
            selectedId={chosen[nodeId]}
            onSelect={(choiceId) => {
              const text = data?.choices.find((c) => String(c.choiceId) === choiceId)?.content ?? ''
              onChoose(nodeId, choiceId, text)
            }}
          />
        </div>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-y-0 right-0 w-[18%] bg-linear-to-r from-transparent via-ink/10 via-75% to-ink/28'
        />
      </div>
    </div>
  )
})
LeftPage.displayName = 'LeftPage'

interface RightPageProps {
  nodeId: number
}

/** 오른쪽 페이지 — AI 일러스트 */
export const RightPage = forwardRef<HTMLDivElement, RightPageProps>(({ nodeId }, ref) => {
  const { playSessionId } = useContext(StoryBookContext)
  const faceImageKey = localStorage.getItem('faceImageKey') ?? ''
  const { data } = useGenerateImage(faceImageKey, nodeId, playSessionId)

  return (
    <div ref={ref} className='size-full overflow-hidden bg-surface-page'>
      <div className='relative size-full'>
        <FadeInImage
          src={data?.imageUrl}
          className='size-full'
          placeholder={
            <div className='flex size-full animate-pulse flex-col items-center justify-center gap-12 bg-surface-inset text-ink-3'>
              <span className='text-heading'>✦</span>
              <p className='text-caption'>그림을 그리고 있어요</p>
            </div>
          }
        />
        <div
          aria-hidden
          className='pointer-events-none absolute inset-y-0 left-0 w-[22%] bg-linear-to-r from-ink/45 via-ink/18 via-25% to-transparent'
        />
      </div>
    </div>
  )
})
RightPage.displayName = 'RightPage'
