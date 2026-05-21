import Card from '@shared/components/card/card'
import * as styles from './TipCard.css'

interface TipCardProps {
  tips: { imageUrl: string; title: string; description: string }[]
}

const TipCard = ({ tips }: TipCardProps) => {
  return (
    <Card icon='🌱' title='이런 감정이 들 때는 이렇게 해봐요!' cardVariant='light'>
      <div className={styles.grid}>
        {tips.map((tip) => (
          <div key={tip.title} className={styles.item}>
            <img src={tip.imageUrl} className={styles.itemImage} />
            <div className={styles.content}>
              <p className={styles.tipTitle}>{tip.title}</p>
              <p className={styles.tipDesc}>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default TipCard
