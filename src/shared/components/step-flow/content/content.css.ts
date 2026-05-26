import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const content = style({
  position: 'relative',
  display: 'flex',
  flex: 1,
  minWidth: 0,
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.4rem',
  padding: '3.2rem 5.6rem',
  transform: 'rotate(3deg)',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  backgroundColor: themeVars.color.white,
  boxShadow:
    'inset 0 6px 20px rgba(255, 255, 255, 0.65), 0 0 10px 2px rgba(252, 201, 68, 0.15), 0 0 18px 4px rgba(248, 229, 205, 0.25)',
  borderRadius: '30px',
})

export const star = style({
  color: themeVars.color.primary500,
  fontSize: themeVars.fontSize[28],
})

export const title = style({
  ...themeVars.fontStyles.body_36eb,
  color: themeVars.color.navy200,
  textAlign: 'center',
})

export const line = style({
  ...themeVars.fontStyles.body_28eb,
  color: themeVars.color.brown200,
  textAlign: 'center',
  lineHeight: 1.6,
  wordBreak: 'keep-all',
})

export const voiceControls = style({
  position: 'absolute',
  right: '2rem',
  bottom: '2rem',
  display: 'flex',
  justifyContent: 'center',
})

export const voiceButton = style({
  display: 'flex',
  width: '4.8rem',
  height: '4.8rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '50%',
  backgroundColor: themeVars.color.primary100,
  cursor: 'pointer',
})

export const voiceIcon = style({
  width: '2.8rem',
  height: '2.8rem',
  objectFit: 'contain',
})
