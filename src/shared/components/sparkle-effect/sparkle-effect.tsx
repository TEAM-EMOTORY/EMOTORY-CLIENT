import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const SparkleEffect = () => {
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      const point = 'touches' in e ? e.touches[0] : e
      const x = point.clientX / window.innerWidth
      const y = point.clientY / window.innerHeight

      confetti({
        origin: { x, y },
        particleCount: 50,
        spread: 360,
        startVelocity: 8,
        decay: 0.87,
        gravity: 0,
        scalar: 0.8,
        colors: ['#F5622E', '#FCC944', '#4CAF50', '#5B8DEF', '#FF69B4', '#9B72EF', '#FFD95B'],
        ticks: 80,
      })
    }

    document.addEventListener('click', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('click', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [])

  return null
}

export default SparkleEffect
