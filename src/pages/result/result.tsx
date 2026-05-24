import { useNavigate } from 'react-router-dom'
import Button from '@shared/components/button/button'
import * as styles from './result.css'
import StoryCard from './components/story-card/story-card'
import EmotionCard from './components/emotion-card/emotion-card'
import TipCard from './components/tip-card/tip-card'
import { useMember } from '@shared/hooks/use-member'

const TEST_IMAGE =
  'https://media.istockphoto.com/id/2148757239/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EC%8B%9C%EC%95%84-%EC%9E%91%EC%9D%80-%EB%B0%9C%ED%86%B1-%EC%88%98%EB%8B%AC.jpg?s=612x612&w=0&k=20&c=xkH9d6pwEDkkzflv6tMelrv8DtXkUX5fX6ruUPt82Ak='

const ResultPage = () => {
  const navigate = useNavigate()

  const memberId = localStorage.getItem('memberId')
  const { data } = useMember(memberId)
  const childName = data?.name ?? '하이'

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
            summary='토리는 가장 친한 친구를 만나기로 했어요. 하지만 친구가 보이지 않았고, 아무리 찾아도 찾을 수 없었어요. 토리는 점점 마음이 조마조마해졌어요. 하지만 용기를 내어 친구에게 연락했고, 친구도 미안한 마음에 토리를 찾아왔어요. 둘은 오해를 풀고 더 소중한 친구가 되었답니다.'
            className={styles.storyCard}
          />
          <EmotionCard
            name='토리'
            imageUrl={TEST_IMAGE}
            title='불안했어요'
            summary='토리는 친구가 보이지 않아 앞으로 어떤 일이 생길지 몰라 불안한 마음이 들었어요.'
            tags={['걱정', '두려움']}
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
          <button type='button' className={styles.ctaButton}>
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
