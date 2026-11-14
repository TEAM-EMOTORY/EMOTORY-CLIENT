import { useState } from 'react'
import { cn } from '@shared/utils/cn'

type CardColor = 'yellow' | 'blue' | 'purple'

const CARD: Record<CardColor, string> = {
  yellow: 'bg-surface-page -rotate-2',
  blue: 'bg-sadness-100 -translate-y-5',
  purple: 'bg-fear-100 rotate-2',
}

const INNER: Record<CardColor, string> = {
  yellow: 'border-border',
  blue: 'border-sadness-500/30',
  purple: 'border-fear-500/30',
}

const ARROW: Record<CardColor, string> = {
  yellow: 'bg-yellow-500 text-on-primary',
  blue: 'bg-sadness-500 text-white',
  purple: 'bg-fear-500 text-white',
}

interface ChoiceCardProps {
  text: string
  imageSrc?: string
  color?: CardColor
  onClick: () => void
  disabled?: boolean
}

const ChoiceCard = ({ text, imageSrc, color = 'yellow', onClick, disabled }: ChoiceCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    if (isAnimating) return

    if (!imageSrc) {
      onClick()
      return
    }

    setIsAnimating(true)
    window.setTimeout(() => {
      setIsAnimating(false)
      onClick()
    }, 360)
  }

  return (
    <button
      type='button'
      className={cn(
        'relative flex min-h-165 flex-1 items-stretch rounded-md p-5 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40',
        CARD[color],
        isAnimating &&
          'animate-card-pop shadow-card brightness-[0.94] saturate-[1.65] after:pointer-events-none after:absolute after:inset-5 after:rounded-sm after:border-[2.4px] after:border-yellow-500 after:bg-yellow-500/18 disabled:pointer-events-auto disabled:cursor-pointer disabled:opacity-100',
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      <div
        className={cn(
          'relative flex flex-1 items-center justify-center rounded-sm border-[1.5px] px-60 py-32',
          INNER[color],
        )}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt=''
            className={cn(
              'pointer-events-none absolute bottom-12 left-18 max-h-[80%] w-[clamp(6rem,24%,8rem)] object-contain drop-shadow-[0_0.6rem_0.8rem_rgba(104,70,43,0.14)]',
              isAnimating && 'animate-character-bounce',
            )}
          />
        )}
        <p className='w-full break-keep text-center text-heading text-ink'>{text}</p>
        <span
          className={cn(
            'absolute right-16 bottom-16 flex size-44 items-center justify-center rounded-full pb-2 text-[4.4rem]',
            ARROW[color],
          )}
        >
          ›
        </span>
      </div>
    </button>
  )
}

export default ChoiceCard
