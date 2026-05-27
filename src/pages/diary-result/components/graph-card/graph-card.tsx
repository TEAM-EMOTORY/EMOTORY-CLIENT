import * as styles from './graph-card.css'
import { EMOTION_RESULTS, type DiaryEmotion } from './constants'

const getBarStyles = (id: DiaryEmotion, count: number, barHeight: number, index: number) => {
  const characterBottom = id === 'joy' ? (count === 0 ? -1.6 : -0.8) : count === 0 ? -3.2 : -2.4
  return {
    bar: { height: `${barHeight}%`, animationDelay: `${0.3 + index * 0.2}s` },
    character: {
      bottom: `calc(${barHeight}% + ${characterBottom}rem)`,
      animationDelay: `${0.7 + index * 0.2}s`,
      ...(id === 'joy' && { left: '54%' }),
    },
    count: {
      bottom: `calc(${barHeight}% + ${count === 0 ? '7.6rem' : 'min(9rem, 9dvh)'})`,
      animationDelay: `${0.8 + index * 0.2}s`,
    },
  }
}

interface GraphCardProps {
  counts: Record<DiaryEmotion, number>
  maxCount: number
  childName: string
  hasConsonant: boolean
}

const GraphCard = ({ counts, maxCount, childName, hasConsonant }: GraphCardProps) => (
  <section className={styles.graphCard}>
    <div className={styles.graphBadge}>
      <span>▮</span>
      <span>오늘의 감정 그래프</span>
    </div>
    <p className={styles.graphQuestion}>
      {childName}{hasConsonant ? '이가' : '가'} 느낀 감정들을 확인해볼까요?
    </p>

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
)

export default GraphCard
