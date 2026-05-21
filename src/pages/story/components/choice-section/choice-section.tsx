import type { StoryChoice } from '../../types/story.types'
import ChoiceCard from '../choice-card/choice-card'
import * as styles from './choice-section.css'

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
        {choices.map((choice) => (
          <ChoiceCard
            key={choice.id}
            text={choice.text}
            onClick={() => onChoiceSelect(choice.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ChoiceSection
