import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const page = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '2.4rem',
  color: themeVars.color.brown200,
})

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '72rem',
  gap: '2.4rem',
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  textAlign: 'center',
})

export const title = style({
  ...themeVars.fontStyles.body_32eb,
  display: 'flex',
  alignItems: 'center',
})

export const titleStar = style({
  color: themeVars.color.primary500,
  fontSize: themeVars.fontSize[24],
})

export const pointText = style({
  color: themeVars.color.orange,
})

export const subtitle = style({
  fontSize: themeVars.fontSize[16],
  fontWeight: themeVars.fontWeight.regular,
  lineHeight: themeVars.lineHeight[150],
})

export const card = style({
  display: 'flex',
  gap: '3.2rem',
  backgroundColor: themeVars.color.white,
  borderRadius: '2.4rem',
  padding: '3.2rem',
  width: '100%',
})

export const photoSection = style({
  flexShrink: 0,
  width: '24rem',
})

export const formSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
})
