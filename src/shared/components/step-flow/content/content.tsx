import { useSpeech } from '@shared/hooks/use-speech'
import muteIcon from '@shared/assets/speak-icon/mute.svg'
import volumeIcon from '@shared/assets/speak-icon/volume.svg'

interface ContentProps {
  title?: string
  content: string
  showStar?: boolean
  /** 읽어주기(TTS) 버튼을 보여줄지 — 눌렀을 때만 읽는다 */
  speakable?: boolean
}

const Content = ({ title, content, showStar = true, speakable = false }: ContentProps) => {
  const { isSpeaking, play, stop } = useSpeech(content)

  return (
    <div className='relative flex h-full min-w-0 flex-1 rotate-3 flex-col items-center justify-center gap-[clamp(1.4rem,2dvh,2.4rem)] overflow-hidden rounded-lg border-[1.5px] border-border bg-white px-[clamp(3.2rem,5vw,5.6rem)] py-[clamp(2rem,2.8dvh,3.2rem)] shadow-card'>
      {showStar && <span className='text-heading text-yellow-500'>★</span>}
      {title && <h2 className='text-center text-title text-ink'>{title}</h2>}
      <p className='break-keep text-center text-heading text-ink-2'>{content}</p>
      {speakable && (
        <div className='absolute right-20 bottom-20 flex justify-center' aria-label='음성 제어'>
          <button
            type='button'
            className='flex size-48 items-center justify-center rounded-full border-[1.5px] border-border bg-surface-card p-0 shadow-sm'
            aria-label={isSpeaking ? '읽어주기 멈추기' : '읽어주기'}
            onClick={isSpeaking ? stop : play}
          >
            <img
              src={isSpeaking ? muteIcon : volumeIcon}
              alt=''
              className='size-28 object-contain'
              aria-hidden='true'
            />
          </button>
        </div>
      )}
    </div>
  )
}

export default Content
