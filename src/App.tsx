import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import ThemeProvider from './shared/styles/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
