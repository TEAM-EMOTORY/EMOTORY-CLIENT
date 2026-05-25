import DrawingCanvas from '../drawing-canvas/drawing-canvas'
import * as styles from './story-scene.css'

interface StorySceneProps {
  imageUrl: string
  isLoading?: boolean
}

const StoryScene = ({ imageUrl, isLoading }: StorySceneProps) => {
  return (
    <div className={styles.scene}>
      {isLoading || !imageUrl ? (
        <DrawingCanvas />
      ) : (
        <img src={imageUrl} className={styles.image} />
      )}
    </div>
  )
}

export default StoryScene
