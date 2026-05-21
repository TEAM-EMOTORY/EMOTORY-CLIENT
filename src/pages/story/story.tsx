import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StoryHeader from './components/StoryHeader/StoryHeader'
import StoryScene from './components/StoryScene/StoryScene'
import StoryContent from './components/StoryContent/StoryContent'
import ChoiceSection from './components/ChoiceSection/ChoiceSection'
import StoryNav from './components/StoryNav/StoryNav'
import * as styles from './story.css'

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
  content: '토리는 가장 친한 친구 포포를 만나러 갔어요. 그런데 아무리 찾아도 보이지 않았어요. 토리는 마음이 조마조마해졌어요.',
  choices: [
    { id: '1', text: '혼자서 조금 더 찾아본다' },
    { id: '2', text: '친구에게 전화해서 물어본다' },
    { id: '3', text: '다른 친구에게 함께 찾아보자고 한다' },
  ],
}

const StoryPage = () => {
  const navigate = useNavigate()
  const [info] = useState(PLACEHOLDER_INFO)
  const [pageData] = useState(PLACEHOLDER_PAGE)

  const handleChoiceSelect = (id: string) => {
    // TODO: API 연동
    console.log('선택:', id)
  }

  const handlePrev = () => {
    // TODO: 이전 페이지 로직
  }

  return (
    <div className={styles.page}>
      <StoryHeader emotionLabel={info.emotionLabel} />
      <div className={styles.main}>
        <StoryScene imageUrl={pageData.sceneImageUrl} />
        <StoryContent title={pageData.title} content={pageData.content} />
      </div>
      <ChoiceSection choices={pageData.choices} onChoiceSelect={handleChoiceSelect} />
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
