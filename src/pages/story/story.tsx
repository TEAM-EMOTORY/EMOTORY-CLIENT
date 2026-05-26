import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  ChoiceSection,
  StepFlowContent,
  StepFlowFrame,
  StepFlowHeader,
  StepFlowNav,
  StepFlowScene,
} from '@shared/components/step-flow'
import { replaceNameInContent } from '@shared/utils/korean-particle'
import { useStoryNode } from './hooks/use-story-node'
import { useSelectChoice } from './hooks/use-select-choice'
import { useEndSession } from './hooks/use-end-session'
import { useGenerateImage } from '@shared/hooks/use-generate-image'
import { useCreateStoryResult } from '@shared/hooks/use-story-result'

const STORY_TOTAL_STEPS = 4

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
  }, [isFetching, nodeData, state?.playSessionId, state?.selectedChoices, state?.emotionLabel, currentNodeId])

  const handlePrev = () => navigate(-1)

  return (
    <StepFlowFrame
      header={
        <StepFlowHeader
          emotionLabel={state?.emotionLabel ? `${state.emotionLabel} 이야기` : undefined}
        />
      }
      scene={<StepFlowScene imageUrl={imageData?.imageUrl ?? ''} isLoading={isImageLoading} />}
      content={
        <StepFlowContent
          title={`${childName}의 모험`}
          content={nodeData?.content ? replaceNameInContent(nodeData.content, childName) : ''}
          autoSpeak
        />
      }
      choices={
        <ChoiceSection
          choices={
            nodeData?.choices.map(({ choiceId, content }) => ({
              id: String(choiceId),
              text: content,
            })) ?? []
          }
          label='기분이 어땠어?'
          onChoiceSelect={handleChoiceSelect}
          disabled={isImageLoading}
        />
      }
      nav={
        <StepFlowNav
          currentStep={currentStep}
          totalSteps={STORY_TOTAL_STEPS}
          onHome={() => navigate('/')}
          onPrev={handlePrev}
        />
      }
    />
  )
}

export default StoryPage
