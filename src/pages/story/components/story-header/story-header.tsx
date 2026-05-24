import logoImg from '@shared/assets/logo.webp'
import * as styles from './story-header.css'

interface StoryHeaderProps {
  emotionLabel: string
}

const StoryHeader = ({ emotionLabel }: StoryHeaderProps) => {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="emotory logo" className={styles.logo} />
      <div className={styles.emotionChip}>
        <span>🐥</span>
        <span>{emotionLabel}</span>
        <span className={styles.chevron}>›</span>
      </div>
    </header>
  )
}

export default StoryHeader
