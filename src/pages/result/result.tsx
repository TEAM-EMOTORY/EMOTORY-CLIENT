import { useNavigate, useLocation } from 'react-router-dom'
import Button from '@shared/components/button/button'
import * as styles from './result.css'
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
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.titleSection}>
          <p className={styles.title}>
            <span className={styles.star}>★</span>
            {childName}
            {hasConsonantEnding(childName) ? '이의' : '의'} 이야기가 끝났어요!
            <span className={styles.star}>★</span>
          </p>
          <p className={styles.description}>오늘도 함께 감정을 탐험해봐요.</p>
        </div>

        <div className={styles.mainCards}>
          <StoryCard
            imageUrl={imageData?.imageUrl ?? resultData?.generatedImageUrl ?? ''}
            isLoading={isImageLoading}
            summary={
              resultData?.summary
                ? replaceNameInContent(resultData.summary, childName)
                : '이야기 요약을 불러오는 중이에요...'
            }
            className={styles.storyCard}
          />
          <EmotionCard
            name={childName}
            title={resultData?.emotion ?? '감정을 분석 중이에요...'}
            tags={[]}
            className={styles.emotionCard}
          />
        </div>

        <TipCard tips={resultData?.advices.map((a) => a.description) ?? []} />

        <div className={styles.bottomNav}>
          <Button color='white' onClick={() => navigate('/')}>
            🏠 처음으로
          </Button>
          <button
            type='button'
            className={styles.ctaButton}
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
