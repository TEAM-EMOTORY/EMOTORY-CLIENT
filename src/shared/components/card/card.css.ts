import { themeVars } from '@shared/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const card = style({
  position: 'relative',
  borderRadius: '2rem',
  padding: '4rem 2.4rem 2.4rem',
})

export const cardVariants = styleVariants({
  light: {
    backgroundColor: themeVars.color.white,
    border: `0.15rem solid ${themeVars.color.primary200}`,
  },
  soft: {
    backgroundColor: themeVars.color.primary100,
    border: `0.15rem solid ${themeVars.color.primary200}`,
  },
  warm: {
    backgroundColor: themeVars.color.primary150,
    border: `0.15rem solid ${themeVars.color.primary200}`,
  },
})

export const header = style({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  borderRadius: '5rem',
  padding: '0.8rem 2.4rem',
  ...themeVars.fontStyles.body_18eb,
  color: themeVars.color.navy200,
})

export const headerVariants = styleVariants({
  default: {
    backgroundColor: themeVars.color.primary200,
  },
  light: {
    backgroundColor: themeVars.color.primary100,
    border: `0.15rem solid ${themeVars.color.primary200}`,
  },
})
