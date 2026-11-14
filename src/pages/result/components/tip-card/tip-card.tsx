import Card from '@shared/components/card/card'

interface Tip {
  title: string
  description: string
}

interface TipCardProps {
  tips: Tip[]
}

/** 이런 감정이 들 때는 이렇게 해봐요 (Figma 07 Tips card — 캐릭터 이미지 없이 글만) */
const TipCard = ({ tips }: TipCardProps) => {
  return (
    <Card icon={<LeafIcon />} title='이런 감정이 들 때는 이렇게 해봐요!' titleClassName='text-leaf'>
      <ul className='grid grid-cols-4 gap-12 pt-32 pr-20 pb-16 pl-20'>
        {tips.map((tip, i) => (
          <li
            key={`${i}-${tip.title}`}
            className='flex min-h-128 flex-col justify-center gap-4 rounded-md bg-surface-inset px-16 py-12'
          >
            <p className='break-keep text-caption text-leaf'>{tip.title}</p>
            <p className='break-keep text-caption text-ink-2'>{tip.description}</p>
          </li>
        ))}
      </ul>
    </Card>
  )
}

const LeafIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-20'>
    <path
      d='M5 19c0-8 5-13 14-14 0 9-5 14-13 14M5 19c3-4 6-6.5 9-8'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default TipCard
