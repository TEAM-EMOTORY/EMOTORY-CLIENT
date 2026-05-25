import type { ReactNode } from 'react'
import * as styles from './frame.css'

interface FrameProps {
  header: ReactNode
  scene: ReactNode
  content: ReactNode
  choices: ReactNode
  nav: ReactNode
}

const Frame = ({ header, scene, content, choices, nav }: FrameProps) => {
  return (
    <div className={styles.page}>
      {header}
      <div className={styles.wrapper}>
        <div className={styles.main}>
          {scene}
          {content}
        </div>
        {choices}
      </div>
      {nav}
    </div>
  )
}

export default Frame
