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
  const { isMuted, play, mute } = useSpeech(content, true)
  const lines = splitSentences(content)

  return (
    <article className='flex flex-col gap-10'>
      <header className='flex items-center gap-8'>
        <h2 className='text-subtitle text-ink'>{title}</h2>
        <button
          type='button'
          aria-label={isMuted ? '읽어주기' : '읽어주기 멈추기'}
          onClick={isMuted ? play : mute}
          className='flex size-36 shrink-0 items-center justify-center rounded-pill bg-yellow-100 text-on-primary'
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeIcon />}
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

const VolumeIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' className='size-20'>
    <path d='M4 9.5h3l4-3.5v12l-4-3.5H4z' fill='currentColor' />
    <path
      d='M15 9a4 4 0 0 1 0 6M17.5 6.5a7.5 7.5 0 0 1 0 11'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
    />
  </svg>
)

const VolumeOffIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' className='size-20'>
    <path d='M4 9.5h3l4-3.5v12l-4-3.5H4z' fill='currentColor' />
    <path d='m15.5 9.5 5 5m0-5-5 5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
  </svg>
)

export default StoryText
