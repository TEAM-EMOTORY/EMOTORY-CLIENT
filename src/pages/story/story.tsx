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
import { useMember } from '@shared/hooks/use-member'
// 1. 결과 생성 훅 임포트
import { useCreateStoryResult } from '@shared/hooks/use-story-result'

const PLACEHOLDER_INFO = {
  emotionLabel: '기쁨 이야기',
  totalPages: 5,
}

const StoryPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { storyNodeId } = useParams()

  const memberId = localStorage.getItem('memberId')
  const { data } = useMember(memberId)
  const childName = data?.name ?? '하이'

  const currentNodeId = storyNodeId ? decodeNodeId(storyNodeId) : undefined
  const { data: nodeData, isFetching } = useStoryNode(currentNodeId)
  const { mutate: selectChoice } = useSelectChoice()
  const { mutate: endSession } = useEndSession()
  // 2. 결과 생성 묵인 mutate 함수 가져오기
  const { mutate: createStoryResult } = useCreateStoryResult()

  const handleChoiceSelect = (choiceId: string) => {
    if (!state?.playSessionId) return
    selectChoice(
      { playSessionId: state.playSessionId, choiceId: Number(choiceId) },
      {
        onSuccess: ({ currentNodeId: nextNodeId, status }) => {
          if (status === 'ENDED') {
            endSession(state.playSessionId)
            // 3. 바로 페이지를 이동하지 않고, 결과를 서버에 먼저 생성(POST)합니다.
            createStoryResult(state.playSessionId, {
              onSuccess: () => {
                navigate('/result', { state: { playSessionId: state.playSessionId } })
              },
            })
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
      // 4. 선택지가 없는 마지막 노드에서도 결과를 먼저 생성(POST)한 후 이동합니다.
      createStoryResult(state.playSessionId, {
        onSuccess: () => {
          navigate('/result', { state: { playSessionId: state.playSessionId } })
        },
      })
    }
  }, [isFetching, nodeData])

  const handlePrev = () => navigate(-1)

  return (
    <div className={styles.page}>
      <StoryHeader emotionLabel={PLACEHOLDER_INFO.emotionLabel} />
      <div key={storyNodeId}>
        <div className={styles.main}>
          <StoryScene imageUrl='' />
          <StoryContent title={`${childName}의 모험`} content={nodeData?.content ?? ''} />
        </div>
        {!isFetching && nodeData && nodeData.choices.length > 0 && (
          <ChoiceSection
            choices={nodeData.choices.map(({ choiceId, content }) => ({
              id: String(choiceId),
              text: content,
            }))}
            onChoiceSelect={handleChoiceSelect}
          />
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
