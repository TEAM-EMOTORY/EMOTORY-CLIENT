import Card from '@shared/components/card/card'
import * as styles from './emotion-card.css'

interface EmotionCardProps {
  name: string
  imageUrl: string
  title: string
  tags: string[]
  className?: string
}

const EmotionCard = ({ name, imageUrl, title, tags, className }: EmotionCardProps) => {
  return (
    <Card
      icon={<span className={styles.headerStar}>★</span>}
      title={`${name}가 느낀 감정`}
      cardVariant='warm'
      className={className}
    >
      <div className={styles.body}>
        <img src={imageUrl} className={styles.characterImage} />
        <div className={styles.infoBlock}>
          <p className={styles.emotionTitle}>{title}</p>
          <div className={styles.tags}>
            {tags.map((tag) => (
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
