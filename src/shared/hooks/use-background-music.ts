import { useEffect, useRef } from 'react'

export const useBackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('/bgm1.aac')
    audio.loop = true
    audio.volume = 1
    audioRef.current = audio

    const playOnInteraction = async () => {
      try {
        await audio.play()
        document.removeEventListener('click', playOnInteraction)
        document.removeEventListener('touchstart', playOnInteraction)
      } catch (e) {
        console.warn('BGM play failed:', e)
      }
    }

    audio.play().catch(() => {
      document.addEventListener('click', playOnInteraction)
      document.addEventListener('touchstart', playOnInteraction)
    })

    return () => {
      document.removeEventListener('click', playOnInteraction)
      document.removeEventListener('touchstart', playOnInteraction)
      audio.pause()
      audio.src = ''
    }
  }, [])
}
