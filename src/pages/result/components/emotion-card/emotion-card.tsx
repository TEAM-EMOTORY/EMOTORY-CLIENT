import Card from '@shared/components/card/card'
import { cn } from '@shared/utils/cn'

interface EmotionCardProps {
  name: string
  title: string
  tags: string[]
  className?: string
}

const EmotionCard = ({ name, title, tags, className }: EmotionCardProps) => {
  return (
    <Card
      icon={<span className='text-yellow-500'>★</span>}
      title={`${name}가 느낀 감정`}
      cardVariant='warm'
      className={cn('flex flex-col', className)}
    >
      <div className='flex flex-1 flex-col items-center justify-center gap-10 py-10'>
        <p className='text-center text-title text-accent-text'>{title}</p>
        <div className='flex flex-wrap justify-center gap-8'>
          {tags.map((tag) => (
            <span key={tag} className='rounded-pill border-[1.5px] border-border bg-surface-inset px-14 py-4 text-caption text-accent-text'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default EmotionCard
