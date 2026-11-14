import { useEffect, useState } from 'react'

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

/** 본문을 한국어 음성으로 읽어준다. autoSpeak이면 content가 바뀔 때마다 자동 재생 */
export const useSpeech = (content: string, autoSpeak: boolean) => {
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

  const mute = () => {
    setIsMuted((currentIsMuted) => {
      if (!currentIsMuted && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
        return true
      }

      return false
    })
  }

  const play = () => {
    setIsMuted(false)

    if (autoSpeak && content && isVoiceReady && 'speechSynthesis' in window) {
      speakContent(content, selectedVoice)
    }
  }

  return { isMuted, play, mute }
}
