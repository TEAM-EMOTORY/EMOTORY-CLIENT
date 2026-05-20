import { useNavigate } from 'react-router-dom'
import * as styles from './home.css'

const HomePage = () => {
  const navigate = useNavigate()

  const handleStartStoryClick = () => {
    navigate('/agreement')
  }

  const handleMenuClick = (menuName: string) => {
    console.log(`${menuName} 클릭`)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <main className={styles.bgContainer}>
          <section className={styles.storyButtonWrapper}>
            <button
              type='button'
              className={styles.storyButtonInner}
              onClick={handleStartStoryClick}
            >
              <span className={styles.storyButtonText}>
                이야기
                <br />
                시작하기
              </span>
            </button>
          </section>

          <nav className={styles.menuGroup}>
            <button
              type='button'
              className={styles.menuButton}
              onClick={() => handleMenuClick('감정 사전')}
            >
              <div className={styles.menuIconPlaceholder}></div>
              <span className={styles.menuLabel}>감정 사전</span>
            </button>
            <button
              type='button'
              className={styles.menuButton}
              onClick={() => handleMenuClick('나의 감정')}
            >
              <div className={styles.menuIconPlaceholder}></div>
              <span className={styles.menuLabel}>나의 감정</span>
            </button>
            <button
              type='button'
              className={styles.menuButton}
              onClick={() => handleMenuClick('부모 가이드')}
            >
              <div className={styles.menuIconPlaceholder}></div>
              <span className={styles.menuLabel}>부모 가이드</span>
            </button>
          </nav>
        </main>
      </div>
    </>
  )
}

export default HomePage
