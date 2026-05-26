import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  position: 'relative',
  padding: 'clamp(2.4rem, 3dvh, 3.2rem) 2.8rem 2.8rem',
})

export const label = style({
  position: 'absolute',
  left: '0.8rem',
  display: 'flex',
  gap: '0.6rem',
  ...themeVars.fontStyles.body_28eb,
  color: themeVars.color.brown200,
  backgroundColor: themeVars.color.primary200,
  border: `0.15rem solid ${themeVars.color.primary300}`,
  padding: '0.9rem 2rem',
  transform: 'rotate(-8deg)',
  zIndex: 1,
})

export const star = style({
  color: themeVars.color.primary500,
})

export const cards = style({
  display: 'flex',
  gap: '1.6rem',
  paddingTop: '2.2rem',
})
