import { useNavigate } from 'react-router-dom'
import angryImg from '@shared/assets/emotion-img/angry.webp'
import joyImg from '@shared/assets/emotion-img/joy.webp'
import sadImg from '@shared/assets/emotion-img/sad.webp'
import fearImg from '@shared/assets/emotion-img/fear.webp'
import surpriseImg from '@shared/assets/emotion-img/surprise.webp'
import { cn } from '@shared/utils/cn'
import { useCreatePlaySession } from './hooks/use-create-play-session'
import { hasConsonantEnding } from '@shared/utils/korean-particle'

const emotions = [
  { label: '슬픔', img: sadImg, tilt: '-rotate-5 translate-y-12', storyId: 1 },
  { label: '기쁨', img: joyImg, tilt: '-rotate-2 -translate-y-4', storyId: 2 },
  { label: '분노', img: angryImg, tilt: '-translate-y-10', storyId: 3 },
  { label: '두려움', img: fearImg, tilt: 'rotate-2 -translate-y-4', storyId: 4 },
  { label: '놀라움', img: surpriseImg, tilt: 'rotate-5 translate-y-12', storyId: 5 },
]

const EmotionSelectPage = () => {
  const navigate = useNavigate()

  const childName = localStorage.getItem('childName') ?? ''

  const { mutate: createPlaySession, isPending } = useCreatePlaySession()

  const handleEmotionSelect = (storyId: number, label: string) => {
    createPlaySession(
      { memberId: 1, storyId },
      {
        onSuccess: ({ playSessionId, currentNodeId }) => {
          navigate(`/story/${currentNodeId}`, { state: { playSessionId, emotionLabel: label } })
        },
      },
    )
  }

  return (
    <div className='flex flex-col items-center justify-center pt-100'>
      <div className='flex flex-col gap-10 text-center text-glow'>
        <h1 className='text-display text-ink [-webkit-text-stroke:0.5rem_white] [paint-order:stroke_fill]'>
          {childName}{hasConsonantEnding(childName) ? '아' : '야'},
          <br />
          오늘은 어떤 <span className='text-accent'>감정</span>을 탐험해볼까?
        </h1>
        <p className='text-subtitle text-ink-2'>탐험하고 싶은 감정을 선택해보자!</p>
      </div>

      <section className='mt-36 flex items-center gap-8'>
        {emotions.map(({ img, tilt, storyId, label }) => (
          <button
            key={storyId}
            type='button'
            className={cn(
              'flex aspect-[14/20] w-220 cursor-pointer flex-col items-center justify-end rounded-md bg-[auto_100%] bg-center bg-no-repeat pb-10',
              tilt,
            )}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => handleEmotionSelect(storyId, label)}
            disabled={isPending}
          >
            <span className='sr-only'>{label}</span>
          </button>
        ))}
      </section>
    </div>
  )
}

export default EmotionSelectPage
