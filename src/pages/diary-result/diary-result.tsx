import { useLocation, useNavigate } from 'react-router-dom'
import Button from '@shared/components/button/button'
import * as styles from './diary-result.css'

type DiaryEmotion = 'joy' | 'sad' | 'angry'

const EMOTION_RESULTS: { id: DiaryEmotion; label: string }[] = [
  { id: 'joy', label: '기쁨' },
  { id: 'sad', label: '슬픔' },
  { id: 'angry', label: '화남' },
]

const countAnswers = (answers: unknown) => {
  const counts: Record<DiaryEmotion, number> = {
    joy: 0,
    sad: 0,
    angry: 0,
  }

  if (!Array.isArray(answers)) return counts

  answers.forEach((answer: unknown) => {
    if (answer === 'joy' || answer === 'sad' || answer === 'angry') {
      counts[answer] += 1
    }
  })

  return counts
}

const DiaryResultPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const counts = countAnswers(state?.answers)

  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>오늘의 감정 일기 결과</h1>
          <p className={styles.description}>하루 동안 느낀 감정을 개수로 모았어요.</p>
        </div>

        <div className={styles.resultList}>
          {EMOTION_RESULTS.map(({ id, label }) => (
            <div key={id} className={styles.resultCard}>
              <p className={styles.emotionLabel}>{label}</p>
              <strong className={styles.count}>{counts[id]}개</strong>
            </div>
          ))}
        </div>

        <div className={styles.bottomNav}>
          <Button color='white' onClick={() => navigate('/')}>
            🏠 처음으로
          </Button>
          <Button color='yellow' onClick={() => navigate('/diary')}>
            다시 작성하기
          </Button>
        </div>
      </div>
    </main>
  )
}

export default DiaryResultPage
