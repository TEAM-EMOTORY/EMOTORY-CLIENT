import { useNavigate } from 'react-router-dom'
import Bunting from './components/bunting/bunting'
import EmotionFace from './components/emotion-face/emotion-face'
import { EMOTION_BG, EMOTION_FAMILIES } from './constants/emotion-words'

// 압정 색 — 이웃한 카드끼리 겹치지 않게 감정 색을 돌려 쓴다 (Figma A안)
const PIN_ORDER = Object.keys(EMOTION_BG) as (keyof typeof EMOTION_BG)[]
// 압정으로 꽂아 둔 듯 살짝씩 기울인 각도 (계열 순서대로)
const TILTS = [
  -1.5, 1.2, -0.8, 1.5, -1.2, 0.8, 1.2, -1.5, 1.5, -0.8, 0.8, -1.2, -1, 1.5, -1.5, 1, -0.8, 1.2,
]

// 얼굴 크기 — 최대 84px. 카드 영역(cq)을 --rows 줄 × --cols 칸으로 나눈 뒤
// 카드 여백 · 낱말(71px)과 행 간격(16px) · 열 간격(최대 20px)을 빼고 남는 만큼만 쓴다
const FACE_SIZE =
  'min(8.4rem, calc((100cqh - (var(--rows) - 1) * 1.6rem) / var(--rows) - 7.1rem), calc((100cqw - (var(--cols) - 1) * 2rem) / var(--cols) - 2.4rem))'

/** 감정 사전 (Figma 09) — 유치원 벽 감정판처럼 표정 카드를 게시판에 꽂아 둔 화면 */
const EmotionDictionaryPage = () => {
  const navigate = useNavigate()

  return (
    <main className='flex h-dvh flex-col px-[clamp(2.4rem,3.6vw,4rem)] pt-[clamp(1.6rem,2.4vh,2.4rem)] pb-[clamp(1.6rem,2.4vh,2.4rem)]'>
      <header className='relative flex flex-col items-center gap-6 pb-[clamp(1.2rem,2vh,2rem)]'>
        <button
          type='button'
          onClick={() => navigate('/')}
          className='absolute top-[clamp(0.4rem,1vh,1rem)] left-0 flex h-46 items-center gap-8 rounded-pill border border-border bg-surface-card px-24 text-label text-ink-2 shadow-sm'
        >
          <HomeIcon />
          처음으로
        </button>
        {/* 낮은 화면(Safari 주소창 등)에서는 제목을 줄여 카드에 자리를 더 준다 */}
        <h1 className='text-title text-ink text-glow [@media(max-height:720px)]:text-heading'>
          감정 사전
        </h1>
        <p className='text-caption text-ink-2 text-glow'>
          오늘 내 마음은 어떤 얼굴일까? 표정을 따라 해 보며 감정을 알아봐요
        </p>
      </header>

      {/* 게시판 */}
      <section
        aria-label='감정 낱말'
        className='flex min-h-0 flex-1 rounded-lg bg-border-strong p-14 shadow-card'
      >
        <div className='flex min-h-0 flex-1 flex-col overflow-y-auto rounded-md bg-surface-inset px-24 pb-14'>
          <Bunting />

          {/* 카드 영역 크기(cq)에 맞춰 얼굴 크기를 줄여서, 아이패드 한 화면에 스크롤 없이 다 보이게 한다
              가로 화면: 6칸 × 3줄 (감정 계열 하나가 한 칸) / 세로 화면: 3칸 × 6줄 */}
          <ul className='grid min-h-0 flex-1 grid-flow-col grid-cols-[repeat(var(--cols),minmax(0,1fr))] grid-rows-[repeat(var(--rows),auto)] content-center gap-x-[clamp(1.2rem,1.8vw,2rem)] gap-y-16 px-8 pt-18 [container-type:size] [--cols:6] [--rows:3] portrait:[--cols:3] portrait:[--rows:6]'>
            {EMOTION_FAMILIES.flatMap(({ words }, col) =>
              words.map(({ face, label }, row) => {
                const index = col * words.length + row
                return (
                  <li
                    key={face}
                    className='relative flex flex-col items-center gap-6 rounded-lg border-2 border-border-strong bg-surface-card px-10 pt-20 pb-14 shadow-sm'
                    style={{ rotate: `${TILTS[index]}deg` }}
                  >
                    <span
                      aria-hidden
                      className={`absolute -top-6 left-1/2 size-16 -translate-x-1/2 rounded-pill border-[2.5px] border-white shadow-[0_0.2rem_0.3rem_rgb(59_42_26/0.25)] ${EMOTION_BG[PIN_ORDER[(col + row * 2) % PIN_ORDER.length]]}`}
                    />
                    <EmotionFace face={face} style={{ width: FACE_SIZE, height: FACE_SIZE }} />
                    <span className='text-label whitespace-nowrap text-ink'>{label}</span>
                  </li>
                )
              }),
            )}
          </ul>
        </div>
      </section>
    </main>
  )
}

const HomeIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-24'>
    <path
      d='M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinejoin='round'
    />
  </svg>
)

export default EmotionDictionaryPage
