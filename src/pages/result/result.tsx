import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@shared/components/button/button'
import * as styles from './result.css'
import StoryCard from './components/StoryCard/StoryCard'
import EmotionCard from './components/EmotionCard/EmotionCard'
import TipsSection from './components/TipsSection/TipsSection'
import type { ResultData } from './types/result.types'
import { MOCK_RESULT_DATA } from './mocks/result.mock'

const ResultPage = () => {
  const navigate = useNavigate()
  const [data] = useState<ResultData>(MOCK_RESULT_DATA)

  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.titleSection}>
          <p className={styles.title}>
            <span className={styles.star}>★</span>
            이야기가 끝났어요!
            <span className={styles.star}>★</span>
          </p>
          <p className={styles.description}>오늘도 토리와 함께 감정을 탐험해봐요.</p>
        </div>

        <div className={styles.mainCards}>
          <StoryCard
            imageUrl='https://media.istockphoto.com/id/2148757239/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EC%8B%9C%EC%95%84-%EC%9E%91%EC%9D%80-%EB%B0%9C%ED%86%B1-%EC%88%98%EB%8B%AC.jpg?s=612x612&w=0&k=20&c=xkH9d6pwEDkkzflv6tMelrv8DtXkUX5fX6ruUPt82Ak='
            summary='토리는 가장 친한 친구를 만나기로 했어요. 하지만 친구가 보이지 않았고, 아무리 찾아도 찾을 수 없었어요. 토리는 점점 마음이 조마조마해졌어요. 하지만 용기를 내어 친구에게 연락했고, 친구도 미안한 마음에 토리를 찾아왔어요. 둘은 오해를 풀고 더 소중한 친구가 되었답니다.'
            className={styles.storyCard}
          />
          <EmotionCard emotion={data.emotion} className={styles.emotionCard} />
        </div>

        <TipsSection tips={data.tips} />

        <div className={styles.bottomNav}>
          <Button color='white' onClick={() => navigate('/')}>
            🏠 처음으로
          </Button>
          <button type='button' className={styles.ctaButton}>
            ✦ 다른 감정을 탐험해볼래요? &gt;
          </button>
          <Button color='white' onClick={() => {}}>
            📔 오늘의 감정 일기 쓰기
          </Button>
        </div>
      </div>
    </main>
  )
}

export default ResultPage
