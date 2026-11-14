import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import joyImg from '@shared/assets/emotion-card/joy.webp'
import sadImg from '@shared/assets/emotion-card/sad.webp'
import angryImg from '@shared/assets/emotion-card/angry.webp'
import fearImg from '@shared/assets/emotion-card/fear.webp'
import shyImg from '@shared/assets/emotion-card/disgust.webp'
import surpriseImg from '@shared/assets/emotion-card/surprise.webp'
import DrawingCanvas from './components/drawing-canvas/drawing-canvas'
import Book from './components/book/book'
import StoryText from './components/story-text/story-text'
import ChoiceList from './components/choice-list/choice-list'
import { replaceNameInContent } from '@shared/utils/korean-particle'
import { useStoryNode } from './hooks/use-story-node'
import { useSelectChoice } from './hooks/use-select-choice'
import { useEndSession } from './hooks/use-end-session'
import { useGenerateImage } from '@shared/hooks/use-generate-image'
import { useCreateStoryResult } from '@shared/hooks/use-story-result'

const STORY_TOTAL_STEPS = 4

const EMOTION_FACE: Record<string, string> = {
  기쁨: joyImg,
  슬픔: sadImg,
  분노: angryImg,
  두려움: fearImg,
  부끄러움: shyImg,
  놀라움: surpriseImg,
}

const StoryPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { storyNodeId } = useParams()

  const childName = localStorage.getItem('childName') ?? ''

  const currentNodeId = storyNodeId ? Number(storyNodeId) : undefined
  const { data: nodeData, isFetching } = useStoryNode(currentNodeId)
  const faceImageKey = localStorage.getItem('faceImageKey') ?? ''
  const { data: imageData, isLoading: isImageLoading } = useGenerateImage(
    faceImageKey,
    currentNodeId,
    state?.playSessionId,
  )

  const { mutate: selectChoice } = useSelectChoice()
  const { mutate: endSession } = useEndSession()
  const { mutate: createStoryResult } = useCreateStoryResult()
  const endCalledRef = useRef(false)
  const currentStep = Math.min(nodeData?.nodeOrder ?? 1, STORY_TOTAL_STEPS)

  const handleChoiceSelect = (choiceId: string) => {
    if (!state?.playSessionId) return
    const choiceText = nodeData?.choices.find((c) => String(c.choiceId) === choiceId)?.content ?? ''
    selectChoice(
      { playSessionId: state.playSessionId, choiceId: Number(choiceId) },
      {
        onSuccess: ({ currentNodeId: nextNodeId }) => {
          navigate(`/story/${nextNodeId}`, {
            state: {
              ...state,
              selectedChoices: [...(state.selectedChoices ?? []), choiceText],
            },
          })
        },
      },
    )
  }

  useEffect(() => {
    if (
      !isFetching &&
      nodeData?.choices.length === 0 &&
      state?.playSessionId &&
      !endCalledRef.current
    ) {
      endCalledRef.current = true
      const summary = (state.selectedChoices ?? []).join(', ')
      endSession(state.playSessionId)
      createStoryResult({
        playSessionId: state.playSessionId,
        emotion: state.emotionLabel ?? '',
        summary,
        advice: summary,
      })
      navigate('/result', {
        state: { playSessionId: state.playSessionId, lastNodeId: currentNodeId },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isFetching,
    nodeData,
    state?.playSessionId,
    state?.selectedChoices,
    state?.emotionLabel,
    currentNodeId,
  ])

  const handlePrev = () => navigate(-1)

  const emotionLabel: string | undefined = state?.emotionLabel
  const imageUrl = imageData?.imageUrl

  return (
    <Book
      onPrev={handlePrev}
      left={
        <div className='relative flex min-h-0 flex-1 flex-col px-[clamp(2.4rem,3.2vw,4rem)] pt-[clamp(8rem,11vh,9.6rem)] pb-[clamp(5.6rem,8vh,7.2rem)]'>
          <div className='flex min-h-0 flex-1 flex-col justify-center gap-20 overflow-y-auto'>
            <StoryText
              title={`${childName}의 모험`}
              content={nodeData?.content ? replaceNameInContent(nodeData.content, childName) : ''}
            />
            <hr className='border-border' />
            <ChoiceList
              choices={
                nodeData?.choices.map(({ choiceId, content }) => ({
                  id: String(choiceId),
                  text: content,
                })) ?? []
              }
              onSelect={handleChoiceSelect}
              disabled={isImageLoading}
            />
          </div>
        </div>
      }
      right={
        isImageLoading || !imageUrl ? (
          <DrawingCanvas />
        ) : (
          <img src={imageUrl} alt='' className='size-full object-cover' />
        )
      }
      overlay={
        <>
          <div className='absolute inset-x-0 top-0 flex w-1/2 items-center justify-between gap-12 px-[clamp(1.6rem,2.4vw,3.2rem)] pt-[clamp(1.6rem,2.6vh,2.4rem)]'>
            {emotionLabel ? (
              <span className='flex items-center gap-8 rounded-pill border border-border bg-surface-card py-10 pr-16 pl-10 text-label text-ink-2 shadow-sm'>
                {EMOTION_FACE[emotionLabel] && (
                  <img
                    src={EMOTION_FACE[emotionLabel]}
                    alt=''
                    className='size-28 rounded-pill object-cover object-top'
                  />
                )}
                {emotionLabel} 이야기
              </span>
            ) : (
              <span />
            )}
            <button
              type='button'
              onClick={() => navigate('/')}
              className='flex h-46 items-center gap-8 rounded-pill border border-border bg-surface-card px-24 text-label text-ink-2 shadow-sm'
            >
              <HomeIcon />
              처음으로
            </button>
          </div>

          <p className='absolute bottom-[clamp(1.2rem,2vh,2rem)] left-1/4 flex -translate-x-1/2 items-center gap-12 rounded-pill bg-surface-card px-16 py-8 text-caption text-ink-2'>
            <BookIcon />
            {currentStep} / {STORY_TOTAL_STEPS}
          </p>
        </>
      }
    />
  )
}

const HomeIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-24'>
    <path
      d='M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinejoin='round'
    />
  </svg>
)

const BookIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-18 text-ink-3'>
    <path
      d='M12 6.5C10.3 5.3 8 4.8 4 5v13c4-.2 6.3.3 8 1.5 1.7-1.2 4-1.7 8-1.5V5c-4-.2-6.3.3-8 1.5Zm0 0v13'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default StoryPage
