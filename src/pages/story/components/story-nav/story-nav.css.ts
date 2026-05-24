import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2.4rem',
})

export const navBtn = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  height: '5rem',
  padding: '0 2.8rem',
  backgroundColor: themeVars.color.white,
  border: `0.15rem solid ${themeVars.color.primary200}`,
  borderRadius: '5rem',
  ...themeVars.fontStyles.body_18eb,
  color: themeVars.color.brown200,
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(248, 225, 189, 0.4)',
})

export const progressTrack = style({
  flex: 1,
  height: '0.8rem',
  backgroundColor: themeVars.color.primary200,
  borderRadius: '10rem',
  margin: '0 1.6rem',
  overflow: 'hidden',
})

export const progressFill = style({
  height: '100%',
  backgroundColor: themeVars.color.primary500,
  borderRadius: '10rem',
  transition: 'width 0.4s ease',
})
