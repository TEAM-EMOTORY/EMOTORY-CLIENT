import * as styles from './StoryHeader.css'

interface StoryHeaderProps {
  emotionLabel: string
}

const StoryHeader = ({ emotionLabel }: StoryHeaderProps) => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>로고들어갈곳</span>
      <div className={styles.emotionChip}>
        <span>🐥</span>
        <span>{emotionLabel}</span>
        <span className={styles.chevron}>›</span>
      </div>
    </header>
  )
}

export default StoryHeader
