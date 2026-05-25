import { useLocation, useNavigate } from 'react-router-dom'
import angryCharacterImg from '@shared/assets/emotion-img/angry_character.webp'
import angryIconImg from '@shared/assets/emotion-img/angry_icon.webp'
import happyCharacterImg from '@shared/assets/emotion-img/happy_character.webp'
import happyIconImg from '@shared/assets/emotion-img/happy_icon.webp'
import sadCharacterImg from '@shared/assets/emotion-img/sad_character.webp'
import sadIconImg from '@shared/assets/emotion-img/sad_icon.webp'
import * as styles from './diary-result.css'
import { hasConsonantEnding } from '@shared/utils/korean-particle'

type DiaryEmotion = 'joy' | 'sad' | 'angry'

const EMOTION_RESULTS: {
  id: DiaryEmotion
  label: string
  characterImg: string
  iconImg: string
  barClassName: string
}[] = [
  { id: 'joy', label: '기쁨', characterImg: happyCharacterImg, iconImg: happyIconImg, barClassName: styles.joyBar },
  { id: 'sad', label: '슬픔', characterImg: sadCharacterImg, iconImg: sadIconImg, barClassName: styles.sadBar },
  { id: 'angry', label: '화남', characterImg: angryCharacterImg, iconImg: angryIconImg, barClassName: styles.angryBar },
]

const countAnswers = (answers: unknown): Record<DiaryEmotion, number> => {
  const initial: Record<DiaryEmotion, number> = { joy: 0, sad: 0, angry: 0 }
  if (!Array.isArray(answers)) return initial
  return answers.reduce((acc, answer) => {
    if (answer === 'joy' || answer === 'sad' || answer === 'angry') acc[answer]++
    return acc
  }, initial)
}

const getBarStyles = (id: DiaryEmotion, count: number, barHeight: number, index: number) => {
  const characterBottom = id === 'joy'
    ? (count === 0 ? -1.6 : -0.8)
    : (count === 0 ? -3.2 : -2.4)

  return {
    bar: { height: `${barHeight}%`, animationDelay: `${0.3 + index * 0.2}s` },
    character: {
      bottom: `calc(${barHeight}% + ${characterBottom}rem)`,
      animationDelay: `${0.7 + index * 0.2}s`,
      ...(id === 'joy' && { left: '54%' }),
    },
    count: {
      bottom: `calc(${barHeight}% + ${count === 0 ? 7.6 : 9}rem)`,
      animationDelay: `${0.8 + index * 0.2}s`,
    },
  }
}

const DiaryResultPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const counts = countAnswers(state?.answers)
  const childName = localStorage.getItem('childrenName') ?? localStorage.getItem('childName') ?? ''
  const maxCount = Math.max(...EMOTION_RESULTS.map(({ id }) => counts[id]), 1)
  const hasConsonant = hasConsonantEnding(childName)

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
        <aside className={styles.profileCard}>
          <img src={happyCharacterImg} alt='' className={styles.profileImage} />
          <strong className={styles.childName}>{childName}</strong>
          <div className={styles.profileMessage}>
            <span>♥</span>
            <p>오늘도 다양한 감정을 잘 표현했어요!</p>
          </div>
          <div className={styles.flowerBed} />
        </aside>

        <section className={styles.graphCard}>
          <div className={styles.graphBadge}>
            <span>▮</span>
            <span>오늘의 감정 그래프</span>
          </div>
          <p className={styles.graphQuestion}>{childName}{hasConsonant ? '이가' : '가'} 느낀 감정들을 확인해볼까요?</p>

          <div className={styles.chart}>
            <div className={styles.yAxis} />
            <div className={styles.bars}>
              {EMOTION_RESULTS.map(({ id, label, characterImg, iconImg, barClassName }, index) => {
                const count = counts[id]
                const barHeight = Math.max((count / maxCount) * 58, count > 0 ? 18 : 7)
                const barStyles = getBarStyles(id, count, barHeight, index)

                return (
                  <div key={id} className={styles.barGroup}>
                    <div className={styles.barArea}>
                      <div className={styles.countBubble} style={barStyles.count}>
                        <span className={styles.countBubbleValue}>{count}</span>
                        <span className={styles.countBubbleUnit}>개</span>
                      </div>
                      <div className={styles.barCharacterBox} style={barStyles.character}>
                        <img src={characterImg} alt='' className={styles.barCharacter} />
                      </div>
                      <div className={`${styles.bar} ${barClassName}`} style={barStyles.bar} />
                    </div>
                    <img src={iconImg} alt='' className={styles.emotionIcon} />
                    <span className={styles.emotionLabel}>{label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <aside className={styles.noteCard}>
          <div className={styles.noteTitle}>
            <span>🌱</span>
            <span>오늘의 한마디</span>
          </div>
          <div className={styles.noteBody}>
            <strong className={styles.noteHeadline}>모든 감정은 소중해요!</strong>
            <p>기쁠 때도, 슬플 때도, 화가 날 때도 모두 소중한 {childName}{hasConsonant ? '이의' : '의'} 마음이에요.</p>
            <p>내일도 다양한 감정을 탐험해보자!</p>
            <img src={happyCharacterImg} alt='' className={styles.noteCharacter} />
          </div>
        </aside>
      </section>

      <nav className={styles.bottomNav}>
        <button type='button' className={styles.subButton} onClick={() => navigate('/')}>
          🏠 처음으로
        </button>
        <button type='button' className={styles.primaryButton} onClick={() => navigate('/diary')}>
          ★ 내일도 감정 일기 쓰기
          <span>›</span>
        </button>
        <button type='button' className={styles.subButton} onClick={() => navigate('/diary')}>
          📔 오늘의 일기 다시보기
        </button>
      </nav>

      <img src={happyCharacterImg} alt='' className={styles.cornerCharacter} />
    </main>
  )
}

export default DiaryResultPage
