import type { ReactNode } from 'react'

interface BookProps {
  /** 펼친 두 페이지 영역 (책 넘김 컴포넌트가 들어온다) */
  children: ReactNode
  /** 책 위에 고정되는 UI — 넘김 효과와 무관하게 제자리에 있는다 */
  overlay?: ReactNode
  /** 있으면 왼쪽 아래 귀퉁이가 "앞 페이지" 버튼이 된다 */
  onPrev?: () => void
  /** 있으면 오른쪽 아래 귀퉁이가 "다음 페이지" 버튼이 된다 */
  onNext?: () => void
}

// 페이지 두께: 바깥쪽으로 종이가 조금씩 어긋나게 쌓인 모습 (border 색 선 + 종이 색 면 반복)
const EDGE_LEFT =
  'shadow-[-0.3rem_0.15rem_0_var(--color-surface-inset),-0.35rem_0.2rem_0_var(--color-border),-0.6rem_0.3rem_0_var(--color-surface-card),-0.65rem_0.35rem_0_var(--color-border),-0.9rem_0.45rem_0_var(--color-surface-inset),-0.95rem_0.5rem_0_var(--color-border)]'
const EDGE_RIGHT =
  'shadow-[0.3rem_0.15rem_0_var(--color-surface-inset),0.35rem_0.2rem_0_var(--color-border),0.6rem_0.3rem_0_var(--color-surface-card),0.65rem_0.35rem_0_var(--color-border),0.9rem_0.45rem_0_var(--color-surface-inset),0.95rem_0.5rem_0_var(--color-border)]'

const CURL_SIZE = 'size-[clamp(4.8rem,6vw,6.4rem)]'

/**
 * 화면을 꽉 채우는 펼친 책 (Figma 06D).
 * 표지 · 책 두께 · 책갈피 · 귀퉁이 말림 같은 "고정된 책 껍데기"만 그리고,
 * 실제 페이지는 children(책 넘김 영역)으로 받는다.
 */
const Book = ({ children, overlay, onPrev, onNext }: BookProps) => {
  return (
    <div className='relative h-dvh w-full overflow-hidden bg-border-strong px-[clamp(1.2rem,1.4vw,2rem)] py-[clamp(0.8rem,1.2vh,1.4rem)]'>
      <div className='relative size-full'>
        {/* 책 두께 */}
        <div aria-hidden className={`absolute inset-y-0 left-0 w-1/2 rounded-sm ${EDGE_LEFT}`} />
        <div aria-hidden className={`absolute inset-y-0 right-0 w-1/2 rounded-sm ${EDGE_RIGHT}`} />

        {/* 펼친 두 페이지 */}
        <div className='relative size-full overflow-hidden rounded-sm bg-surface-card shadow-[0_0.6rem_1.8rem_rgb(59_42_26/0.35)]'>
          {children}
        </div>

        {/* 귀퉁이 말림 — 넘길 수 있을 때만 버튼, 아니면 장식 */}
        <Corner side='left' label='앞 페이지 보기' onClick={onPrev} />
        <Corner side='right' label='다음 페이지 보기' onClick={onNext} />

        {/* 책갈피 */}
        <svg
          aria-hidden
          viewBox='0 0 26 96'
          className='absolute -top-[clamp(0.8rem,1.2vh,1.4rem)] right-[8%] z-20 h-[clamp(7.2rem,12vh,9.6rem)] text-accent drop-shadow-[0.1rem_0.2rem_0.3rem_rgb(59_42_26/0.3)]'
        >
          <path d='M0 0H26V96L13 84 0 96Z' fill='currentColor' />
          <path d='M4 0V86' stroke='white' strokeOpacity='0.35' strokeWidth='1.5' />
        </svg>

        <div className='pointer-events-none absolute inset-0 z-30 *:pointer-events-auto'>
          {overlay}
        </div>
      </div>
    </div>
  )
}

const Corner = ({
  side,
  label,
  onClick,
}: {
  side: 'left' | 'right'
  label: string
  onClick?: () => void
}) => {
  const position = side === 'left' ? 'left-0' : 'right-0'
  return onClick ? (
    <button
      type='button'
      aria-label={label}
      onClick={onClick}
      className={`absolute bottom-0 z-20 ${position} ${CURL_SIZE}`}
    >
      <PageCurl flip={side === 'left'} />
    </button>
  ) : (
    <span aria-hidden className={`absolute bottom-0 z-20 ${position} ${CURL_SIZE}`}>
      <PageCurl flip={side === 'left'} />
    </span>
  )
}

/** 페이지 귀퉁이 말림 */
const PageCurl = ({ flip = false }: { flip?: boolean }) => (
  <svg
    viewBox='0 0 64 64'
    className='size-full drop-shadow-[-0.2rem_-0.2rem_0.3rem_rgb(59_42_26/0.25)]'
    style={flip ? { scale: '-1 1' } : undefined}
  >
    <path d='M64 22V64H22Z' className='fill-border-strong' />
    <path
      d='M64 22C52 26 30 40 22 64 20 44 24 30 30 24 40 22 52 21 64 22Z'
      className='fill-surface-inset'
    />
    <path d='M64 22C52 26 30 40 22 64' className='stroke-border' strokeWidth='1' fill='none' />
  </svg>
)

export default Book
