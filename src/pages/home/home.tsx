import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import homeBg from '@shared/assets/background-img/home.webp'
import * as styles from './home.css'
import { useImageButtonPos } from './hooks/use-image-button-pos'

const HomePage = () => {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  useImageButtonPos(containerRef)

  return (
    <div ref={containerRef} className={styles.bgContainer}>
      <img src={homeBg} alt='' className={styles.bgImage} />
      <button
        className={styles.storyButton}
        aria-label='이야기 시작하기'
        onClick={() => navigate('/agreement?next=story')}
      />
    </div>
  )
}

export default HomePage
