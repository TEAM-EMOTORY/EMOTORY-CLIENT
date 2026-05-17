import type { ReactNode } from 'react'
import * as styles from './card.css'

interface CardProps {
  icon: ReactNode
  title: string
  children: ReactNode
  cardVariant?: 'light' | 'soft' | 'warm'
  headerVariant?: 'default' | 'light'
  className?: string
}

const Card = ({ icon, title, children, cardVariant = 'light', headerVariant = 'default', className }: CardProps) => {
  return (
    <div className={`${styles.card} ${styles.cardVariants[cardVariant]}${className ? ` ${className}` : ''}`}>
      <div className={`${styles.header} ${styles.headerVariants[headerVariant]}`}>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}

export default Card