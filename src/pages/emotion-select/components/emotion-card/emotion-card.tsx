import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@shared/utils/cn'

export type EmotionKey = 'joy' | 'sadness' | 'anger' | 'fear' | 'disgust' | 'surprise'

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
          {EMOTION_ICONS[emotion]}
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

// Figma "Icon / emotion / *" 컴포넌트와 동일한 SVG
const Icon = ({ children }: { children: ReactNode }) => (
  <svg viewBox='0 0 24 24' fill='none' className='size-22'>
    {children}
  </svg>
)

const EMOTION_ICONS: Record<EmotionKey, ReactNode> = {
  joy: (
    <Icon>
      <path
        d='M12 2.6l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 16.9l-5.6 2.9 1.1-6.2L3 9.2l6.2-.9L12 2.6Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinejoin='round'
      />
    </Icon>
  ),
  sadness: (
    <Icon>
      <path
        d='M7.2 15.2a4.1 4.1 0 0 1-.7-8.15A5.6 5.6 0 0 1 17.1 6.3a4.45 4.45 0 0 1 .4 8.9H7.2Z'
        fill='currentColor'
      />
      <path
        d='M8.5 18.2l-.9 2.2M12.3 18.2l-.9 2.2M16.1 18.2l-.9 2.2'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </Icon>
  ),
  anger: (
    <Icon>
      <path
        d='M13.6 2.5 5.2 13.4h6.2l-1.4 8.1 8.8-11.2h-6.3l1.1-7.8Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinejoin='round'
      />
    </Icon>
  ),
  fear: (
    <Icon>
      <path
        d='M12 3a7 7 0 0 0-7 7v10.1c0 .75.86 1.17 1.45.72l1.55-1.18 1.86 1.4a1 1 0 0 0 1.2 0L12 19.6l1.94 1.44a1 1 0 0 0 1.2 0l1.86-1.4 1.55 1.18c.59.45 1.45.03 1.45-.72V10a7 7 0 0 0-7-7Z'
        fill='currentColor'
      />
      <circle cx='9.4' cy='10.6' r='1.4' className='fill-surface-card' />
      <circle cx='14.6' cy='10.6' r='1.4' className='fill-surface-card' />
      <ellipse cx='12' cy='14.6' rx='1.5' ry='1.9' className='fill-surface-card' />
    </Icon>
  ),
  disgust: (
    <Icon>
      <circle cx='12' cy='12' r='9.2' fill='currentColor' />
      <path
        d='M7.6 8.6l2.2 1.4-2.2 1.4M16.4 8.6l-2.2 1.4 2.2 1.4M7.8 16c.7-.9 1.4-.9 2.1 0s1.4.9 2.1 0 1.4-.9 2.1 0 1.4.9 2.1 0'
        className='stroke-surface-card'
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  ),
  surprise: (
    <Icon>
      <path
        d='M10 3.4h4l-.7 11.2h-2.6L10 3.4Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='19.4' r='2' fill='currentColor' />
    </Icon>
  ),
}

export default EmotionCard
