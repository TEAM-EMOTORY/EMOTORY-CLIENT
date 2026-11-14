import { useSpeech } from '@shared/hooks/use-speech'

interface StoryTextProps {
  title: string
  content: string
}

/** 문장 단위로 줄을 나눈다. 마지막 문장은 강조 색으로 보여준다 (Figma 06D) */
const splitSentences = (content: string) =>
  content
    .split(/(?<=[.!?])\s+|\n+/)
    .map((line) => line.trim())
    .filter(Boolean)

const StoryText = ({ title, content }: StoryTextProps) => {
  const { isSpeaking, play, stop } = useSpeech(content)
  const lines = splitSentences(content)

  return (
    <article className='flex flex-col gap-10'>
      <header className='flex items-center gap-8'>
        <h2 className='text-subtitle text-ink'>{title}</h2>
        {/* 동화 읽어주기(TTS) — 누르면 읽고, 읽는 중에 누르면 멈춘다.
            아이콘(svg)은 터치 대상에서 빼야 책 넘김 라이브러리가 버튼 터치를 가로채지 않는다 */}
        <button
          type='button'
          aria-label={isSpeaking ? '읽어주기 멈추기' : '동화 읽어주기'}
          aria-pressed={isSpeaking}
          onClick={isSpeaking ? stop : play}
          className={
            isSpeaking
              ? 'flex size-36 shrink-0 items-center justify-center rounded-pill bg-yellow-500 text-on-primary shadow-sm *:pointer-events-none'
              : 'flex size-36 shrink-0 items-center justify-center rounded-pill bg-yellow-100 text-on-primary *:pointer-events-none'
          }
        >
          <SpeakerIcon speaking={isSpeaking} />
        </button>
      </header>

      {lines.map((line, i) => (
        <p
          key={`${i}-${line}`}
          className={
            i === lines.length - 1 && lines.length > 1
              ? 'break-keep text-caption text-accent-text'
              : 'break-keep text-caption text-ink-2'
          }
        >
          {line}
        </p>
      ))}
    </article>
  )
}

/** 스피커 — 읽는 중이면 소리 물결이 번갈아 깜빡인다 */
const SpeakerIcon = ({ speaking }: { speaking: boolean }) => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-20'>
    <path d='M4 9.5h3l4-3.5v12l-4-3.5H4z' fill='currentColor' />
    <path
      d='M15 9a4 4 0 0 1 0 6'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      className={speaking ? 'animate-pulse' : undefined}
    />
    <path
      d='M17.5 6.5a7.5 7.5 0 0 1 0 11'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      className={speaking ? 'animate-pulse [animation-delay:0.3s]' : undefined}
    />
  </svg>
)

export default StoryText
