import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const uploadBox = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30rem',
  height: '35rem',
  backgroundColor: themeVars.color.primary100,
  borderRadius: '20px',
  overflow: 'hidden',
})

export const previewImage = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'calc(100% - 2rem)',
  height: 'calc(100% - 2rem)',
  border: `0.25rem dashed ${themeVars.color.primary500}`,
  borderRadius: '20px',
})

export const uploadTitle = style({
  ...themeVars.fontStyles.body_18eb,
})

export const uploadDesc = style({
  ...themeVars.fontStyles.sub_12r,
  textAlign: 'center',
})
