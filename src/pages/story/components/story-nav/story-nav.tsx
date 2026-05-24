import * as styles from './story-nav.css'

const MAX_STEPS = 10

interface StoryNavProps {
  nodeOrder: number
  onHome: () => void
  onPrev: () => void
}

const StoryNav = ({ nodeOrder, onHome, onPrev }: StoryNavProps) => {
  const progress = Math.min((nodeOrder / MAX_STEPS) * 100, 100)

  return (
    <nav className={styles.nav}>
      <button type='button' className={styles.navBtn} onClick={onHome}>
        🏠 처음으로
      </button>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      <button type='button' className={styles.navBtn} onClick={onPrev}>
        ← 이전으로
      </button>
    </nav>
  )
}

export default StoryNav
