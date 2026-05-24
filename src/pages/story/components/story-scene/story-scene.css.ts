import { style } from '@vanilla-extract/css'

export const scene = style({
  flex: 1,
  minWidth: 0,
  height: '100%',
  borderRadius: '40px',
  overflow: 'hidden',
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})
