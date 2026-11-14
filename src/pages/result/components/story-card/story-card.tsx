import Card from '@shared/components/card/card'

interface StoryCardProps {
  imageUrl: string
  summary: string
  isLoading?: boolean
  className?: string
}

const StoryCard = ({ imageUrl, summary, isLoading, className }: StoryCardProps) => {
  return (
    <Card icon='📖' title='오늘의 이야기 요약' cardVariant='light' className={className}>
      <div className='flex h-full min-h-180 items-center gap-28'>
        {isLoading || !imageUrl ? (
          <div className='flex size-180 shrink-0 animate-bg-pulse flex-col items-center justify-center gap-16 rounded-md'>
            <div className='flex items-end gap-10'>
              <div className='size-24 animate-pop-bounce rounded-full bg-accent' />
              <div className='size-24 animate-pop-bounce rounded-full bg-yellow-500 [animation-delay:0.15s]' />
              <div className='size-24 animate-pop-bounce rounded-full bg-leaf [animation-delay:0.3s]' />
              <div className='size-24 animate-pop-bounce rounded-full bg-sadness-500 [animation-delay:0.45s]' />
            </div>
          </div>
        ) : (
          <img src={imageUrl} className='size-180 shrink-0 rounded-md object-cover' />
        )}
        <p className='flex-1 break-keep text-subtitle text-ink-2'>{summary}</p>
      </div>
    </Card>
  )
}

export default StoryCard
