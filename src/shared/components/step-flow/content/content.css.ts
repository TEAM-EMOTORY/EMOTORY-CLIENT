import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const content = style({
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
