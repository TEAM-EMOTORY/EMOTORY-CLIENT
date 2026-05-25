import ChoiceCard from '../choice-card/choice-card'
import * as styles from './choice-section.css'

interface ChoiceOption {
  id: string
  text: string
}

interface ChoiceSectionProps {
  choices: ChoiceOption[]
  label?: string
  onChoiceSelect: (id: string) => void
  disabled?: boolean
}

const ChoiceSection = ({ choices, label, onChoiceSelect, disabled }: ChoiceSectionProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.label}>
        <p>{label}</p>
        <span className={styles.star}>★</span>
      </div>
      <div className={styles.cards}>
        {choices.length > 0
          ? choices.map((choice, i) => (
              <ChoiceCard
                key={choice.id}
                text={choice.text}
                color={(['yellow', 'blue', 'purple'] as const)[i % 3]}
                onClick={() => onChoiceSelect(choice.id)}
                disabled={disabled}
              />
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
