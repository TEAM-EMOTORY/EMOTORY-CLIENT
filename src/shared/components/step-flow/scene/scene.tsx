import * as styles from './scene.css'

interface SceneProps {
  imageUrl: string
}

const Scene = ({ imageUrl }: SceneProps) => {
  return (
    <div className={styles.scene}>
      <img src={imageUrl} className={styles.image} />
    </div>
  )
}

export default Scene
