import * as styles from './choice-card.css'

type CardColor = 'yellow' | 'blue' | 'purple'

interface ChoiceCardProps {
  text: string
  color?: CardColor
  onClick: () => void
}

const ChoiceCard = ({ text, color = 'yellow', onClick }: ChoiceCardProps) => {
  return (
    <button type='button' className={styles.card({ color })} onClick={onClick}>
      <div className={styles.inner({ color })}>
        <p className={styles.text}>{text}</p>
        <span className={styles.arrowBtn({ color })}>›</span>
      </div>
    </button>
  )
}

export default ChoiceCard
