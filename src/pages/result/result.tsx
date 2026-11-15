import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Button from '@shared/components/button/button'
import StoryCard from './components/story-card/story-card'
import EmotionCard from './components/emotion-card/emotion-card'
import TipCard from './components/tip-card/tip-card'
import ShareModal from './components/share-modal/share-modal'
import { useEndSession } from '@shared/hooks/use-end-session'
import { useStoryResult } from '@shared/hooks/use-story-result'
import { useGenerateImage } from '@shared/hooks/use-generate-image'
import { replaceNameInContent, hasConsonantEnding } from '@shared/utils/korean-particle'

// 공개 여부는 한 번만 정한다 — 새로고침해도 모달이 다시 뜨지 않도록 세션별로 기억한다
const decidedKey = (playSessionId: number) => `share-decided:${playSessionId}`

const readDecided = (playSessionId: number | undefined) => {
  if (!playSessionId) return true
  try {
    return sessionStorage.getItem(decidedKey(playSessionId)) === 'true'
  } catch {
    return false
  }
}

const ResultPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const childName = localStorage.getItem('childName') ?? ''
  const faceImageKey = localStorage.getItem('faceImageKey') ?? ''
  const playSessionId = state?.playSessionId
  const lastNodeId = state?.lastNodeId
  const { data: resultData } = useStoryResult(playSessionId)
  const { data: imageData, isLoading: isImageLoading } = useGenerateImage(
    faceImageKey,
    lastNodeId,
    playSessionId,
  )
  const storyImageUrl = imageData?.imageUrl ?? resultData?.generatedImageUrl ?? ''

  // 공개 여부를 고르면 그 값으로 플레이를 종료한다 (종료 후에는 공개 여부를 바꿀 수 없음)
  const [isDecided, setIsDecided] = useState(() => readDecided(playSessionId))
  const { mutate: endSession, isPending: isEnding, isError: isEndError } = useEndSession()

  const handleShareConfirm = (shared: boolean) => {
    if (!playSessionId) return
    endSession(
      { playSessionId, shared },
      {
        onSuccess: () => {
          try {
            sessionStorage.setItem(decidedKey(playSessionId), 'true')
          } catch {
            // 저장 실패해도 화면은 계속 진행한다
          }
          setIsDecided(true)
        },
      },
    )
  }

  return (
    <main className='flex h-full items-center justify-center overflow-y-auto text-ink'>
      <div className='relative flex w-full max-w-1040 flex-col gap-[clamp(3rem,3.5dvh,4rem)] p-20'>
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
            imageUrl={storyImageUrl}
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

        <TipCard
          tips={resultData?.advices.map(({ title, description }) => ({ title, description })) ?? []}
        />

        <div className='flex items-center justify-center gap-16'>
          <Button color='white' onClick={() => navigate('/emotion-select')}>
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

      {!isDecided && (
        <ShareModal
          childName={childName}
          imageUrl={storyImageUrl || undefined}
          isPending={isEnding}
          isError={isEndError}
          onConfirm={handleShareConfirm}
        />
      )}
    </main>
  )
}

export default ResultPage
