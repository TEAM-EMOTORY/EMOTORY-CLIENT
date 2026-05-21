import ChoiceCard from '../choice-card/choice-card'
import * as styles from './choice-section.css'

interface StoryChoice {
  id: string
  text: string
}

interface ChoiceSectionProps {
  choices: StoryChoice[]
  onChoiceSelect: (id: string) => void
}

const ChoiceSection = ({ choices, onChoiceSelect }: ChoiceSectionProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.label}>
        <p>어떻게 할까요?</p>
        <span className={styles.star}>★</span>
      </div>
      <div className={styles.cards}>
        {choices.map((choice, i) => (
          <ChoiceCard
            key={choice.id}
            text={choice.text}
            color={(['yellow', 'blue', 'purple'] as const)[i % 3]}
            onClick={() => onChoiceSelect(choice.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ChoiceSection
