import type { ReactNode } from 'react'
import { cn } from '@shared/utils/cn'

interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  color: 'yellow' | 'cream' | 'white'
  onClick: () => void
}

const VARIANTS = {
  // 1차 버튼 — 노랑 위 글자는 항상 on-primary
  yellow:
    'min-h-72 w-260 px-28 text-heading bg-yellow-500 text-on-primary shadow-primary disabled:bg-yellow-300 disabled:shadow-none disabled:cursor-not-allowed',
  // 보조 버튼
  cream: 'min-h-72 w-260 px-28 text-heading bg-surface-card text-ink-2 border border-border shadow-sm',
  white: 'px-32 py-18 text-label bg-surface-card text-ink-2',
} as const

const Button = ({ children, disabled = false, color = 'yellow', onClick }: ButtonProps) => {
  return (
    <button
      type='button'
      disabled={disabled}
      className={cn('flex items-center justify-center rounded-pill', VARIANTS[color])}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
