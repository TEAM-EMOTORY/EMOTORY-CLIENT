import { cn } from '@shared/utils/cn'

interface StartButtonProps {
  disabled?: boolean
  onClick: () => void
}

// 반짝이 위치 (버튼 기준). delay는 서로 다르게 줘서 번갈아 반짝이게 한다.
const SPARKLES = [
  { className: '-top-14 left-24 size-20', delay: '0s' },
  { className: '-top-8 right-40 size-14', delay: '0.6s' },
  { className: 'top-1/2 -right-20 size-18', delay: '1.1s' },
  { className: '-bottom-12 left-1/3 size-12', delay: '0.9s' },
  { className: 'top-1/3 -left-18 size-14', delay: '0.3s' },
]

const StartButton = ({ disabled = false, onClick }: StartButtonProps) => {
  return (
    <div className='relative'>
      {/* 바깥 발광 */}
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-10 rounded-pill bg-yellow-300 blur-[2rem] transition-opacity',
          disabled ? 'opacity-0' : 'animate-glow',
        )}
      />

      <button
        type='button'
        disabled={disabled}
        onClick={onClick}
        className={cn(
          'relative flex h-80 w-350 cursor-pointer items-center justify-center gap-12 overflow-hidden rounded-pill',
          'border-4 border-yellow-100 bg-linear-to-b from-yellow-300 to-yellow-500',
          'shadow-primary inset-shadow-[0_-0.4rem_0.8rem_var(--color-yellow-700)]',
          'transition-[scale,filter] duration-150 active:scale-97',
          'disabled:cursor-not-allowed disabled:opacity-70 disabled:saturate-50',
        )}
      >
        {/* 윗면 광택 */}
        <span
          aria-hidden
          className='pointer-events-none absolute inset-x-20 top-4 h-2/5 rounded-pill bg-linear-to-b from-white/70 to-white/0'
        />

        <span
          aria-hidden
          className='relative flex size-48 items-center justify-center rounded-pill border-2 border-white bg-white/60 text-on-primary shadow-sm'
        >
          <BookHeartIcon className='size-28' />
        </span>
        <span className='relative text-subtitle text-on-primary [text-shadow:0_0.15rem_0_rgb(255_255_255/0.55)]'>
          이야기 시작하기
        </span>
      </button>

      {!disabled &&
        SPARKLES.map(({ className, delay }) => (
          <SparkleIcon
            key={className}
            className={cn('pointer-events-none absolute animate-sparkle text-white', className)}
            style={{ animationDelay: delay }}
          />
        ))}
    </div>
  )
}

const BookHeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className}>
    <path
      d='M12 6.5C10.3 5.3 8 4.8 4 5v13c4-.2 6.3.3 8 1.5 1.7-1.2 4-1.7 8-1.5V5c-4-.2-6.3.3-8 1.5Zm0 0v13'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.2 9.3c.6-.6 1.6-.6 2.1.1.5-.7 1.5-.7 2.1-.1.6.6.5 1.5-.1 2.1L10.3 13l-2-1.6c-.6-.6-.7-1.5-.1-2.1Z'
      fill='currentColor'
      transform='translate(1.7 -.4)'
    />
  </svg>
)

const SparkleIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden className={className} style={style}>
    <path d='M12 1.5c.6 4.9 2.6 6.9 7.5 7.5v.9c-4.9.6-6.9 2.6-7.5 7.5h-.9c-.6-4.9-2.6-6.9-7.5-7.5V9c4.9-.6 6.9-2.6 7.5-7.5h.9Z' />
  </svg>
)

export default StartButton
