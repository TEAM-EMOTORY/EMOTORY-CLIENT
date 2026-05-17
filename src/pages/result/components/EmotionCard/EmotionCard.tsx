import Card from '@shared/components/card/card'
import type { EmotionResult } from '../../types/result.types'
import * as styles from './EmotionCard.css'

interface EmotionCardProps {
  emotion: EmotionResult
  className?: string
}

const StarIcon = () => <span className={styles.headerStar}>★</span>

const EmotionCard = ({ emotion, className }: EmotionCardProps) => {
  return (
    <Card icon={<StarIcon />} title='토리가 느낀 감정' className={className}>
      <div className={styles.body}>
        <div className={styles.characterBlock}>
          <div className={styles.characterBox}>
            {emotion.characterImageUrl ? (
              <img src={emotion.characterImageUrl} alt='토리' className={styles.characterImage} />
            ) : (
              <span className={styles.characterPlaceholder}>🐥</span>
            )}
          </div>
          <div className={styles.bubble}>{emotion.bubbleIcon ?? '💭'}</div>
        </div>
        <div className={styles.infoBlock}>
          <h2 className={styles.emotionTitle}>{emotion.title}</h2>
          <p className={styles.description}>{emotion.description}</p>
          <div className={styles.tags}>
            {emotion.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default EmotionCard
