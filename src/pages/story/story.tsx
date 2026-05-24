import { useNavigate, useLocation, useParams } from 'react-router-dom'

import { useEffect } from 'react'
import StoryHeader from './components/story-header/story-header'
import StoryScene from './components/story-scene/story-scene'
import StoryContent from './components/story-content/story-content'
import ChoiceSection from './components/choice-section/choice-section'
import StoryNav from './components/story-nav/story-nav'
import * as styles from './story.css'
import { decodeNodeId, encodeNodeId } from '@shared/utils/encode-node-id'
import { useStoryNode } from './hooks/use-story-node'
import { useSelectChoice } from './hooks/use-select-choice'
import { useEndSession } from './hooks/use-end-session'
import { useGenerateImage } from './hooks/use-generate-image'

const PLACEHOLDER_INFO = {
  emotionLabel: '기쁨 이야기',
  totalPages: 5,
}


const StoryPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { storyNodeId } = useParams()
  const currentNodeId = storyNodeId ? decodeNodeId(storyNodeId) : undefined
  const { data: nodeData, isFetching } = useStoryNode(currentNodeId)
  const faceImageKey = localStorage.getItem('faceImageKey') ?? ''
  const { data: imageData } = useGenerateImage(faceImageKey, currentNodeId, state?.playSessionId)

  const { mutate: selectChoice } = useSelectChoice()
  const { mutate: endSession } = useEndSession()

  const handleChoiceSelect = (choiceId: string) => {
    if (!state?.playSessionId) return
    selectChoice(
      { playSessionId: state.playSessionId, choiceId: Number(choiceId) },
      {
        onSuccess: ({ currentNodeId: nextNodeId, status }) => {
          if (status === 'ENDED') {
            endSession(state.playSessionId)
            navigate('/result', { state: { playSessionId: state.playSessionId } })
          } else {
            navigate(`/story/${encodeNodeId(nextNodeId)}`, { state })
          }
        },
      },
    )
  }

  useEffect(() => {
    if (!isFetching && nodeData?.choices.length === 0 && state?.playSessionId) {
      endSession(state.playSessionId)
      navigate('/result', { state: { playSessionId: state.playSessionId } })
    }
  }, [isFetching, nodeData])

  const handlePrev = () => navigate(-1)

  return (
    <div className={styles.page}>
      <StoryHeader emotionLabel={PLACEHOLDER_INFO.emotionLabel} />
      <div key={storyNodeId}>
        <div className={styles.main}>
          <StoryScene imageUrl={imageData?.imageUrl ?? ''} />
          <StoryContent
            title=''
            content={nodeData?.content ?? ''}
          />
        </div>
        {!isFetching && nodeData && (
          nodeData.choices.length > 0 && (
            <ChoiceSection
              choices={nodeData.choices.map(({ choiceId, content }) => ({
                id: String(choiceId),
                text: content,
              }))}
              onChoiceSelect={handleChoiceSelect}
            />
          )
        )}
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
