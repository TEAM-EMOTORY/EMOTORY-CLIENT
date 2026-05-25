import * as styles from './note-card.css'

interface NoteCardProps {
  title: string
  description: string
  characterImg: string
}

const NoteCard = ({ title, description, characterImg }: NoteCardProps) => (
  <aside className={styles.noteCard}>
    <div className={styles.noteTitle}>
      <span>🌱</span>
      <span>오늘의 한마디</span>
    </div>
    <div className={styles.noteBody}>
      <strong className={styles.noteHeadline}>{title}</strong>
      <p>{description}</p>
      <img src={characterImg} alt='' className={styles.noteCharacter} />
    </div>
  </aside>
)

export default NoteCard
