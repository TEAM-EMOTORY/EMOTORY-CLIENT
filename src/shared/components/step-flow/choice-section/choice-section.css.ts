import { themeVars } from '@shared/styles/theme.css'
import { style, keyframes } from '@vanilla-extract/css'

const idleWobble = keyframes({
  '0%, 80%, 100%': { transform: 'none' },
  '83%': { transform: 'rotate(-1.5deg)' },
  '87%': { transform: 'rotate(1.5deg)' },
  '91%': { transform: 'rotate(-1deg)' },
  '95%': { transform: 'rotate(0.5deg)' },
})

export const section = style({
  position: 'relative',
  padding: 'clamp(2.4rem, 3dvh, 3.2rem) 2.8rem 2.8rem',
})

export const label = style({
  position: 'absolute',
  left: '0.8rem',
  display: 'flex',
  gap: '0.6rem',
  ...themeVars.fontStyles.body_28eb,
  color: themeVars.color.brown200,
  backgroundColor: themeVars.color.primary200,
  border: `0.15rem solid ${themeVars.color.primary300}`,
  padding: '0.9rem 2rem',
  transform: 'rotate(-8deg)',
  zIndex: 1,
})

export const star = style({
  color: themeVars.color.primary500,
})

export const cards = style({
  display: 'flex',
  gap: '1.6rem',
  paddingTop: '2.2rem',
})

export const cardWrapper = style({
  flex: 1,
  display: 'flex',
  animationName: idleWobble,
  animationDuration: '4s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
})
