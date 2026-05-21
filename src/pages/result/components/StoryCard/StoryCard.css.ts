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

export const textBlock = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
})

export const line = style({
  ...themeVars.fontStyles.sub_16r,
})
