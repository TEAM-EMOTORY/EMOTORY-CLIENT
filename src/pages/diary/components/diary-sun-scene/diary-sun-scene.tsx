import type { CSSProperties } from 'react'
import './diary-sun-scene.css'

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
    <div className='sun-scene' aria-label='하루 진행 장면'>
      <div className='sun-scene__sky sun-scene__sky--dawn' style={{ opacity: skyOpacity.dawn }} />
      <div className='sun-scene__sky sun-scene__sky--day' style={{ opacity: skyOpacity.day }} />
      <div className='sun-scene__sky sun-scene__sky--dusk' style={{ opacity: skyOpacity.dusk }} />
      <div className='sun-scene__sky sun-scene__sky--night' style={{ opacity: skyOpacity.night }} />
      <div className='sun-scene__path' />
      <div className='sun-scene__sparkle sun-scene__sparkle--1' />
      <div className='sun-scene__sparkle sun-scene__sparkle--2' />
      <div className='sun-scene__sparkle sun-scene__sparkle--3' />
      <div className='sun-scene__cloud sun-scene__cloud--left' />
      <div className='sun-scene__cloud sun-scene__cloud--right' />
      <div className='sun-scene__sun' style={sunStyle} />
      <div className='sun-scene__moon' style={moonStyle} />
      <div className='sun-scene__ground' />
    </div>
  )
}

export default DiarySunScene
