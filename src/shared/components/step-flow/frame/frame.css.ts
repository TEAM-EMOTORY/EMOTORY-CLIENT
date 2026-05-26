import { style } from '@vanilla-extract/css'

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100dvh',
  padding: 'clamp(1.5rem, 2.5dvh, 3rem) 2rem',
})

export const wrapper = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
})

export const main = style({
  flex: 1,
  display: 'flex',
  gap: 'clamp(1.4rem, 2dvh, 2.4rem)',
  alignItems: 'stretch',
  justifyContent: 'center',
  minHeight: 0,
})
