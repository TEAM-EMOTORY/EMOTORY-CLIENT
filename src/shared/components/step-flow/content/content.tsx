import { useSpeech } from '@shared/hooks/use-speech'
import muteIcon from '@shared/assets/speak-icon/mute.svg'
import volumeIcon from '@shared/assets/speak-icon/volume.svg'

interface ContentProps {
  title?: string
  content: string
  showStar?: boolean
  autoSpeak?: boolean
}

const Content = ({ title, content, showStar = true, autoSpeak = false }: ContentProps) => {
  const { isMuted, play, mute } = useSpeech(content, autoSpeak)

  return (
    <div className='relative flex h-full min-w-0 flex-1 rotate-3 flex-col items-center justify-center gap-24 rounded-lg border-[1.5px] border-border bg-white px-56 py-32 shadow-card'>
      {showStar && <span className='text-heading text-yellow-500'>★</span>}
      {title && <h2 className='text-center text-title text-ink'>{title}</h2>}
      <p className='break-keep text-center text-heading text-ink-2'>{content}</p>
      {autoSpeak && (
        <div className='absolute right-20 bottom-20 flex justify-center' aria-label='음성 제어'>
          <button
            type='button'
            className='flex size-48 items-center justify-center rounded-full border-[1.5px] border-border bg-surface-card p-0 shadow-sm'
            aria-label={isMuted ? '음성 재생' : '음소거'}
            onClick={isMuted ? play : mute}
          >
            <img
              src={isMuted ? volumeIcon : muteIcon}
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
