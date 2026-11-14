import type { ReactNode } from 'react'
import { cn } from '@shared/utils/cn'

interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  color: 'yellow' | 'soft' | 'cream' | 'white'
  size?: 'lg' | 'md'
  onClick: () => void
}

const VARIANTS = {
  // 1차 버튼 — 노랑 위 글자는 항상 on-primary
  yellow:
    'bg-yellow-500 text-on-primary border-[1.5px] border-yellow-700 shadow-primary disabled:bg-yellow-300 disabled:border-yellow-300 disabled:shadow-none disabled:cursor-not-allowed',
  // 보조 버튼 (연노랑) — Figma Button / Type=Soft
  soft: 'bg-yellow-100 text-on-primary border-[1.5px] border-yellow-300 shadow-sm',
  // 보조 버튼 (크림)
  cream: 'bg-surface-card text-ink-2 border border-border shadow-sm',
  white: 'bg-surface-card text-ink-2',
} as const

const SIZES = {
  lg: 'min-h-72 w-260 px-28 text-heading',
  md: 'h-64 w-full px-32 text-label',
} as const

const Button = ({
  children,
  disabled = false,
  color = 'yellow',
  size = 'lg',
  onClick,
}: ButtonProps) => {
  return (
    <button
      type='button'
      disabled={disabled}
      className={cn(
        'flex items-center justify-center rounded-pill',
        color === 'white' ? 'px-32 py-18 text-label' : SIZES[size],
        VARIANTS[color],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
