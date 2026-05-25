import type { CSSProperties } from 'react'
import * as styles from './diary-sun-scene.css'

interface DiarySunSceneProps {
  currentStep: number
  totalSteps: number
}

const clamp = (value: number) => Math.min(Math.max(value, 0), 1)

const getLayerOpacity = (progress: number) => ({
  dawn: clamp(1 - progress / 0.28),
  day: clamp(1 - Math.abs(progress - 0.42) / 0.34),
  dusk: clamp(1 - Math.abs(progress - 0.78) / 0.22),
  night: clamp((progress - 0.78) / 0.22),
})

const DiarySunScene = ({ currentStep, totalSteps }: DiarySunSceneProps) => {
  const progress = totalSteps <= 1 ? 1 : (currentStep - 1) / (totalSteps - 1)
  const sunHeightRatio = Math.sin(progress * Math.PI)
  const moonProgress = clamp((progress - 0.7) / 0.3)
  const sunStyle: CSSProperties = {
    left: `${8 + progress * 84}%`,
    bottom: `${12 + sunHeightRatio * 58}%`,
    opacity: 1 - moonProgress,
  }
  const moonStyle: CSSProperties = {
    left: sunStyle.left,
    bottom: sunStyle.bottom,
    opacity: moonProgress,
  }
  const skyOpacity = getLayerOpacity(progress)

  return (
    <div className={styles.scene} aria-label='하루 진행 장면'>
      <div className={styles.dawnSky} style={{ opacity: skyOpacity.dawn }} />
      <div className={styles.daySky} style={{ opacity: skyOpacity.day }} />
      <div className={styles.duskSky} style={{ opacity: skyOpacity.dusk }} />
      <div className={styles.nightSky} style={{ opacity: skyOpacity.night }} />
      <div className={styles.sunPath} />
      <div className={styles.sparkleOne} />
      <div className={styles.sparkleTwo} />
      <div className={styles.sparkleThree} />
      <div className={styles.cloudLeft} />
      <div className={styles.cloudRight} />
      <div className={styles.sun} style={sunStyle} />
      <div className={styles.moon} style={moonStyle} />
      <div className={styles.ground} />
    </div>
  )
}

export default DiarySunScene
