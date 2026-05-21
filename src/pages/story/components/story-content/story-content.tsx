import * as styles from './story-content.css'

interface StoryContentProps {
  title: string
  content: string
}

const StoryContent = ({ title, content }: StoryContentProps) => {
  return (
    <div className={styles.content}>
      <span className={styles.star}>★</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.line}>{content}</p>
    </div>
  )
}

export default StoryContent
