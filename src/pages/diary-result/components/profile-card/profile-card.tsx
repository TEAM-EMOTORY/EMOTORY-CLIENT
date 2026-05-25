import happyCharacterImg from '@shared/assets/emotion-img/happy_character.webp'
import * as styles from './profile-card.css'

const TODAY_MESSAGES = [
  '오늘의 마음을 잘 들려줬어요!',
  '내 마음을 잘 말했어요!',
  '오늘의 기분을 잘 골랐어요!',
  '오늘도 마음을 잘 살펴봤어요!',
  '기분을 말해줘서 정말 고마워요!',
]

const randomMessage = TODAY_MESSAGES[Math.floor(Math.random() * TODAY_MESSAGES.length)]

interface ProfileCardProps {
  childName: string
}

const ProfileCard = ({ childName }: ProfileCardProps) => {
  const childProfileImage = localStorage.getItem('childProfileImage') ?? happyCharacterImg

  return (
    <aside className={styles.profileCard}>
      <img src={childProfileImage} alt='' className={styles.profileImage} />
      <strong className={styles.childName}>{childName}</strong>
      <div className={styles.profileMessage}>
        <span>♥</span>
        <p>{randomMessage}</p>
      </div>
      <div className={styles.flowerBed} />
    </aside>
  )
}

export default ProfileCard
