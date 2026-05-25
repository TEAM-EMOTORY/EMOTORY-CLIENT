import { useNavigate, useLocation } from 'react-router-dom'
import Button from '@shared/components/button/button'
import * as styles from './result.css'
import StoryCard from './components/story-card/story-card'
import EmotionCard from './components/emotion-card/emotion-card'
import TipCard from './components/tip-card/tip-card'
import { useStoryResult } from '@shared/hooks/use-story-result'
import { replaceNameInContent } from '@shared/utils/korean-particle'

const TEST_IMAGE =
  'https://media.istockphoto.com/id/2148757239/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EC%8B%9C%EC%95%84-%EC%9E%91%EC%9D%80-%EB%B0%9C%ED%86%B1-%EC%88%98%EB%8B%AC.jpg?s=612x612&w=0&k=20&c=xkH9d6pwEDkkzflv6tMelrv8DtXkUX5fX6ruUPt82Ak='

const ResultPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const childName = localStorage.getItem('childName') ?? ''
  const playSessionId = state?.playSessionId
  const { data: resultData } = useStoryResult(playSessionId)

  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.titleSection}>
          <p className={styles.title}>
            <span className={styles.star}>★</span>
            {childName}의 이야기가 끝났어요!
            <span className={styles.star}>★</span>
          </p>
          <p className={styles.description}>오늘도 토리와 함께 감정을 탐험해봐요.</p>
        </div>

        <div className={styles.mainCards}>
          <StoryCard
            imageUrl={TEST_IMAGE}
            summary={resultData?.summary ? replaceNameInContent(resultData.summary, childName) : '이야기 요약을 불러오는 중이에요...'}
            className={styles.storyCard}
          />
          <EmotionCard
            name={childName}
            imageUrl={TEST_IMAGE}
            title={resultData?.emotion ?? '감정을 분석 중이에요...'}
            summary={resultData?.advice ?? ''}
            tags={[]}
            className={styles.emotionCard}
          />
        </div>

        <TipCard
          tips={[
            {
              imageUrl: TEST_IMAGE,
              title: '천천히 심호흡을 해요',
              description: '숨을 천천히 들이쉬고 내쉬면 마음이 조금 진정돼요.',
            },
            {
              imageUrl: TEST_IMAGE,
              title: '믿을 수 있는 사람에게 이야기해요',
              description: '부모님이나 친구에게 내 마음을 말하면 도움이 돼요.',
            },
            {
              imageUrl: TEST_IMAGE,
              title: '내 마음을 표현해요',
              description: '그림을 그리거나 글로 마음을 표현하면 마음이 가벼워져요.',
            },
            {
              imageUrl: TEST_IMAGE,
              title: '나를 다독여 주세요',
              description: '"괜찮아, 잘할 수 있어" 스스로에게 따뜻한 말을 건네봐요.',
            },
          ]}
        />

        <div className={styles.bottomNav}>
          <Button color='white' onClick={() => navigate('/')}>
            🏠 처음으로
          </Button>
          <button type='button' className={styles.ctaButton} onClick={() => navigate('/emotion-select')}>
            ✦ 다른 감정을 탐험해볼래요? &gt;
          </button>
          <Button color='white' onClick={() => {}}>
            📔 오늘의 감정 일기 쓰기
          </Button>
        </div>
      </div>
    </main>
  )
}

export default ResultPage
