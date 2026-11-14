import type { ReactNode } from 'react'
import { cn } from '@shared/utils/cn'

interface CardProps {
  icon?: ReactNode
  title: string
  children: ReactNode
  cardVariant?: 'light' | 'warm'
  className?: string
}

const CARD = {
  light: 'bg-surface-card border-border',
  warm: 'bg-surface-page border-border',
} as const

const HEADER = {
  light: 'bg-surface-card border-border text-ink',
  warm: 'bg-surface-page border-border text-on-primary',
} as const

const Card = ({ icon, title, children, cardVariant = 'light', className }: CardProps) => {
  return (
    <div
      className={cn(
        'relative rounded-lg border-[1.5px] px-28 pt-56 pb-32 shadow-card',
        CARD[cardVariant],
        className,
      )}
    >
      <div
        className={cn(
          'absolute top-0 left-1/2 flex -translate-x-[70%] -translate-y-1/2 gap-8 whitespace-nowrap rounded-pill border-[1.5px] px-26 py-9 text-label shadow-sm',
          HEADER[cardVariant],
        )}
      >
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}

export default Card
