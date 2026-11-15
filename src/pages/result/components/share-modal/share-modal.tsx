import { useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@shared/utils/cn'

interface ShareModalProps {
  childName: string
  imageUrl?: string
  isPending: boolean
  isError: boolean
  onConfirm: (shared: boolean) => void
}

/**
 * 이야기 공개 여부 모달 (Figma 07B).
 * 한 번 정하면 바꿀 수 없으므로 닫기 버튼 없이 반드시 고르게 하고, 기본값은 안전한 "나만 볼래요".
 */
const ShareModal = ({ childName, imageUrl, isPending, isError, onConfirm }: ShareModalProps) => {
  const [shared, setShared] = useState(false)

  return (
    <div className='fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-ink/50 px-24'>
      <section
        role='dialog'
        aria-modal='true'
        aria-labelledby='share-modal-title'
        className='flex w-full max-w-560 flex-col items-center gap-24 rounded-lg border border-border bg-surface-card p-32 shadow-card'
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=''
            className='size-96 rounded-md object-cover shadow-sm outline-4 outline-surface-card'
          />
        ) : (
          <span className='size-96 animate-pulse rounded-md bg-surface-inset' />
        )}

        <header className='flex flex-col items-center gap-8 text-center'>
          <h2 id='share-modal-title' className='text-heading text-ink'>
            내 이야기를 친구들에게 보여줄까요?
          </h2>
          <p className='break-keep text-caption text-ink-2'>
            보여주면 다른 친구들도 {childName}의 이야기와 그림을 볼 수 있어요.
          </p>
        </header>

        <div role='radiogroup' aria-label='공개 여부' className='flex w-full gap-12'>
          <ShareOption
            selected={!shared}
            icon={<LockIcon />}
            title='나만 볼래요'
            description='나와 보호자만 볼 수 있어요'
            onSelect={() => setShared(false)}
          />
          <ShareOption
            selected={shared}
            icon={<FriendsIcon />}
            title='친구들에게 보여줄래요'
            description='다른 친구들의 이야기 목록에 나와요'
            onSelect={() => setShared(true)}
          />
        </div>

        <p className='flex w-full items-center gap-8 rounded-sm bg-surface-inset px-16 py-12 text-caption text-accent-text'>
          <FamilyIcon />
          보호자와 함께 정해 주세요.
        </p>

        {isError && (
          <p role='alert' className='text-caption text-accent-text'>
            저장하지 못했어요. 다시 눌러 주세요.
          </p>
        )}

        <button
          type='button'
          autoFocus
          disabled={isPending}
          onClick={() => onConfirm(shared)}
          className='flex h-60 w-280 items-center justify-center rounded-pill border-[1.5px] border-yellow-700 bg-yellow-500 text-label text-on-primary shadow-primary disabled:opacity-70'
        >
          {isPending ? '저장하는 중…' : '이렇게 할게요'}
        </button>
      </section>
    </div>
  )
}

interface ShareOptionProps {
  selected: boolean
  icon: ReactNode
  title: string
  description: string
  onSelect: () => void
}

const ShareOption = ({ selected, icon, title, description, onSelect }: ShareOptionProps) => (
  <button
    type='button'
    role='radio'
    aria-checked={selected}
    onClick={onSelect}
    className={cn(
      'relative flex flex-1 flex-col items-center gap-8 rounded-md px-16 py-24 text-center transition-colors',
      selected
        ? 'border-3 border-yellow-500 bg-yellow-100'
        : 'border-[1.5px] border-border bg-surface-card',
    )}
  >
    <span
      className={cn(
        'flex size-56 items-center justify-center rounded-pill',
        selected ? 'bg-yellow-500 text-on-primary' : 'bg-surface-inset text-ink-2',
      )}
    >
      {icon}
    </span>
    <span className='text-label text-ink'>{title}</span>
    <span className='break-keep text-caption text-ink-3'>{description}</span>
    {selected && (
      <span className='absolute top-12 right-12 flex size-26 items-center justify-center rounded-pill bg-yellow-500 text-on-primary'>
        <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-16'>
          <path
            d='m5 12.5 4.5 4.5L19 7.5'
            stroke='currentColor'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </span>
    )}
  </button>
)

const LockIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-30'>
    <rect x='5' y='10.5' width='14' height='10' rx='2.5' stroke='currentColor' strokeWidth='1.8' />
    <path d='M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5' stroke='currentColor' strokeWidth='1.8' />
    <circle cx='12' cy='15.5' r='1.4' fill='currentColor' />
  </svg>
)

const FriendsIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden className='size-30'>
    <circle cx='12' cy='7.5' r='2.6' />
    <circle cx='5.8' cy='9.5' r='2' />
    <circle cx='18.2' cy='9.5' r='2' />
    <path d='M7.5 18.5c0-2.6 2-4.6 4.5-4.6s4.5 2 4.5 4.6zM2.5 18.5c0-2 1.4-3.5 3.3-3.5.6 0 1.1.1 1.6.4-.6.9-1 1.9-1 3.1zM21.5 18.5c0-2-1.4-3.5-3.3-3.5-.6 0-1.1.1-1.6.4.6.9 1 1.9 1 3.1z' />
  </svg>
)

const FamilyIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden className='size-22 shrink-0'>
    <circle cx='7' cy='5.5' r='2.2' />
    <circle cx='17' cy='5.5' r='2.2' />
    <circle cx='12' cy='11' r='1.8' />
    <path d='M4.5 9.5h5L11 15v6H9v-4.5H7.5V21h-2v-5.5L4 15zM14.5 9.5h5L21 15h-1.5v6h-2v-4.5H16V21h-2v-6zM10.3 14h3.4v7h-1.2v-3h-1v3h-1.2z' />
  </svg>
)

export default ShareModal
