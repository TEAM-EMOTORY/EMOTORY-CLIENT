import Card from '@shared/components/card/card'
import * as styles from './tip-card.css'

interface TipCardProps {
  tips: string[]
}

const TipCard = ({ tips }: TipCardProps) => {
  return (
    <Card icon='🌱' title='이런 감정이 들 때는 이렇게 해봐요!' cardVariant='light'>
      <div className={styles.grid}>
        {tips.map((tip, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.content}>
              <p className={styles.tipDesc}>{tip}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default TipCard
