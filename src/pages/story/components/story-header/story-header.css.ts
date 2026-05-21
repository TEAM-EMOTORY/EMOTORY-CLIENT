import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  paddingBottom: '2.4rem',
})

export const logo = style({
  ...themeVars.fontStyles.body_24eb,
})

export const emotionChip = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  backgroundColor: themeVars.color.white,
  border: `0.1rem solid ${themeVars.color.primary200}`,
  borderRadius: '5rem',
  padding: '0.6rem 1.4rem',
  ...themeVars.fontStyles.body_16eb,
  color: themeVars.color.brown200,
})

export const chevron = style({
  fontSize: '3rem',
})
