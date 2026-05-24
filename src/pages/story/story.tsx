import { useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import StoryHeader from './components/story-header/story-header'
import StoryScene from './components/story-scene/story-scene'
import StoryContent from './components/story-content/story-content'
import ChoiceSection from './components/choice-section/choice-section'
import StoryNav from './components/story-nav/story-nav'
import * as styles from './story.css'
import { usePlaySession } from './hooks/use-play-session'
import { useStoryNode } from './hooks/use-story-node'
import { useSelectChoice } from './hooks/use-select-choice'

// TODO: API 연동 시 제거
const PLACEHOLDER_INFO = {
  emotionLabel: '기쁨 이야기',
  currentPage: 0,
  totalPages: 5,
}

const PLACEHOLDER_PAGE = {
  sceneImageUrl:
    'https://media.istockphoto.com/id/2148757239/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EC%8B%9C%EC%95%84-%EC%9E%91%EC%9D%80-%EB%B0%9C%ED%86%B1-%EC%88%98%EB%8B%AC.jpg?s=612x612&w=0&k=20&c=xkH9d6pwEDkkzflv6tMelrv8DtXkUX5fX6ruUPt82Ak=',
  title: '소중한 친구가 없어진 걸까?',
  content:
    '토리는 가장 친한 친구 포포를 만나러 갔어요. 그런데 아무리 찾아도 보이지 않았어요. 토리는 마음이 조마조마해졌어요.',
  choices: [
    { id: '1', text: '혼자서 조금 더 찾아본다' },
    { id: '2', text: '친구에게 전화해서 물어본다' },
    { id: '3', text: '다른 친구에게 함께 찾아보자고 한다' },
  ],
}

const StoryPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { storyNodeId } = useParams()
  const { data: sessionData } = usePlaySession(state?.playSessionId)
  const { data: nodeData, isFetching } = useStoryNode(Number(storyNodeId))
  const { mutate: selectChoice } = useSelectChoice()
  const [info] = useState(PLACEHOLDER_INFO)

  const handleChoiceSelect = (choiceId: string) => {
    if (!state?.playSessionId) return
    selectChoice(
      { playSessionId: state.playSessionId, choiceId: Number(choiceId) },
      { onSuccess: ({ currentNodeId: nextNodeId }) => navigate(`/story/${nextNodeId}`, { state }) },
    )
  }

  const handlePrev = () => navigate(-1)

  return (
    <div className={styles.page}>
      <StoryHeader emotionLabel={info.emotionLabel} />
      <div key={storyNodeId}>
        <div className={styles.main}>
          <StoryScene imageUrl={PLACEHOLDER_PAGE.sceneImageUrl} />
          <StoryContent
            title={PLACEHOLDER_PAGE.title}
            content={nodeData?.content ?? PLACEHOLDER_PAGE.content}
          />
        </div>
        {!isFetching && nodeData && (
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
        currentPage={info.currentPage}
        totalPages={info.totalPages}
        onHome={() => navigate('/')}
        onPrev={handlePrev}
      />
    </div>
  )
}

export default StoryPage
