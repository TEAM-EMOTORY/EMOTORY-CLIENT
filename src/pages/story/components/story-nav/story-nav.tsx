import * as styles from './story-nav.css'

interface StoryNavProps {
  currentPage: number
  totalPages: number
  onHome: () => void
  onPrev: () => void
}

const StoryNav = ({ currentPage, totalPages, onHome, onPrev }: StoryNavProps) => {
  return (
    <nav className={styles.nav}>
      <button type='button' className={styles.navBtn} onClick={onHome}>
        🏠 처음으로
      </button>
      <div className={styles.dots}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <span key={i} className={i === currentPage ? styles.dotActive : styles.dot} />
        ))}
      </div>
      <button type='button' className={styles.navBtn} onClick={onPrev}>
        ← 이전으로
      </button>
    </nav>
  )
}

export default StoryNav
