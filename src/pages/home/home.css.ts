import { style } from '@vanilla-extract/css'

export const BUTTON_LEFT_VAR = '--home-btn-left'
export const BUTTON_TOP_VAR = '--home-btn-top'
export const AGREEMENT_LEFT_VAR = '--home-agreement-left'
export const AGREEMENT_TOP_VAR = '--home-agreement-top'

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

export const diaryButton = style({
  position: 'absolute',
  width: '40rem',
  height: '18rem',
  left: `var(${BUTTON_LEFT_VAR})`,
  top: `var(${BUTTON_TOP_VAR})`,
  transform: 'translate(-50%, -50%)',
})

export const agreementButton = style({
  position: 'absolute',
  width: '30rem',
  height: '14rem',
  left: `var(${AGREEMENT_LEFT_VAR})`,
  top: `var(${AGREEMENT_TOP_VAR})`,
  transform: 'translate(-50%, -50%)',
})
