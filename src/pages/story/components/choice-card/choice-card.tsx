import * as styles from './choice-card.css'

type CardColor = 'yellow' | 'blue' | 'purple'

interface ChoiceCardProps {
  text: string
  color?: CardColor
  onClick: () => void
}

const ChoiceCard = ({ text, color = 'yellow', onClick }: ChoiceCardProps) => {
  return (
    <div className={styles.card({ color })}>
      <div className={styles.inner({ color })}>
        <p className={styles.text}>{text}</p>
        <button type='button' className={styles.arrowBtn({ color })} onClick={onClick}>
          ›
        </button>
      </div>
    </div>
  )
}

export default ChoiceCard
