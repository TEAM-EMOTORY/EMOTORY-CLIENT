import * as styles from './nav.css'

interface NavProps {
  currentStep: number
  totalSteps?: number
  onHome: () => void
  onPrev: () => void
}

const Nav = ({ currentStep, totalSteps = 3, onHome, onPrev }: NavProps) => {
  const progress = Math.min((currentStep / totalSteps) * 100, 100)

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

export default Nav
