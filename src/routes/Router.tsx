import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@pages/home/home'
import AgreementPage from '@pages/agreement/agreement'
import ChildInfoPage from '@pages/child-info/child-info'
import EmotionSelectPage from '@pages/emotion-select/emotion-select'
import StoryPage from '@pages/story/story'
import DiaryPage from '@pages/diary/diary'
import DiaryResultPage from '@pages/diary-result/diary-result'
import ResultPage from '@pages/result/result'
import BookshelfPage from '@pages/bookshelf/bookshelf'
import SharedStoryPage from '@pages/bookshelf/shared-story'
import EmotionDictionaryPage from '@pages/emotion-dictionary/emotion-dictionary'
import { Layout, StoryLayout } from '@shared/components/layout/layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    element: <Layout />,
    children: [
      { path: '/agreement', element: <AgreementPage /> },
      { path: '/child-info', element: <ChildInfoPage /> },
      { path: '/emotion-select', element: <EmotionSelectPage /> },
      { path: '/bookshelf', element: <BookshelfPage /> },
      { path: '/bookshelf/:playSessionId', element: <SharedStoryPage /> },
      { path: '/emotion-dictionary', element: <EmotionDictionaryPage /> },
    ],
  },
  {
    element: <StoryLayout />,
    children: [
      { path: '/story/:storyNodeId', element: <StoryPage /> },
      { path: '/diary', element: <DiaryPage /> },
      { path: '/diary-result', element: <DiaryResultPage /> },
      { path: '/result', element: <ResultPage /> },
    ],
  },
])

export default router
