import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ShelfBook from './components/shelf-book/shelf-book'
import { useSharedStories } from './hooks/use-shared-stories'
import type { SharedStory } from './apis/shared-stories'

const PER_SHELF = 5

const chunk = <T,>(items: T[], size: number) =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
    items.slice(i * size, i * size + size),
  )

/** 친구들의 이야기 책장 (Figma 08) — 공개된 이야기를 표지가 보이게 꽂아 둔 책장 */
const BookshelfPage = () => {
  const navigate = useNavigate()
  const {
    data: stories = [],
    isPending,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useSharedStories()

  // 책장 맨 아래에 닿으면 다음 책들을 불러온다
  const sentinelRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = sentinelRef.current
    if (!el || !hasNextPage) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isFetchingNextPage) fetchNextPage()
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  const shelves: (SharedStory | null)[][] = isPending
    ? chunk(Array<null>(PER_SHELF * 2).fill(null), PER_SHELF)
    : chunk(stories, PER_SHELF)

  return (
    <main className='flex h-dvh flex-col px-[clamp(2.4rem,3.6vw,4rem)] pt-[clamp(2rem,3.4vh,3.4rem)] pb-[clamp(1.6rem,2.4vh,2.4rem)]'>
      <header className='relative flex flex-col items-center gap-6 pb-[clamp(1.6rem,2.6vh,2.4rem)]'>
        <button
          type='button'
          onClick={() => navigate('/emotion-select')}
          className='absolute top-0 left-0 flex h-46 items-center gap-8 rounded-pill border border-border bg-surface-card px-24 text-label text-ink-2 shadow-sm'
        >
          <HomeIcon />
          처음으로
        </button>
        <h1 className='text-title text-ink text-glow'>친구들의 이야기 책장</h1>
        <p className='text-caption text-ink-2 text-glow'>
          친구들이 만든 이야기를 한 권씩 꺼내 읽어 볼까요?
        </p>
      </header>

      {/* 책장 */}
      <section
        aria-label='공개된 이야기'
        className='flex min-h-0 flex-1 rounded-lg bg-border-strong p-14 shadow-card'
      >
        <div className='min-h-0 flex-1 overflow-y-auto rounded-md bg-surface-inset inset-shadow-[0_0.6rem_1.4rem_rgb(59_42_26/0.18)]'>
          {isError ? (
            <EmptyMessage text='책장을 불러오지 못했어요. 잠시 후 다시 와 줘!' />
          ) : !isPending && stories.length === 0 ? (
            <EmptyMessage text='아직 책장에 꽂힌 이야기가 없어요. 첫 번째 이야기를 꽂아 볼까요?' />
          ) : (
            <ul className='flex flex-col'>
              {shelves.map((books, row) => (
                <li key={row} className='flex flex-col'>
                  <ul className='grid grid-cols-5 gap-x-[clamp(1.6rem,2.6vw,3.2rem)] px-20 pt-26'>
                    {books.map((story, i) =>
                      story ? (
                        <li key={story.playSessionId}>
                          <ShelfBook story={story} />
                        </li>
                      ) : (
                        <li
                          key={`skeleton-${i}`}
                          className='aspect-[148/204] animate-pulse rounded-r-[1rem] rounded-l-[0.3rem] bg-border'
                        />
                      ),
                    )}
                  </ul>
                  {/* 선반 */}
                  <div
                    aria-hidden
                    className='h-16 border-t-3 border-yellow-300/60 bg-border-strong shadow-[0_0.5rem_0.6rem_rgb(59_42_26/0.3)]'
                  />
                </li>
              ))}
            </ul>
          )}

          <div ref={sentinelRef} className='flex justify-center py-16'>
            {isFetchingNextPage && (
              <p className='rounded-pill bg-surface-card px-14 py-6 text-caption text-ink-3 shadow-sm'>
                책을 더 꺼내 오는 중…
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

const EmptyMessage = ({ text }: { text: string }) => (
  <p className='flex h-full items-center justify-center px-24 text-center text-body text-ink-2'>
    {text}
  </p>
)

const HomeIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-24'>
    <path
      d='M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinejoin='round'
    />
  </svg>
)

export default BookshelfPage
