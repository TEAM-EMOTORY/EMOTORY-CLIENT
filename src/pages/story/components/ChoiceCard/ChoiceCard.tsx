import * as styles from './ChoiceCard.css'

interface ChoiceCardProps {
  text: string
  onClick: () => void
}

const ChoiceCard = ({ text, onClick }: ChoiceCardProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{text}</p>
      <button type='button' className={styles.arrowBtn} onClick={onClick}>
        ›
      </button>
    </div>
  )
}

export default ChoiceCard
