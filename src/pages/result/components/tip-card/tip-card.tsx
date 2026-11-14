import Card from '@shared/components/card/card'

interface TipCardProps {
  tips: string[]
}

const TipCard = ({ tips }: TipCardProps) => {
  return (
    <Card icon='🌱' title='이런 감정이 들 때는 이렇게 해봐요!' cardVariant='light'>
      <div className='grid grid-cols-4 gap-14'>
        {tips.map((tip, i) => (
          <div key={i} className='flex min-h-136 flex-row items-center gap-10 rounded-md border-[1.5px] border-border bg-white p-16'>
            <div className='flex flex-1 flex-col justify-center gap-6 p-8'>
              <p className='break-keep text-subtitle text-ink-2'>{tip}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default TipCard
