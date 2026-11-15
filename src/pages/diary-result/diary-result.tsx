import { useLocation, useNavigate } from 'react-router-dom'
import { hasConsonantEnding } from '@shared/utils/korean-particle'
import bgImage from '@shared/assets/background-img/bg.webp'
import ProfileCard from './components/profile-card/profile-card'
import GraphCard from './components/graph-card/graph-card'
import { EMOTION_RESULTS, type DiaryEmotion } from './components/graph-card/constants'
import NoteCard from './components/note-card/note-card'

const countAnswers = (answers: unknown): Record<DiaryEmotion, number> => {
  const initial: Record<DiaryEmotion, number> = { joy: 0, sad: 0, angry: 0 }
  if (!Array.isArray(answers)) return initial
  return answers.reduce((acc, answer) => {
    if (answer === 'joy' || answer === 'sad' || answer === 'angry') acc[answer]++
    return acc
  }, initial)
}

const DiaryResultPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const counts = countAnswers(state?.answers)
  const childName = localStorage.getItem('childrenName') ?? localStorage.getItem('childName') ?? ''
  const maxCount = Math.max(counts.joy, counts.sad, counts.angry, 1)
  const hasConsonant = hasConsonantEnding(childName)
  const maxEmotion = EMOTION_RESULTS.reduce((max, cur) =>
    counts[cur.id] > counts[max.id] ? cur : max,
  )

  return (
    <main
      className='relative flex h-dvh flex-col overflow-hidden bg-cover bg-center px-[clamp(2rem,5vw,7.2rem)] pt-[clamp(2rem,3.5vh,6.4rem)] pb-[clamp(1.5rem,2vh,4rem)] text-ink'
      style={{
        backgroundImage: `linear-gradient(rgb(254 247 238 / 0.42), rgb(254 247 238 / 0.5)), url(${bgImage})`,
      }}
    >
      <section className='relative z-1 mb-[clamp(1rem,2vh,3.2rem)] flex shrink-0 items-center justify-center gap-[clamp(1.2rem,2.5vw,3.2rem)] text-glow'>
        <span className='inline-block animate-star text-[clamp(2rem,3vw,3.6rem)] leading-none text-yellow-500 [animation-delay:0s,0.7s]'>★</span>
        <div className='flex flex-col items-center gap-[clamp(0.6rem,1vh,1.2rem)]'>
          <h1 className='text-title text-ink'>오늘의 감정 일기 결과예요!</h1>
          <p className='text-label text-ink-2'>
            {childName}
            {hasConsonant ? '아' : '야'}, 오늘 하루도 수고했어!
          </p>
        </div>
        <span className='inline-block animate-star text-[clamp(2rem,3vw,3.6rem)] leading-none text-yellow-500 [animation-delay:0.15s,0.85s]'>★</span>
      </section>

      <section className='relative z-1 mx-auto grid min-h-0 w-full max-w-1320 flex-1 grid-cols-[clamp(18rem,22%,28rem)_minmax(0,1fr)_clamp(20rem,25%,32rem)] gap-[clamp(1rem,1.5vw,2rem)] rounded-lg border-[1.5px] border-border bg-white/76 p-[clamp(1.6rem,2.5vw,3.2rem)] shadow-card backdrop-blur-[0.4rem]'>
        <ProfileCard childName={childName} />
        <GraphCard
          counts={counts}
          maxCount={maxCount}
          childName={childName}
          hasConsonant={hasConsonant}
        />
        <NoteCard
          title={maxEmotion.emotionDescription.title}
          description={maxEmotion.emotionDescription.description}
          emotion={maxEmotion.id}
        />
      </section>

      <nav className='relative z-1 mt-[clamp(1rem,2vh,3.2rem)] flex shrink-0 items-center justify-center gap-[clamp(1.2rem,2vw,2.4rem)]'>
        <button type='button' className='flex h-[clamp(5rem,7vh,7rem)] min-w-[clamp(14rem,16vw,18rem)] items-center justify-center rounded-pill border-[1.5px] border-border bg-surface-card px-28 text-label text-ink-2 shadow-sm' onClick={() => navigate('/')}>
          🏠 처음으로
        </button>
        <button type='button' className='flex h-[clamp(5rem,7vh,7rem)] min-w-[clamp(14rem,16vw,18rem)] items-center justify-center rounded-pill border-[1.5px] border-border bg-surface-card px-28 text-label text-ink-2 shadow-sm' onClick={() => navigate('/diary')}>
          📔 오늘의 일기 다시쓰기
        </button>
      </nav>
    </main>
  )
}

export default DiaryResultPage
