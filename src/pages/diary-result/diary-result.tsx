import { useLocation, useNavigate } from 'react-router-dom'
import { hasConsonantEnding } from '@shared/utils/korean-particle'
import * as styles from './diary-result.css'
import ProfileCard from './components/profile-card/profile-card'
import GraphCard from './components/graph-card/graph-card'
import { EMOTION_RESULTS, type DiaryEmotion } from './components/graph-card/constants'
import NoteCard from './components/note-card/note-card'

const countAnswers = (answers: unknown): Record<DiaryEmotion, number> => {
  const initial: Record<DiaryEmotion, number> = { joy: 0, sad: 0, angry: 0 }
  if (!Array.isArray(answers)) return initial
  return answers.reduce((acc, answer) => {
    if (answer === 'joy' || answer === 'sad' || answer === 'angry') acc[answer]++
    return acc
  }, initial)
}

const DiaryResultPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const counts = countAnswers(state?.answers)
  const childName = localStorage.getItem('childrenName') ?? localStorage.getItem('childName') ?? ''
  const maxCount = Math.max(counts.joy, counts.sad, counts.angry, 1)
  const hasConsonant = hasConsonantEnding(childName)
  const maxEmotion = EMOTION_RESULTS.reduce((max, cur) => counts[cur.id] > counts[max.id] ? cur : max)

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.starLeft}>★</span>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>오늘의 감정 일기 결과예요!</h1>
          <p className={styles.description}>{childName}{hasConsonant ? '아' : '야'}, 오늘 하루도 수고했어!</p>
        </div>
        <span className={styles.starRight}>★</span>
      </section>

      <section className={styles.board}>
        <ProfileCard childName={childName} />
        <GraphCard counts={counts} maxCount={maxCount} childName={childName} hasConsonant={hasConsonant} />
        <NoteCard
          title={maxEmotion.emotionDescription.title}
          description={maxEmotion.emotionDescription.description}
          characterImg={maxEmotion.characterImg}
        />
      </section>

      <nav className={styles.bottomNav}>
        <button type='button' className={styles.subButton} onClick={() => navigate('/')}>
          🏠 처음으로
        </button>
        <button type='button' className={styles.subButton} onClick={() => navigate('/diary')}>
          📔 오늘의 일기 다시쓰기
        </button>
      </nav>

      <img src={maxEmotion.characterImg} alt='' className={styles.cornerCharacter} />
    </main>
  )
}

export default DiaryResultPage
