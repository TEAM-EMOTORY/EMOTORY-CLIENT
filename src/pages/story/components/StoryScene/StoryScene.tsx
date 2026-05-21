import * as styles from './StoryScene.css'

interface StorySceneProps {
  imageUrl: string
}

const StoryScene = ({ imageUrl }: StorySceneProps) => {
  return (
    <div className={styles.scene}>
      <img src={imageUrl} className={styles.image} />
    </div>
  )
}

export default StoryScene
