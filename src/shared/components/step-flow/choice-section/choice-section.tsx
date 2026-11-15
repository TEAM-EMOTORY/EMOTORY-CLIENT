import ChoiceCard from '../choice-card/choice-card'

interface ChoiceOption {
  id: string
  text: string
  imageSrc?: string
}

interface ChoiceSectionProps {
  choices: ChoiceOption[]
  label?: string
  onChoiceSelect: (id: string) => void
  disabled?: boolean
}

const ChoiceSection = ({ choices, label, onChoiceSelect, disabled }: ChoiceSectionProps) => {
  return (
    <div className='relative px-28 pt-[clamp(2.4rem,3dvh,3.2rem)] pb-28'>
      <div className='absolute left-8 z-1 flex -rotate-8 gap-6 border-[1.5px] border-border bg-surface-inset px-20 py-9 text-heading text-ink'>
        <p>{label}</p>
        <span className='text-yellow-500'>★</span>
      </div>
      <div className='flex gap-16 pt-22'>
        {choices.length > 0
          ? choices.map((choice, i) => (
              <div key={choice.id} className='flex flex-1 animate-idle-wobble' style={{ animationDelay: `${i * 1.5}s` }}>
                <ChoiceCard
                  text={choice.text}
                  imageSrc={choice.imageSrc}
                  color={(['yellow', 'blue', 'purple'] as const)[i % 3]}
                  onClick={() => onChoiceSelect(choice.id)}
                  disabled={disabled}
                />
              </div>
            ))
          : ([0, 1, 2] as const).map((i) => (
              <ChoiceCard
                key={i}
                text=''
                color={(['yellow', 'blue', 'purple'] as const)[i]}
                onClick={() => {}}
                disabled
              />
            ))}
      </div>
    </div>
  )
}

export default ChoiceSection
