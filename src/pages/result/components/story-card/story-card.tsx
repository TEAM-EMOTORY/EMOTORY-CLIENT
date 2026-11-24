import Card from '@shared/components/card/card'
import FadeInImage from '@shared/components/fade-in-image/fade-in-image'

interface StoryCardProps {
  imageUrl: string
  summary: string
  isLoading?: boolean
  className?: string
}

/** 오늘의 이야기 요약 (Figma 07 Summary card) */
const StoryCard = ({ imageUrl, summary, isLoading, className }: StoryCardProps) => {
  return (
    <Card icon={<BookIcon />} title='오늘의 이야기 요약' className={className}>
      <div className='flex h-full items-center gap-18 pt-34 pr-18 pb-18 pl-22'>
        <FadeInImage
          src={isLoading ? undefined : imageUrl || undefined}
          className='size-124 shrink-0 rounded-md'
          placeholder={
            <div className='flex size-full animate-bg-pulse items-end justify-center gap-6 pb-48'>
              <span className='size-14 animate-pop-bounce rounded-full bg-accent' />
              <span className='size-14 animate-pop-bounce rounded-full bg-yellow-500 [animation-delay:0.15s]' />
              <span className='size-14 animate-pop-bounce rounded-full bg-leaf [animation-delay:0.3s]' />
              <span className='size-14 animate-pop-bounce rounded-full bg-sadness-500 [animation-delay:0.45s]' />
            </div>
          }
        />
        <p className='flex-1 break-keep whitespace-pre-line text-caption text-ink-2'>{summary}</p>
      </div>
    </Card>
  )
}

const BookIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-20 text-on-primary'>
    <path
      d='M12 6.5C10.3 5.3 8 4.8 4 5v13c4-.2 6.3.3 8 1.5 1.7-1.2 4-1.7 8-1.5V5c-4-.2-6.3.3-8 1.5Zm0 0v13'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default StoryCard
