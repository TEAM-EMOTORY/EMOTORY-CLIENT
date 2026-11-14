import type { ReactNode } from 'react'

interface BookProps {
  /** 왼쪽 페이지 (글 + 선택지) */
  left: ReactNode
  /** 오른쪽 페이지 (일러스트) */
  right: ReactNode
  /** 책 위에 고정되는 UI — 넘김 효과와 무관하게 제자리에 있는다 */
  overlay?: ReactNode
  onPrev?: () => void
}

// 페이지 두께: 바깥쪽으로 종이가 조금씩 어긋나게 쌓인 모습 (border 색 선 + 종이 색 면 반복)
const EDGE_LEFT =
  'shadow-[-0.3rem_0.15rem_0_var(--color-surface-inset),-0.35rem_0.2rem_0_var(--color-border),-0.6rem_0.3rem_0_var(--color-surface-card),-0.65rem_0.35rem_0_var(--color-border),-0.9rem_0.45rem_0_var(--color-surface-inset),-0.95rem_0.5rem_0_var(--color-border)]'
const EDGE_RIGHT =
  'shadow-[0.3rem_0.15rem_0_var(--color-surface-inset),0.35rem_0.2rem_0_var(--color-border),0.6rem_0.3rem_0_var(--color-surface-card),0.65rem_0.35rem_0_var(--color-border),0.9rem_0.45rem_0_var(--color-surface-inset),0.95rem_0.5rem_0_var(--color-border)]'

/**
 * 화면을 꽉 채우는 펼친 책 (Figma 06D).
 * 고정 px 대신 화면 비율에 따라 늘어나도록 두 페이지를 flex-1로 나눈다.
 */
const Book = ({ left, right, overlay, onPrev }: BookProps) => {
  return (
    <div className='relative h-dvh w-full overflow-hidden bg-border-strong px-[clamp(1.2rem,1.4vw,2rem)] py-[clamp(0.8rem,1.2vh,1.4rem)]'>
      <div className='relative size-full'>
        {/* 책 두께 */}
        <div aria-hidden className={`absolute inset-y-0 left-0 w-1/2 rounded-sm ${EDGE_LEFT}`} />
        <div aria-hidden className={`absolute inset-y-0 right-0 w-1/2 rounded-sm ${EDGE_RIGHT}`} />

        {/* 펼친 두 페이지 — 책 넘김 인터랙션은 이 영역에 붙인다 */}
        <div className='relative flex size-full overflow-hidden rounded-sm shadow-[0_0.6rem_1.8rem_rgb(59_42_26/0.35)]'>
          <section className='relative flex min-w-0 flex-1 flex-col bg-surface-card'>
            <div
              aria-hidden
              className='pointer-events-none absolute inset-0 bg-linear-to-r from-ink/6 to-transparent to-12%'
            />
            {left}
            <div
              aria-hidden
              className='pointer-events-none absolute inset-y-0 right-0 w-[18%] bg-linear-to-r from-transparent via-ink/10 via-75% to-ink/28'
            />
            {onPrev && (
              <button
                type='button'
                aria-label='이전 페이지'
                onClick={onPrev}
                className='absolute bottom-0 left-0 size-[clamp(4.8rem,6vw,6.4rem)]'
              >
                <PageCurl flip />
              </button>
            )}
          </section>

          <section className='relative min-w-0 flex-1 overflow-hidden bg-surface-page'>
            {right}
            <div
              aria-hidden
              className='pointer-events-none absolute inset-y-0 left-0 w-[22%] bg-linear-to-r from-ink/45 via-ink/18 via-25% to-transparent'
            />
            <span aria-hidden className='absolute right-0 bottom-0 size-[clamp(4.8rem,6vw,6.4rem)]'>
              <PageCurl />
            </span>
          </section>

          {/* 책등 */}
          <div
            aria-hidden
            className='pointer-events-none absolute inset-y-0 left-1/2 w-2 -translate-x-1/2 bg-ink/22'
          />
        </div>

        {/* 책갈피 */}
        <svg
          aria-hidden
          viewBox='0 0 26 96'
          className='absolute -top-[clamp(0.8rem,1.2vh,1.4rem)] right-[8%] h-[clamp(7.2rem,12vh,9.6rem)] text-accent drop-shadow-[0.1rem_0.2rem_0.3rem_rgb(59_42_26/0.3)]'
        >
          <path d='M0 0H26V96L13 84 0 96Z' fill='currentColor' />
          <path d='M4 0V86' stroke='white' strokeOpacity='0.35' strokeWidth='1.5' />
        </svg>

        {overlay}
      </div>
    </div>
  )
}

/** 페이지 귀퉁이 말림 — 넘길 수 있다는 힌트 */
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
