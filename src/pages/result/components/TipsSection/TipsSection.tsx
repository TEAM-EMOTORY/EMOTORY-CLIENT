import Card from '@shared/components/card/card'
import type { TipItem } from '../../types/result.types'
import * as styles from './TipsSection.css'

interface TipsSectionProps {
  tips: TipItem[]
}

const TipsSection = ({ tips }: TipsSectionProps) => {
  return (
    <Card icon='🌱' title='이런 감정이 들 때는 이렇게 해봐요!' headerVariant='light' className={styles.cardOverride}>
      <div className={styles.grid}>
        {tips.map((tip) => (
          <div key={tip.title} className={styles.item}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>{tip.icon}</span>
            </div>
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

export default TipsSection