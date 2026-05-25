import { themeVars } from '@shared/styles'
import { style, keyframes } from '@vanilla-extract/css'

const fadeIn = keyframes({
  from: { opacity: 0, transform: 'translateY(8px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

export const wrapper = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.2rem',
  backgroundColor: themeVars.color.primary100,
  animationName: fadeIn,
  animationDuration: '0.4s',
  animationFillMode: 'both',
})

export const label = style({
  ...themeVars.fontStyles.body_18eb,
  color: themeVars.color.brown200,
})

export const canvas = style({
  borderRadius: '20px',
  border: `0.2rem dashed ${themeVars.color.primary300}`,
  backgroundColor: themeVars.color.white,
  touchAction: 'none',
  cursor: 'crosshair',
})

export const toolbar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const colorButton = style({
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: '50%',
  border: '0.3rem solid transparent',
  cursor: 'pointer',
  transition: 'transform 0.15s, border-color 0.15s',
  selectors: {
    '&:active': {
      transform: 'scale(0.9)',
    },
  },
})

export const colorButtonActive = style({
  borderColor: themeVars.color.navy200,
  transform: 'scale(1.15)',
})

export const eraserButton = style({
  ...themeVars.fontStyles.body_18eb,
  padding: '0.4rem 1.2rem',
  borderRadius: '2rem',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  backgroundColor: themeVars.color.white,
  color: themeVars.color.brown200,
  cursor: 'pointer',
})

export const eraserButtonActive = style({
  backgroundColor: themeVars.color.primary200,
  borderColor: themeVars.color.brown100,
})
