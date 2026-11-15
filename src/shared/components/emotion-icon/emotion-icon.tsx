import type { ReactNode } from 'react'

export type EmotionKey = 'joy' | 'sadness' | 'anger' | 'fear' | 'disgust' | 'surprise'

// Figma "Icon / emotion / *" 컴포넌트와 동일한 SVG
const Icon = ({ children }: { children: ReactNode }) => <>{children}</>

const EMOTION_ICONS: Record<EmotionKey, ReactNode> = {
  joy: (
    <Icon>
      <path
        d='M12 2.6l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 16.9l-5.6 2.9 1.1-6.2L3 9.2l6.2-.9L12 2.6Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinejoin='round'
      />
    </Icon>
  ),
  sadness: (
    <Icon>
      <path
        d='M7.2 15.2a4.1 4.1 0 0 1-.7-8.15A5.6 5.6 0 0 1 17.1 6.3a4.45 4.45 0 0 1 .4 8.9H7.2Z'
        fill='currentColor'
      />
      <path
        d='M8.5 18.2l-.9 2.2M12.3 18.2l-.9 2.2M16.1 18.2l-.9 2.2'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </Icon>
  ),
  anger: (
    <Icon>
      <path
        d='M13.6 2.5 5.2 13.4h6.2l-1.4 8.1 8.8-11.2h-6.3l1.1-7.8Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinejoin='round'
      />
    </Icon>
  ),
  fear: (
    <Icon>
      <path
        d='M12 3a7 7 0 0 0-7 7v10.1c0 .75.86 1.17 1.45.72l1.55-1.18 1.86 1.4a1 1 0 0 0 1.2 0L12 19.6l1.94 1.44a1 1 0 0 0 1.2 0l1.86-1.4 1.55 1.18c.59.45 1.45.03 1.45-.72V10a7 7 0 0 0-7-7Z'
        fill='currentColor'
      />
      <circle cx='9.4' cy='10.6' r='1.4' className='fill-surface-card' />
      <circle cx='14.6' cy='10.6' r='1.4' className='fill-surface-card' />
      <ellipse cx='12' cy='14.6' rx='1.5' ry='1.9' className='fill-surface-card' />
    </Icon>
  ),
  disgust: (
    <Icon>
      <circle cx='12' cy='12' r='9.2' fill='currentColor' />
      <path
        d='M7.6 8.6l2.2 1.4-2.2 1.4M16.4 8.6l-2.2 1.4 2.2 1.4M7.8 16c.7-.9 1.4-.9 2.1 0s1.4.9 2.1 0 1.4-.9 2.1 0 1.4.9 2.1 0'
        className='stroke-surface-card'
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  ),
  surprise: (
    <Icon>
      <path
        d='M10 3.4h4l-.7 11.2h-2.6L10 3.4Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='19.4' r='2' fill='currentColor' />
    </Icon>
  ),
}

/** 감정 아이콘 (Figma "Icon / emotion / *"). 색은 currentColor — 감싸는 요소의 text 색을 따른다 */
const EmotionIcon = ({ emotion, className }: { emotion: EmotionKey; className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className={className}>
    {EMOTION_ICONS[emotion]}
  </svg>
)

export default EmotionIcon
