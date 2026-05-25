import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const noteCard = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
  padding: 'clamp(1.2rem, 2vh, 2rem)',
  border: `0.15rem solid rgba(125, 171, 91, 0.28)`,
  borderRadius: '3rem',
  backgroundColor: 'rgba(255, 253, 240, 0.82)',
})

export const noteTitle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  ...themeVars.fontStyles.body_18eb,
  color: '#5B8A46',
  marginBottom: 'clamp(1rem, 1.5vh, 2rem)',
})

export const noteBody = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(1rem, 1.5vh, 2rem)',
  padding: 'clamp(1.6rem, 2.5vh, 3.2rem) clamp(1.2rem, 2vw, 2.4rem) 0',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '2.4rem',
  backgroundColor: 'rgba(255, 255, 255, 0.76)',
  textAlign: 'center',
  ...themeVars.fontStyles.sub_16r,
  lineHeight: 1.9,
  overflow: 'hidden',
})

export const noteHeadline = style({
  ...themeVars.fontStyles.body_20eb,
  color: '#5B8A46',
})

export const noteCharacter = style({
  width: 'clamp(8rem, 12vh, 14rem)',
  marginTop: 'auto',
})
