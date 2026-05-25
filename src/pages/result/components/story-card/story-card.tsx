import Card from '@shared/components/card/card'
import * as styles from './story-card.css'

interface StoryCardProps {
  imageUrl: string
  summary: string
  isLoading?: boolean
  className?: string
}

const StoryCard = ({ imageUrl, summary, isLoading, className }: StoryCardProps) => {
  return (
    <Card icon='📖' title='오늘의 이야기 요약' cardVariant='light' className={className}>
      <div className={styles.body}>
        {isLoading || !imageUrl ? (
          <div className={styles.imagePlaceholder}>
            <div className={styles.dots}>
              <div className={styles.dot1} />
              <div className={styles.dot2} />
              <div className={styles.dot3} />
              <div className={styles.dot4} />
            </div>
          </div>
        ) : (
          <img src={imageUrl} className={styles.image} />
        )}
        <p className={styles.line}>{summary}</p>
      </div>
    </Card>
  )
}

export default StoryCard
