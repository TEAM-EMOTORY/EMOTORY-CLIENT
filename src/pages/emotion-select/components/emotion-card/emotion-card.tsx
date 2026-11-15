import type { CSSProperties } from 'react'
import { cn } from '@shared/utils/cn'

import EmotionIcon from '@shared/components/emotion-icon/emotion-icon'
import type { EmotionKey } from '@shared/components/emotion-icon/emotion-icon'

export type { EmotionKey }

interface EmotionCardProps {
  emotion: EmotionKey
  label: string
  img: string
  selected: boolean
  disabled?: boolean
  style?: CSSProperties
  onClick: () => void
}

// Figma "Emotion card" — 감정별 색 토큰 (Tailwind가 인식하도록 전체 클래스명으로 둔다)
const THEME: Record<
  EmotionKey,
  { card: string; line: string; text: string; solid: string; icon: string }
> = {
  joy: {
    card: 'bg-yellow-100',
    line: 'border-yellow-500',
    text: 'text-on-primary',
    solid: 'bg-yellow-500',
    icon: 'text-yellow-500',
  },
  sadness: {
    card: 'bg-sadness-100',
    line: 'border-sadness-500',
    text: 'text-sadness-700',
    solid: 'bg-sadness-500',
    icon: 'text-sadness-500',
  },
  anger: {
    card: 'bg-anger-100',
    line: 'border-anger-500',
    text: 'text-anger-700',
    solid: 'bg-anger-500',
    icon: 'text-anger-500',
  },
  fear: {
    card: 'bg-fear-100',
    line: 'border-fear-500',
    text: 'text-fear-700',
    solid: 'bg-fear-500',
    icon: 'text-fear-500',
  },
  disgust: {
    card: 'bg-disgust-100',
    line: 'border-disgust-500',
    text: 'text-disgust-700',
    solid: 'bg-disgust-500',
    icon: 'text-disgust-500',
  },
  surprise: {
    card: 'bg-surprise-100',
    line: 'border-surprise-500',
    text: 'text-surprise-700',
    solid: 'bg-surprise-500',
    icon: 'text-surprise-500',
  },
}

const EmotionCard = ({
  emotion,
  label,
  img,
  selected,
  disabled = false,
  style,
  onClick,
}: EmotionCardProps) => {
  const theme = THEME[emotion]

  return (
    <div
      style={style}
      className={cn(
        'relative shrink-0 transition-[rotate,translate,scale] duration-200 ease-out',
        selected && 'z-10 scale-108',
      )}
    >
      {/* 선택 시 카드 뒤 발광 */}
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-12 rounded-lg blur-[2.4rem] transition-opacity duration-300',
          theme.solid,
          selected ? 'animate-glow opacity-70' : 'opacity-0',
        )}
      />
      <button
        type='button'
        aria-pressed={selected}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          'relative flex h-232 w-132 cursor-pointer flex-col gap-8 rounded-md p-12 transition-shadow duration-200 disabled:cursor-not-allowed',
          theme.card,
          selected ? 'shadow-card' : 'shadow-sm',
        )}
      >
        {/* 안쪽 진한 라인 */}
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-5 rounded-sm',
            theme.line,
            selected ? 'border-3' : 'border-[1.5px]',
          )}
        />

        <img src={img} alt='' className='h-156 w-108 rounded-sm object-cover' />

        <span className={cn('flex h-44 items-center justify-center text-label', theme.text)}>
          {label}
        </span>

        {/* 감정 배지 */}
        <span
          aria-hidden
          className={cn(
            'absolute top-9 right-9 flex size-38 items-center justify-center rounded-pill border-2 bg-surface-card',
            theme.line,
            theme.icon,
          )}
        >
          <EmotionIcon emotion={emotion} className='size-22' />
        </span>

        {/* 선택 체크 배지 */}
        {selected && (
          <span
            aria-hidden
            className={cn(
              'absolute top-16 left-16 flex size-28 items-center justify-center rounded-pill text-surface-card',
              theme.solid,
            )}
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='size-18'
            >
              <path d='m5 12.5 4.5 4.5L19 7.5' />
            </svg>
          </span>
        )}
      </button>
    </div>
  )
}

export default EmotionCard
