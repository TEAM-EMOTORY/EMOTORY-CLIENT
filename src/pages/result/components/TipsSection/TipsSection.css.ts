import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const cardOverride = style({
  backgroundColor: themeVars.color.primary100,
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1.2rem',
})

export const item = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'flex-start',
})

export const iconBox = style({
  flexShrink: 0,
  width: '6rem',
  height: '6rem',
  backgroundColor: themeVars.color.primary200,
  borderRadius: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const icon = style({
  fontSize: '2.8rem',
  lineHeight: '1',
})

export const content = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
})

export const tipTitle = style({
  ...themeVars.fontStyles.body_16eb,
  color: themeVars.color.navy200,
})

export const tipDesc = style({
  fontSize: themeVars.fontSize[12],
  fontWeight: themeVars.fontWeight.regular,
  lineHeight: themeVars.lineHeight[150],
  color: themeVars.color.navy200,
})