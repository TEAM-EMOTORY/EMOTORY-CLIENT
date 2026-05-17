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
          <StoryCard story={data.story} className={styles.storyCard} />
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
