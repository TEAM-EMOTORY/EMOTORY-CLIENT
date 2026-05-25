import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  position: 'relative',
  padding: ' 2.4rem',
})

export const label = style({
  position: 'absolute',
  left: '0.8rem',
  display: 'flex',
  gap: '0.6rem',
  ...themeVars.fontStyles.body_20eb,
  color: themeVars.color.brown200,
  backgroundColor: themeVars.color.primary200,
  border: `0.15rem solid ${themeVars.color.primary300}`,
  padding: '0.7rem 1.6rem',
  transform: 'rotate(-8deg)',
  zIndex: 1,
})

export const star = style({
  color: themeVars.color.primary500,
})

export const cards = style({
  display: 'flex',
  gap: '1.2rem',
  paddingTop: '1.6rem',
})
