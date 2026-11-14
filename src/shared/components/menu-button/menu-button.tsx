import type { ReactNode } from 'react'
import { cn } from '@shared/utils/cn'

export type MenuType = 'dictionary' | 'my-emotion' | 'guide' | 'bookshelf'

interface MenuButtonProps {
  type: MenuType
  onClick?: () => void
  disabled?: boolean
}

// Figma "Menu button" (시안 A — 홈 이미지 버튼과 맞춤): 파스텔 원 = 감정 색 -500 62%, 라벨 = -700
const MENU: Record<MenuType, { label: string; disc: string; text: string; icon: ReactNode }> = {
  dictionary: {
    label: '감정 사전',
    disc: 'bg-fear-500/62',
    text: 'text-fear-700',
    icon: (
      <>
        <path
          d='M20 34C10 27 4 21.5 4 14.5 4 9.6 7.8 6 12.4 6c3.2 0 5.9 1.7 7.6 4.3C21.7 7.7 24.4 6 27.6 6 32.2 6 36 9.6 36 14.5 36 21.5 30 27 20 34Z'
          fill='#fff'
        />
        <Face cx={20} cy={17} />
      </>
    ),
  },
  'my-emotion': {
    label: '나의 감정',
    disc: 'bg-sadness-500/62',
    text: 'text-sadness-700',
    icon: (
      <>
        <path
          d='M20 3.5l4.9 10 11 1.6-8 7.8 1.9 11L20 28.7l-9.8 5.2 1.9-11-8-7.8 11-1.6L20 3.5Z'
          fill='#fff'
          stroke='#fff'
          strokeWidth='2.5'
          strokeLinejoin='round'
        />
        <Face cx={20} cy={19.5} scale={0.85} />
      </>
    ),
  },
  guide: {
    label: '부모 가이드',
    disc: 'bg-disgust-500/62',
    text: 'text-disgust-700',
    icon: (
      <>
        <circle cx='20' cy='22' r='13' fill='#fff' />
        <path
          d='M20 9.5c0-3 2-5 5-5.5-.2 3-2.2 5-5 5.5Zm0 0c0-2.6-1.8-4.4-4.4-4.8.2 2.6 1.9 4.4 4.4 4.8Z'
          className='fill-leaf'
        />
        <path
          d='M14 21q1.5-1.6 3 0M23 21q1.5-1.6 3 0M17.5 25q2.5 2.4 5 0'
          className='stroke-ink'
          strokeWidth='1.6'
          strokeLinecap='round'
        />
        <Blush cx={20} cy={24.5} gap={7.5} />
      </>
    ),
  },
  bookshelf: {
    label: '이야기 책장',
    disc: 'bg-anger-500/62',
    text: 'text-anger-700',
    icon: (
      <>
        <path
          d='M20 11c-4-2.6-9-3.2-15-2.8v21.6c6-.4 11 .2 15 2.8 4-2.6 9-3.2 15-2.8V8.2C29 7.8 24 8.4 20 11Z'
          fill='#fff'
        />
        <path d='M20 11v21.6' className='stroke-border' strokeWidth='1.6' />
        <Face cx={20} cy={19} scale={0.8} />
      </>
    ),
  },
}

/** 화면 오른쪽 위 메뉴 버튼 — 크림색 아치 + 파스텔 원 안의 얼굴 아이콘 + 색 라벨 */
const MenuButton = ({ type, onClick, disabled }: MenuButtonProps) => {
  const { label, disc, text, icon } = MENU[type]

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className='flex h-100 w-84 flex-col items-center gap-4 rounded-t-[4.2rem] rounded-b-[1.8rem] bg-yellow-100 px-4 pt-6 shadow-[0_0.3rem_0_#e3c799,0_0.6rem_1rem_rgb(59_42_26/0.14)] inset-shadow-[0_0.2rem_0.2rem_rgb(255_255_255/0.85)] transition-transform active:translate-y-2 active:shadow-[0_0.1rem_0_#e3c799,0_0.3rem_0.6rem_rgb(59_42_26/0.14)] disabled:cursor-not-allowed disabled:opacity-60'
    >
      <span
        aria-hidden
        className={cn(
          'flex size-66 shrink-0 items-center justify-center rounded-pill inset-shadow-[0_0.3rem_0.3rem_rgb(255_255_255/0.35)]',
          disc,
        )}
      >
        <svg viewBox='0 0 40 40' fill='none' className='size-40'>
          {icon}
        </svg>
      </span>
      <span className={cn('text-caption font-extrabold whitespace-nowrap', text)}>{label}</span>
    </button>
  )
}

/** 눈 · 미소 · 볼터치 */
function Face({ cx, cy, scale = 1 }: { cx: number; cy: number; scale?: number }) {
  const s = scale
  return (
    <>
      <ellipse cx={cx - 5 * s} cy={cy} rx={1.6 * s} ry={2 * s} className='fill-ink' />
      <ellipse cx={cx + 5 * s} cy={cy} rx={1.6 * s} ry={2 * s} className='fill-ink' />
      <path
        d={`M${cx - 3 * s} ${cy + 4 * s}q${3 * s} ${3 * s} ${6 * s} 0`}
        className='stroke-ink'
        strokeWidth={1.6 * s}
        strokeLinecap='round'
      />
      <Blush cx={cx} cy={cy + 3.5 * s} gap={8.5 * s} scale={s} />
    </>
  )
}

function Blush({
  cx,
  cy,
  gap,
  scale = 1,
}: {
  cx: number
  cy: number
  gap: number
  scale?: number
}) {
  return (
    <>
      <ellipse cx={cx - gap} cy={cy} rx={2.2 * scale} ry={1.4 * scale} fill='#F7A8A8' />
      <ellipse cx={cx + gap} cy={cy} rx={2.2 * scale} ry={1.4 * scale} fill='#F7A8A8' />
    </>
  )
}

export default MenuButton
