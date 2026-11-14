import { useNavigate, useLocation } from 'react-router-dom'
import Button from '@shared/components/button/button'
import StoryCard from './components/story-card/story-card'
import EmotionCard from './components/emotion-card/emotion-card'
import TipCard from './components/tip-card/tip-card'
import { useStoryResult } from '@shared/hooks/use-story-result'
import { useGenerateImage } from '@shared/hooks/use-generate-image'
import { replaceNameInContent, hasConsonantEnding } from '@shared/utils/korean-particle'

const ResultPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const childName = localStorage.getItem('childName') ?? ''
  const faceImageKey = localStorage.getItem('faceImageKey') ?? ''
  const playSessionId = state?.playSessionId
  const lastNodeId = state?.lastNodeId
  const { data: resultData } = useStoryResult(playSessionId)
  const { data: imageData, isLoading: isImageLoading } = useGenerateImage(faceImageKey, lastNodeId, playSessionId)

  return (
    <main className='flex min-h-screen items-center justify-center text-ink'>
      <div className='relative flex w-full max-w-1040 flex-col gap-30'>
        <div className='flex flex-col items-center text-glow'>
          <p className='flex gap-12 text-display'>
            <span className='text-yellow-500'>★</span>
            {childName}
            {hasConsonantEnding(childName) ? '이의' : '의'} 이야기가 끝났어요!
            <span className='text-yellow-500'>★</span>
          </p>
          <p className='text-body text-ink-2'>오늘도 함께 감정을 탐험해봐요.</p>
        </div>

        <div className='flex items-stretch gap-20'>
          <StoryCard
            imageUrl={imageData?.imageUrl ?? resultData?.generatedImageUrl ?? ''}
            isLoading={isImageLoading}
            summary={
              resultData?.summary
                ? replaceNameInContent(resultData.summary, childName)
                : '이야기 요약을 불러오는 중이에요...'
            }
            className='flex-5'
          />
          <EmotionCard
            name={childName}
            title={resultData?.emotion ?? '감정을 분석 중이에요...'}
            tags={[]}
            className='flex-4'
          />
        </div>

        <TipCard tips={resultData?.advices.map((a) => a.description) ?? []} />

        <div className='flex items-center justify-center gap-16'>
          <Button color='white' onClick={() => navigate('/')}>
            🏠 처음으로
          </Button>
          <button
            type='button'
            className='flex h-60 items-center justify-center gap-8 whitespace-nowrap rounded-pill bg-yellow-500 px-40 text-subtitle text-on-primary shadow-primary'
            onClick={() => navigate('/emotion-select')}
          >
            ✦ 다른 감정을 탐험해볼래요? &gt;
          </button>
          <Button color='white' onClick={() => navigate('/diary')}>
            📔 오늘의 감정 일기 쓰기
          </Button>
        </div>
      </div>
    </main>
  )
}

export default ResultPage
