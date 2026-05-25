import { themeVars } from '@shared/styles'
import { style, keyframes } from '@vanilla-extract/css'

const shimmer = keyframes({
  '0%': { backgroundPosition: '200% 0' },
  '100%': { backgroundPosition: '-200% 0' },
})

export const scene = style({
  flex: 1,
  minWidth: 0,
  height: '100%',
  borderRadius: '40px',
  overflow: 'hidden',
  backgroundColor: themeVars.color.white,
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const skeleton = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(90deg, ${themeVars.color.primary200} 25%, ${themeVars.color.primary100} 50%, ${themeVars.color.primary200} 75%)`,
  backgroundSize: '200% 100%',
  animationName: shimmer,
  animationDuration: '1.5s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
})

export const skeletonText = style({
  ...themeVars.fontStyles.body_16eb,
  color: themeVars.color.brown200,
})
