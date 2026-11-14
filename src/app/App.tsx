import router from '@routes/Router'
import { queryClient } from '@shared/apis/query-client'
import { useBackgroundMusic } from '@shared/hooks/use-background-music'
import { useTouchSound } from '@shared/hooks/use-touch-sound'
import SparkleEffect from '@shared/components/sparkle-effect/sparkle-effect'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  useBackgroundMusic()
  useTouchSound()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <SparkleEffect />
    </QueryClientProvider>
  )
}

export default App
