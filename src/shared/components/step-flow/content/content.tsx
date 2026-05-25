import * as styles from './content.css'

interface ContentProps {
  title?: string
  content: string
  showStar?: boolean
}

const Content = ({ title, content, showStar = true }: ContentProps) => {
  return (
    <div className={styles.content}>
      {showStar && <span className={styles.star}>★</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
      <p className={styles.line}>{content}</p>
    </div>
  )
}

export default Content
