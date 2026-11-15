interface StoryLoadingProps {
  /** 가운데 통통 튀는 캐릭터 이미지 */
  image?: string
  title: string
  description?: string
}

/**
 * 이야기 준비 중 전체 화면 로딩 (임시).
 * TODO: Lottie 애니메이션이 준비되면 가운데 캐릭터 영역을 교체한다.
 */
const StoryLoading = ({ image, title, description = '잠깐만 기다려 줘!' }: StoryLoadingProps) => {
  return (
    <div
      role='status'
      aria-live='polite'
      className='fixed inset-0 z-50 flex animate-fade-in flex-col items-center justify-center gap-32 bg-surface-page/90 backdrop-blur-sm'
    >
      <div className='relative flex size-200 items-center justify-center'>
        <span
          aria-hidden
          className='absolute inset-0 animate-glow rounded-pill bg-yellow-300 blur-[3.2rem]'
        />
        {image ? (
          <img
            src={image}
            alt=''
            className='relative h-180 w-124 animate-pop-bounce rounded-md border-4 border-surface-card object-cover shadow-card'
          />
        ) : (
          <span className='relative size-120 animate-pop-bounce rounded-pill bg-yellow-500' />
        )}
        {[
          'top-0 left-8 size-24',
          'top-24 -right-8 size-18',
          'bottom-16 -left-12 size-16',
          'right-4 bottom-0 size-22',
        ].map((position, i) => (
          <SparkleIcon
            key={position}
            className={`absolute animate-sparkle text-yellow-500 ${position}`}
            delay={`${i * 0.4}s`}
          />
        ))}
      </div>

      <div className='flex flex-col items-center gap-12 text-center'>
        <p className='text-heading text-ink'>{title}</p>
        <p className='flex items-center gap-4 text-body text-ink-2'>
          {description}
          <span aria-hidden className='flex gap-4'>
            {[0, 0.2, 0.4].map((delay) => (
              <span
                key={delay}
                className='size-6 animate-pulse rounded-pill bg-ink-3'
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </span>
        </p>
      </div>
    </div>
  )
}

const SparkleIcon = ({ className, delay }: { className: string; delay: string }) => (
  <svg
    viewBox='0 0 24 24'
    fill='currentColor'
    aria-hidden
    className={className}
    style={{ animationDelay: delay }}
  >
    <path d='M12 1.5c.6 4.9 2.6 6.9 7.5 7.5v.9c-4.9.6-6.9 2.6-7.5 7.5h-.9c-.6-4.9-2.6-6.9-7.5-7.5V9c4.9-.6 6.9-2.6 7.5-7.5h.9Z' />
  </svg>
)

export default StoryLoading
