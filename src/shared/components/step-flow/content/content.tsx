import { useEffect, useState } from 'react'
import * as styles from './content.css'

const DEFAULT_VOICE_INDEX = 9

interface ContentProps {
  title?: string
  content: string
  showStar?: boolean
  autoSpeak?: boolean
}

const Content = ({ title, content, showStar = true, autoSpeak = false }: ContentProps) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [selectedVoiceURI, setSelectedVoiceURI] = useState('')
  const selectedVoice = voices.find((voice) => voice.voiceURI === selectedVoiceURI)

  useEffect(() => {
    if (!autoSpeak || !('speechSynthesis' in window)) return

    const updateVoices = () => {
      const koreanVoices = window.speechSynthesis
        .getVoices()
        .filter((voice) => voice.lang === 'ko-KR')
      const defaultVoice = koreanVoices[DEFAULT_VOICE_INDEX] ?? koreanVoices[0]

      setVoices(koreanVoices)
      setSelectedVoiceURI((currentVoiceURI) => currentVoiceURI || defaultVoice?.voiceURI || '')
    }

    updateVoices()
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices)

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', updateVoices)
    }
  }, [autoSpeak])

  useEffect(() => {
    if (!autoSpeak || !content || !('speechSynthesis' in window)) return

    const utterance = new SpeechSynthesisUtterance(content)
    utterance.lang = 'ko-KR'
    utterance.voice = selectedVoice ?? null
    utterance.rate = 0.9

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)

    return () => {
      window.speechSynthesis.cancel()
    }
  }, [autoSpeak, content, selectedVoice])

  return (
    <div className={styles.content}>
      {showStar && <span className={styles.star}>★</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
      <p className={styles.line}>{content}</p>
    </div>
  )
}

export default Content
