import Card from '@shared/components/card/card'
import { hasConsonantEnding } from '@shared/utils/korean-particle'
import { cn } from '@shared/utils/cn'

interface EmotionCardProps {
  name: string
  title: string
  description?: string
  tags: string[]
  className?: string
}

/** 아이가 느낀 감정 (Figma 07 Feeling card — 캐릭터 이미지 없이 글만) */
const EmotionCard = ({ name, title, description, tags, className }: EmotionCardProps) => {
  return (
    <Card
      icon={<StarIcon />}
      title={`${name}${hasConsonantEnding(name) ? '이가' : '가'} 느낀 감정`}
      className={cn('flex flex-col', className)}
    >
      <div className='flex flex-1 flex-col items-center justify-center gap-10 pt-34 pr-18 pb-18 pl-24 text-center'>
        <p className='text-subtitle text-accent-text'>{title}</p>
        {description && <p className='break-keep text-caption text-ink-2'>{description}</p>}
        {tags.length > 0 && (
          <ul className='flex flex-wrap justify-center gap-6'>
            {tags.map((tag) => (
              <li
                key={tag}
                className='rounded-pill bg-fear-100 px-10 py-4 text-caption text-fear-700'
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  )
}

const StarIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-20 text-yellow-500'>
    <path
      d='M12 3.2 14.6 8.6l5.9.8-4.3 4.1 1 5.9L12 16.6l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L12 3.2Z'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinejoin='round'
    />
  </svg>
)

export default EmotionCard
