import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  paddingBottom: 'clamp(1.2rem, 2dvh, 2.4rem)',
})

export const logo = style({
  height: '5.6rem',
  width: 'auto',
  objectFit: 'contain',
})

export const emotionChip = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  backgroundColor: themeVars.color.white,
  border: `0.1rem solid ${themeVars.color.primary200}`,
  borderRadius: '5rem',
  padding: '0.7rem 1.6rem',
  ...themeVars.fontStyles.body_18eb,
  color: themeVars.color.brown200,
})

export const chevron = style({
  fontSize: '3.4rem',
})
