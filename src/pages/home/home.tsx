import { useNavigate } from 'react-router-dom'
import * as styles from './home.css'

const HomePage = () => {
  const navigate = useNavigate()

  const handleStartStoryClick = () => {
    navigate('/agreement')
  }

  return (
    <div className={styles.bgContainer}>
      <button className={styles.button} onClick={handleStartStoryClick} />
    </div>
  )
}

export default HomePage
