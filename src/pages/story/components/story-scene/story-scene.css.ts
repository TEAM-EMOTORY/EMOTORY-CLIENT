import { style } from '@vanilla-extract/css'

export const scene = style({
  width: '55rem',
  height: '40rem',
  borderRadius: '40px',
  overflow: 'hidden',
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})
