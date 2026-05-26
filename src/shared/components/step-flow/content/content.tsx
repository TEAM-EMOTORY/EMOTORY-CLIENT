import { useEffect, useState } from 'react'
import * as styles from './content.css'

const DEFAULT_VOICE_NAME = '유나'
const FALLBACK_VOICE_NAME = 'Flo (한국어(대한민국))'

interface ContentProps {
  title?: string
  content: string
  showStar?: boolean
  autoSpeak?: boolean
}

const Content = ({ title, content, showStar = true, autoSpeak = false }: ContentProps) => {
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null)
  const [isVoiceReady, setIsVoiceReady] = useState(false)

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

    const utterance = new SpeechSynthesisUtterance(content)
    utterance.lang = 'ko-KR'
    utterance.voice = selectedVoice ?? null
    utterance.rate = 0.85
    utterance.pitch = 1.05

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)

    return () => {
      window.speechSynthesis.cancel()
    }
  }, [autoSpeak, content, isVoiceReady, selectedVoice])

  return (
    <div className={styles.content}>
      {showStar && <span className={styles.star}>★</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
      <p className={styles.line}>{content}</p>
    </div>
  )
}

export default Content
