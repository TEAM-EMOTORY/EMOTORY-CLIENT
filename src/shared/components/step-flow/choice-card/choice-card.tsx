import { useState } from 'react'
import * as styles from './choice-card.css'

type CardColor = 'yellow' | 'blue' | 'purple'

interface ChoiceCardProps {
  text: string
  imageSrc?: string
  color?: CardColor
  onClick: () => void
  disabled?: boolean
}

const ChoiceCard = ({ text, imageSrc, color = 'yellow', onClick, disabled }: ChoiceCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    if (isAnimating) return

    if (!imageSrc) {
      onClick()
      return
    }

    setIsAnimating(true)
    window.setTimeout(() => {
      setIsAnimating(false)
      onClick()
    }, 360)
  }

  return (
    <button
      type='button'
      className={`${styles.card({ color })} ${isAnimating ? styles.selectedCard : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <div className={styles.inner({ color })}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt=''
            className={`${styles.character} ${isAnimating ? styles.selectedCharacter : ''}`}
          />
        )}
        <p className={styles.text}>{text}</p>
        <span className={styles.arrowBtn({ color })}>›</span>
      </div>
    </button>
  )
}

export default ChoiceCard
