import type { ReactNode } from 'react'
import { cn } from '@shared/utils/cn'

interface CardProps {
  icon?: ReactNode
  title: string
  children: ReactNode
  /** 제목 글자색 (Figma: 기본 ink-2, 팁 카드는 leaf) */
  titleClassName?: string
  className?: string
}

/**
 * 결과 화면 카드 (Figma 07 "Summary/Feeling/Tips card" + "Section pill").
 * 제목 알약이 카드 윗변 가운데에 걸쳐 있다.
 */
const Card = ({ icon, title, children, titleClassName, className }: CardProps) => {
  return (
    <section
      className={cn(
        'relative rounded-lg border border-border bg-surface-card shadow-card',
        className,
      )}
    >
      <h2
        className={cn(
          'absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-8 whitespace-nowrap rounded-pill border border-border bg-surface-card px-20 py-9 text-label text-ink-2 shadow-sm',
          titleClassName,
        )}
      >
        {icon}
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Card
