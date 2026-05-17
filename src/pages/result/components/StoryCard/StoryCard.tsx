import Card from '@shared/components/card/card'
import type { StoryResult } from '../../types/result.types'
import * as styles from './StoryCard.css'

interface StoryCardProps {
  story: StoryResult
  className?: string
}

const StoryCard = ({ story, className }: StoryCardProps) => {
  return (
    <Card icon='📖' title='오늘의 이야기 요약' className={className}>
      <div className={styles.body}>
        <div className={styles.imageBox}>
          {story.imageUrl ? (
            <img src={story.imageUrl} alt='오늘의 이야기' className={styles.image} />
          ) : (
            <span className={styles.imagePlaceholder}>🌿</span>
          )}
        </div>
        <div className={styles.textBlock}>
          {story.summaryLines.map((line, i) => (
            <p key={i} className={styles.line}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default StoryCard