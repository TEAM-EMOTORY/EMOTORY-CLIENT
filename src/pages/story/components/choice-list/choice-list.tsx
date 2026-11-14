import { cn } from '@shared/utils/cn'

interface Choice {
  id: string
  text: string
}

interface ChoiceListProps {
  choices: Choice[]
  label?: string
  disabled?: boolean
  /** 이미 고른 선택지 — 있으면 그 선택지만 강조하고 나머지는 흐리게 (다시 고를 수 없음) */
  selectedId?: string
  onSelect: (id: string) => void
}

const SKELETON: Choice[] = [0, 1, 2].map((i) => ({ id: `skeleton-${i}`, text: '' }))

/**
 * 이야기 선택지 (Figma 06D).
 * 특정 선택지로 쏠리지 않도록 캐릭터·감정 색 없이 모든 선택지를 같은 모양으로 보여준다.
 */
const ChoiceList = ({
  choices,
  label = '어떻게 할까요?',
  disabled,
  selectedId,
  onSelect,
}: ChoiceListProps) => {
  const isLoading = choices.length === 0
  const items = isLoading ? SKELETON : choices

  return (
    <section className='flex flex-col gap-12'>
      <p className='flex items-center gap-8 self-start rounded-pill bg-yellow-100 py-10 pr-18 pl-20 text-label text-on-primary shadow-sm'>
        {selectedId ? '내가 고른 선택' : label}
        <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-20'>
          <path
            d='M12 3.2 14.6 8.6l5.9.8-4.3 4.1 1 5.9L12 16.6l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L12 3.2Z'
            stroke='currentColor'
            strokeWidth='1.8'
            strokeLinejoin='round'
          />
        </svg>
      </p>

      <ul className='flex flex-col gap-12'>
        {items.map((choice) => {
          const isPicked = selectedId === choice.id
          const isOther = !!selectedId && !isPicked
          return (
            <li key={choice.id}>
              <button
                type='button'
                aria-pressed={isPicked}
                disabled={disabled || isLoading || !!selectedId}
                onClick={() => onSelect(choice.id)}
                className={cn(
                  'flex min-h-68 w-full items-center gap-12 rounded-md border-2 border-border bg-surface-card py-8 pr-14 pl-24 text-left shadow-sm transition-[scale,opacity] active:scale-98 disabled:cursor-not-allowed',
                  isLoading && 'animate-pulse',
                  isPicked && 'border-yellow-500 bg-yellow-100',
                  isOther && 'opacity-45',
                )}
              >
                <span className='flex-1 break-keep text-caption text-ink'>{choice.text}</span>
                <span
                  aria-hidden
                  className={cn(
                    'flex size-32 shrink-0 items-center justify-center rounded-pill',
                    isPicked ? 'bg-yellow-500 text-on-primary' : 'bg-surface-inset text-ink-2',
                  )}
                >
                  <svg viewBox='0 0 24 24' fill='none' className='size-20'>
                    <path
                      d={isPicked ? 'm5 12.5 4.5 4.5L19 7.5' : 'm9.5 6 6 6-6 6'}
                      stroke='currentColor'
                      strokeWidth='2.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ChoiceList
