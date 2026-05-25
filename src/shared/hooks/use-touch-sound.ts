import { useEffect } from 'react'

export const useTouchSound = () => {
  useEffect(() => {
    const audio = new Audio('/touch1.aac')
    audio.preload = 'auto'

    const play = () => {
      const clone = audio.cloneNode() as HTMLAudioElement
      clone.volume = 1
      clone.play().catch(() => {})
    }

    document.addEventListener('click', play)

    return () => {
      document.removeEventListener('click', play)
    }
  }, [])
}
