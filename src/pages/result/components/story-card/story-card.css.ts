import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const body = style({
  display: 'flex',
  gap: '2rem',
})

export const image = style({
  width: '16rem',
  height: '16rem',
  objectFit: 'cover',
  borderRadius: '16px',
})

export const line = style({
  ...themeVars.fontStyles.sub_16r,
})
