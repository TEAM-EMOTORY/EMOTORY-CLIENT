import angryCharacterImg from '@shared/assets/emotion-img/angry_character.webp'
import happyCharacterImg from '@shared/assets/emotion-img/happy_character.webp'
import sadCharacterImg from '@shared/assets/emotion-img/sad_character.webp'
import * as styles from './note-card.css'
import type { DiaryEmotion } from '../graph-card/constants'

const NOTE_CHARACTER_IMAGES: Record<DiaryEmotion, string> = {
  joy: happyCharacterImg,
  sad: sadCharacterImg,
  angry: angryCharacterImg,
}

interface NoteCardProps {
  title: string
  description: string
  emotion: DiaryEmotion
}

const NoteCard = ({ title, description, emotion }: NoteCardProps) => (
  <aside className={styles.noteCard}>
    <div className={styles.noteTitle}>
      <span>🌱</span>
      <span>오늘의 한마디</span>
    </div>
    <div className={styles.noteBody}>
      <strong className={styles.noteHeadline}>{title}</strong>
      <p>{description}</p>
      <img src={NOTE_CHARACTER_IMAGES[emotion]} alt='' className={styles.noteCharacter} />
    </div>
  </aside>
)

export default NoteCard
