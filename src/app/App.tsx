import router from '@routes/Router'
import { queryClient } from '@shared/apis/query-client'
import ThemeProvider from '@shared/styles/theme-provider'
import { useBackgroundMusic } from '@shared/hooks/use-background-music'
import { useTouchSound } from '@shared/hooks/use-touch-sound'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  useBackgroundMusic()
  useTouchSound()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
