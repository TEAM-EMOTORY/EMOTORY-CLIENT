import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@pages/home/home'
import AgreementPage from '@pages/agreement/agreement'
import ChildInfoPage from '@pages/child-info/child-info'
import EmotionSelectPage from '@pages/emotion-select/emotion-select'
import StoryPage from '@pages/story/story'
import ResultPage from '@pages/result/result'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/agreement',
    element: <AgreementPage />,
  },
  {
    path: '/child-info',
    element: <ChildInfoPage />,
  },
  {
    path: '/emotion-select',
    element: <EmotionSelectPage />,
  },
  {
    path: '/story',
    element: <StoryPage />,
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
])

export default router
