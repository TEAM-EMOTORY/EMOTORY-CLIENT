import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Book from '@shared/components/book/book'
import StoryReader from './components/story-reader/story-reader'
import type { StoryReaderHandle } from './components/story-reader/story-reader'
import { useSharedStory } from './hooks/use-shared-story'

/** 친구 이야기 읽기 (Figma 08B) — 책장에서 고른 이야기를 책장 넘기며 읽는다 */
const SharedStoryPage = () => {
  const navigate = useNavigate()
  const { playSessionId } = useParams()
  const id = playSessionId ? Number(playSessionId) : undefined
  const { data: story, isPending, isError } = useSharedStory(id)

  const readerRef = useRef<StoryReaderHandle>(null)
  const [spread, setSpread] = useState(0)

  const sceneCount = story?.nodes.length ?? 0
  const lastSpread = sceneCount // 장면 수만큼 + "이야기 끝" 1장
  const backToShelf = () => navigate('/bookshelf')

  return (
    <Book
      onPrev={spread > 0 ? () => readerRef.current?.flipPrev() : undefined}
      onNext={story && spread < lastSpread ? () => readerRef.current?.flipNext() : undefined}
      overlay={
        <>
          <button
            type='button'
            onClick={backToShelf}
            className='absolute top-[clamp(1.6rem,2.6vh,2.4rem)] left-[clamp(1.6rem,2.4vw,3.2rem)] flex h-46 items-center gap-4 rounded-pill border border-border bg-surface-card pr-20 pl-12 text-label text-ink-2 shadow-sm'
          >
            <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-24'>
              <path
                d='m14.5 6-6 6 6 6'
                stroke='currentColor'
                strokeWidth='2.2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            책장으로
          </button>

          {story && (
            <p className='absolute bottom-[clamp(1.2rem,2vh,2rem)] left-1/4 -translate-x-1/2 rounded-pill bg-surface-card px-16 py-8 text-caption text-ink-2'>
              {spread < sceneCount ? `${spread + 1} / ${sceneCount}` : '끝'}
            </p>
          )}

          {story && spread === 0 && (
            <p className='absolute right-[clamp(8rem,9vw,10rem)] bottom-[clamp(1.6rem,2.4vh,2.4rem)] rounded-pill bg-surface-card/90 px-14 py-6 text-caption text-ink-3'>
              양끝을 누르거나 밀어서 넘겨요
            </p>
          )}
        </>
      }
    >
      {isPending ? (
        <Message text='책을 펼치는 중이에요…' />
      ) : isError || !story ? (
        <Message text='이 이야기를 열 수 없어요. 책장에서 다른 이야기를 골라 볼까요?' />
      ) : (
        <StoryReader
          ref={readerRef}
          story={story}
          onSpreadChange={setSpread}
          onBackToShelf={backToShelf}
        />
      )}
    </Book>
  )
}

const Message = ({ text }: { text: string }) => (
  <p className='flex size-full items-center justify-center px-24 text-center text-body text-ink-2'>
    {text}
  </p>
)

export default SharedStoryPage
