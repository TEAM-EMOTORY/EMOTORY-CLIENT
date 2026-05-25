import logoImg from '@shared/assets/logo.webp'
import * as styles from './header.css'

interface HeaderProps {
  emotionLabel?: string
}

const Header = ({ emotionLabel }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt='emotory logo' className={styles.logo} />
      {emotionLabel && (
        <div className={styles.emotionChip}>
          <span>🐥</span>
          <span>{emotionLabel}</span>
          <span className={styles.chevron}>›</span>
        </div>
      )}
    </header>
  )
}

export default Header
