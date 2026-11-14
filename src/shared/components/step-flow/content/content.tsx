import { useEffect, useState } from 'react'
import muteIcon from '@shared/assets/speak-icon/mute.svg'
import volumeIcon from '@shared/assets/speak-icon/volume.svg'

const DEFAULT_VOICE_NAME = '유나'
const FALLBACK_VOICE_NAME = 'Flo (한국어(대한민국))'

const speakContent = (content: string, voice: SpeechSynthesisVoice | null) => {
  const utterance = new SpeechSynthesisUtterance(content)
  utterance.lang = 'ko-KR'
  utterance.voice = voice
  utterance.rate = 0.85
  utterance.pitch = 1.05

  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utterance)
}

interface ContentProps {
  title?: string
  content: string
  showStar?: boolean
  autoSpeak?: boolean
}

const Content = ({ title, content, showStar = true, autoSpeak = false }: ContentProps) => {
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null)
  const [isVoiceReady, setIsVoiceReady] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (!autoSpeak || !('speechSynthesis' in window)) return

    const updateVoices = () => {
      const koreanVoices = window.speechSynthesis
        .getVoices()
        .filter((voice) => voice.lang === 'ko-KR')
      const defaultVoice =
        koreanVoices.find((voice) => voice.name === DEFAULT_VOICE_NAME) ??
        koreanVoices.find((voice) => voice.name === FALLBACK_VOICE_NAME) ??
        koreanVoices[0]

      setSelectedVoice(defaultVoice ?? null)
      setIsVoiceReady(true)
    }

    updateVoices()
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices)

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', updateVoices)
    }
  }, [autoSpeak])

  useEffect(() => {
    if (!autoSpeak || !content || !isVoiceReady || !('speechSynthesis' in window)) return
    if (isMuted) {
      window.speechSynthesis.cancel()
      return
    }

    speakContent(content, selectedVoice)

    return () => {
      window.speechSynthesis.cancel()
    }
  }, [autoSpeak, content, isVoiceReady, isMuted, selectedVoice])

  const handleMuteToggle = () => {
    setIsMuted((currentIsMuted) => {
      if (!currentIsMuted && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
        return true
      }

      return false
    })
  }

  const handlePlay = () => {
    setIsMuted(false)

    if (autoSpeak && content && isVoiceReady && 'speechSynthesis' in window) {
      speakContent(content, selectedVoice)
    }
  }

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
            onClick={isMuted ? handlePlay : handleMuteToggle}
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
