import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
})

export const input = style({
  fontSize: themeVars.fontSize[18],
  fontWeight: themeVars.fontWeight.regular,
  lineHeight: themeVars.lineHeight[150],
  fontFamily: 'inherit',
  color: themeVars.color.navy200,
  backgroundColor: themeVars.color.white,
  border: `0.2rem solid ${themeVars.color.brown100}`,
  borderRadius: '1.2rem',
  padding: '1.4rem 1.8rem',
  width: '100%',
  outline: 'none',
  selectors: {
    '&::placeholder': {
      color: themeVars.color.brown100,
      fontWeight: themeVars.fontWeight.regular,
    },
  },
})
