import DrawingCanvas from '@pages/story/components/drawing-canvas/drawing-canvas'

interface SceneProps {
  imageUrl: string
  isLoading?: boolean
}

const Scene = ({ imageUrl, isLoading }: SceneProps) => {
  return (
    <div className='h-full min-w-0 flex-1 overflow-hidden rounded-lg bg-white'>
      {isLoading || !imageUrl ? <DrawingCanvas /> : <img src={imageUrl} className='size-full object-cover' />}
    </div>
  )
}

export default Scene
