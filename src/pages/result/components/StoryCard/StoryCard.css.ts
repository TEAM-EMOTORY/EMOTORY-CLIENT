import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const body = style({
  display: 'flex',
  gap: '2rem',
})

export const imageBox = style({
  width: '16rem',
  height: '16rem',
  backgroundColor: themeVars.color.primary200,
  borderRadius: '1.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '1.6rem',
})

export const imagePlaceholder = style({
  fontSize: '6rem',
  lineHeight: '1',
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
