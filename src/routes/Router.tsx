import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@pages/home'
import AgreementPage from '@pages/Agreement'
import ChildInfoPage from '@pages/ChildInfo'
import EmotionSelectPage from '@pages/EmotionSelect'
import StoryPage from '@pages/Story'
import ResultPage from '@pages/Result'

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
