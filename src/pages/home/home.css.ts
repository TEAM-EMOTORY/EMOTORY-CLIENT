import { style } from '@vanilla-extract/css'

export const BUTTON_LEFT_VAR = '--home-btn-left'
export const BUTTON_TOP_VAR = '--home-btn-top'

export const bgContainer = style({
  position: 'relative',
  width: '100vw',
  height: '100dvh',
  overflow: 'hidden',
})

export const bgImage = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
})

export const button = style({
  position: 'absolute',
  width: '28rem',
  height: '12rem',
  left: `var(${BUTTON_LEFT_VAR})`,
  top: `var(${BUTTON_TOP_VAR})`,
  transform: 'translate(-50%, -50%)',
})
