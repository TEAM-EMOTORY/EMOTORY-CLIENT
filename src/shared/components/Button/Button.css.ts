import { themeVars } from '@shared/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const base = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  ...themeVars.fontStyles.body_24eb,
  borderRadius: '1.6rem',
  padding: '1.8rem 3.2rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.15s, transform 0.1s',
  selectors: {
    '&:active': { transform: 'scale(0.98)' },
    '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
  },
})

export const variants = styleVariants({
  primary: {
    backgroundColor: themeVars.color.amber,
    color: themeVars.color.navy200,
  },
  secondary: {
    backgroundColor: themeVars.color.navy100,
    color: themeVars.color.white,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: themeVars.color.navy100,
    border: `0.2rem solid ${themeVars.color.navy100}`,
  },
})

export const fullWidth = style({
  width: '100%',
})