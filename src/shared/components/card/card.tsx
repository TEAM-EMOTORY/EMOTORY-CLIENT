import type { ReactNode } from 'react'
import * as styles from './card.css'

interface CardProps {
  icon?: ReactNode
  title: string
  children: ReactNode
  cardVariant?: 'light' | 'warm'
}

const Card = ({ icon, title, children, cardVariant = 'light' }: CardProps) => {
  return (
    <div className={styles.card({ color: cardVariant })}>
      <div className={styles.header({ color: cardVariant })}>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}

export default Card
