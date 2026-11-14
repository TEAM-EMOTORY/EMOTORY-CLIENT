import { useEffect, useRef, useState } from 'react'

const DEFAULT_VOICE_NAME = '유나'
const FALLBACK_VOICE_NAME = 'Flo (한국어(대한민국))'

const createUtterance = (content: string, voice: SpeechSynthesisVoice | null) => {
  const utterance = new SpeechSynthesisUtterance(content)
  utterance.lang = 'ko-KR'
  utterance.voice = voice
  utterance.rate = 0.85
  utterance.pitch = 1.05
  return utterance
}

/**
 * 동화 읽어주기(TTS). 자동으로 읽지 않고, play()를 눌렀을 때만 읽는다.
 * 본문이 바뀌거나 화면을 벗어나면 읽던 소리를 멈춘다.
 */
export const useSpeech = (content: string) => {
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null)
  // 지금 실제로 읽고 있는지 — 버튼 모양(읽는 중 / 대기)에 쓴다
  const [isSpeaking, setIsSpeaking] = useState(false)
  const currentRef = useRef<SpeechSynthesisUtterance | null>(null)
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

  useEffect(() => {
    if (!isSupported) return

    const updateVoices = () => {
      const koreanVoices = window.speechSynthesis
        .getVoices()
        .filter((voice) => voice.lang === 'ko-KR')
      const defaultVoice =
        koreanVoices.find((voice) => voice.name === DEFAULT_VOICE_NAME) ??
        koreanVoices.find((voice) => voice.name === FALLBACK_VOICE_NAME) ??
        koreanVoices[0]

      setSelectedVoice(defaultVoice ?? null)
    }

    updateVoices()
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices)

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', updateVoices)
    }
  }, [isSupported])

  // 본문이 바뀌거나 화면을 벗어나면 읽던 소리를 멈춘다
  useEffect(() => {
    return () => {
      if (currentRef.current && isSupported) {
        currentRef.current = null
        window.speechSynthesis.cancel()
      }
    }
  }, [content, isSupported])

  const stop = () => {
    currentRef.current = null
    setIsSpeaking(false)
    if (isSupported) window.speechSynthesis.cancel()
  }

  const play = () => {
    if (!content || !isSupported) return

    const utterance = createUtterance(content, selectedVoice)
    // 이전 문장이 취소되며 오는 end 이벤트는 무시하고, 지금 문장의 시작/끝만 반영한다
    const settle = () => {
      if (currentRef.current === utterance) setIsSpeaking(false)
    }
    utterance.onstart = () => {
      if (currentRef.current === utterance) setIsSpeaking(true)
    }
    utterance.onend = settle
    utterance.onerror = settle

    currentRef.current = utterance
    const synth = window.speechSynthesis
    // 읽는 중일 때만 끊는다 — 아무것도 없는데 cancel() 직후 speak()하면 크롬에서 소리가 안 나는 경우가 있다
    if (synth.speaking || synth.pending) synth.cancel()
    // 크롬은 일정 시간 뒤 음성 엔진이 일시정지 상태로 남는 경우가 있어 풀어 준다
    if (synth.paused) synth.resume()
    synth.speak(utterance)
    setIsSpeaking(true)
  }

  return { isSpeaking, play, stop }
}
