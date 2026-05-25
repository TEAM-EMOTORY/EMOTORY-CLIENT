import DrawingCanvas from '@pages/story/components/drawing-canvas/drawing-canvas'
import * as styles from './scene.css'

interface SceneProps {
  imageUrl: string
  isLoading?: boolean
}

const Scene = ({ imageUrl, isLoading }: SceneProps) => {
  return (
    <div className={styles.scene}>
      {isLoading || !imageUrl ? <DrawingCanvas /> : <img src={imageUrl} className={styles.image} />}
    </div>
  )
}

export default Scene
