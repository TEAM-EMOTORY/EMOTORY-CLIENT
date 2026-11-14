import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import joyImg from '@shared/assets/emotion-card/joy.webp'
import sadImg from '@shared/assets/emotion-card/sad.webp'
import angryImg from '@shared/assets/emotion-card/angry.webp'
import fearImg from '@shared/assets/emotion-card/fear.webp'
import disgustImg from '@shared/assets/emotion-card/disgust.webp'
import surpriseImg from '@shared/assets/emotion-card/surprise.webp'
import { hasConsonantEnding } from '@shared/utils/korean-particle'
import EmotionCard from './components/emotion-card/emotion-card'
import type { EmotionKey } from './components/emotion-card/emotion-card'
import StartButton from './components/start-button/start-button'
import { useCreatePlaySession } from './hooks/use-create-play-session'
import { usePrepareStory } from '@shared/hooks/use-prepare-story'
import StoryLoading from '@shared/components/story-loading/story-loading'

interface Emotion {
  key: EmotionKey
  label: string
  img: string
  /** 아직 이야기가 없는 감정은 null */
  storyId: number | null
  /** 부채꼴 배치 — 회전 각도(deg)와 아래로 내려가는 거리(px) */
  rotate: number
  drop: number
}

const EMOTIONS: Emotion[] = [
  { key: 'joy', label: '기쁨', img: joyImg, storyId: 2, rotate: -8, drop: 20 },
  { key: 'sadness', label: '슬픔', img: sadImg, storyId: 1, rotate: -4.8, drop: 8 },
  { key: 'anger', label: '분노', img: angryImg, storyId: 3, rotate: -1.6, drop: 0 },
  { key: 'fear', label: '두려움', img: fearImg, storyId: 4, rotate: 1.6, drop: 0 },
  { key: 'disgust', label: '부끄러움', img: disgustImg, storyId: null, rotate: 4.8, drop: 8 },
  { key: 'surprise', label: '놀라움', img: surpriseImg, storyId: 5, rotate: 8, drop: 20 },
]

const EmotionSelectPage = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<Emotion | null>(EMOTIONS[0])

  const childName = localStorage.getItem('childName') ?? ''

  const { mutate: createPlaySession, isPending } = useCreatePlaySession()
  const prepareStory = usePrepareStory()
  const [isPreparing, setIsPreparing] = useState(false)

  const handleStart = () => {
    if (!selected?.storyId || isPreparing) return
    setIsPreparing(true)
    createPlaySession(
      { memberId: 1, storyId: selected.storyId },
      {
        // 첫 장면 그림까지 만들어 둔 뒤 이야기로 넘어간다 — 책을 펼쳤을 때 기다리지 않도록
        onSuccess: async ({ playSessionId, currentNodeId }) => {
          await prepareStory(currentNodeId, playSessionId)
          navigate(`/story/${currentNodeId}`, {
            state: { playSessionId, emotionLabel: selected.label },
          })
        },
        onError: () => setIsPreparing(false),
      },
    )
  }

  return (
    <div className='flex flex-col items-center justify-center pt-100'>
      <div className='flex flex-col gap-10 text-center text-glow'>
        <h1 className='text-display text-ink [-webkit-text-stroke:0.5rem_white] [paint-order:stroke_fill]'>
          {childName}
          {hasConsonantEnding(childName) ? '아' : '야'},
          <br />
          오늘은 어떤 <span className='text-accent'>감정</span>을 탐험해볼까?
        </h1>
        <p className='text-subtitle text-ink-2'>탐험하고 싶은 감정을 선택해보자!</p>
      </div>

      <section className='mt-36 flex items-start gap-14'>
        {EMOTIONS.map((emotion) => (
          <EmotionCard
            key={emotion.key}
            emotion={emotion.key}
            label={emotion.label}
            img={emotion.img}
            selected={selected?.key === emotion.key}
            disabled={emotion.storyId === null || isPreparing}
            style={{ rotate: `${emotion.rotate}deg`, translate: `0 ${emotion.drop / 10}rem` }}
            onClick={() => setSelected(emotion)}
          />
        ))}
      </section>

      <div className='mt-56'>
        <StartButton onClick={handleStart} disabled={!selected || isPending || isPreparing} />
      </div>

      {isPreparing && selected && (
        <StoryLoading
          image={selected.img}
          title={`${childName}의 ${selected.label} 이야기를 그리고 있어요`}
        />
      )}
    </div>
  )
}

export default EmotionSelectPage
