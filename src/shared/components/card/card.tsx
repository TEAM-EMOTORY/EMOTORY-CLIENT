import type { ReactNode } from 'react'
import * as styles from './card.css'

interface CardProps {
  icon: ReactNode
  title: string
  children: ReactNode
  headerVariant?: 'default' | 'light'
  className?: string
}

const Card = ({ icon, title, children, headerVariant = 'default', className }: CardProps) => {
  return (
    <div className={`${styles.card}${className ? ` ${className}` : ''}`}>
      <div className={`${styles.header} ${styles.headerVariants[headerVariant]}`}>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}

export default Card