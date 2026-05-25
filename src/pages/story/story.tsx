import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import StoryHeader from './components/story-header/story-header'
import StoryScene from './components/story-scene/story-scene'
import StoryContent from './components/story-content/story-content'
import ChoiceSection from './components/choice-section/choice-section'
import StoryNav from './components/story-nav/story-nav'
import * as styles from './story.css'
import { replaceNameInContent } from '@shared/utils/korean-particle'
import { useStoryNode } from './hooks/use-story-node'
import { useSelectChoice } from './hooks/use-select-choice'
import { useEndSession } from './hooks/use-end-session'
import { useCreateStoryResult } from '@shared/hooks/use-story-result'

const StoryPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { storyNodeId } = useParams()

  const childName = localStorage.getItem('childName') ?? ''

  const currentNodeId = storyNodeId ? Number(storyNodeId) : undefined
  const { data: nodeData, isFetching } = useStoryNode(currentNodeId)
  const { mutate: selectChoice } = useSelectChoice()
  const { mutate: endSession } = useEndSession()
  const { mutate: createStoryResult } = useCreateStoryResult()
  const endCalledRef = useRef(false)

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
      navigate('/result', { state: { playSessionId: state.playSessionId } })
    }
  }, [isFetching, nodeData, endSession, navigate, state?.playSessionId, createStoryResult])

  const handlePrev = () => navigate(-1)

  return (
    <div className={styles.page}>
      <StoryHeader emotionLabel={state?.emotionLabel ? `${state.emotionLabel} 이야기` : ''} />
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <StoryScene imageUrl='' />
          <StoryContent
            content={nodeData?.content ? replaceNameInContent(nodeData.content, childName) : ''}
          />
        </div>
        <ChoiceSection
          choices={
            nodeData?.choices.map(({ choiceId, content }) => ({
              id: String(choiceId),
              text: content,
            })) ?? []
          }
          onChoiceSelect={handleChoiceSelect}
        />
      </div>
      <StoryNav
        nodeOrder={nodeData?.nodeOrder ?? 1}
        onHome={() => navigate('/')}
        onPrev={handlePrev}
      />
    </div>
  )
}

export default StoryPage
