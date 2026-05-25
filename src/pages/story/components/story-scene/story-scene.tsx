import * as styles from './story-scene.css'

interface StorySceneProps {
  imageUrl: string
  isLoading?: boolean
}

const StoryScene = ({ imageUrl, isLoading }: StorySceneProps) => {
  return (
    <div className={styles.scene}>
      {isLoading || !imageUrl ? (
        <div className={styles.skeleton}>
          <span className={styles.skeletonText}>🎨 그림을 그리는 중이에요...</span>
        </div>
      ) : (
        <img src={imageUrl} className={styles.image} />
      )}
    </div>
  )
}

export default StoryScene
