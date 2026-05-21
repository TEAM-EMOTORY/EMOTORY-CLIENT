import { style } from '@vanilla-extract/css'

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100dvh',
  padding: '3rem 2rem',
})

export const main = style({
  flex: 1,
  display: 'flex',
  gap: '2.4rem',
})
