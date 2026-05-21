import Card from '@shared/components/card/card'
import * as styles from './StoryCard.css'

interface StoryCardProps {
  imageUrl: string
  summary: string
  className?: string
}

const StoryCard = ({ imageUrl, summary, className }: StoryCardProps) => {
  return (
    <Card icon='📖' title='오늘의 이야기 요약' cardVariant='light' className={className}>
      <div className={styles.body}>
        <img src={imageUrl} className={styles.image} />
        <p className={styles.line}>{summary}</p>
      </div>
    </Card>
  )
}

export default StoryCard
