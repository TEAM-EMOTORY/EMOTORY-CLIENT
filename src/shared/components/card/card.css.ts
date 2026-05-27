import { themeVars } from '@shared/styles/theme.css'
import { recipe } from '@vanilla-extract/recipes'

export const card = recipe({
  base: {
    position: 'relative',
    borderRadius: '30px',
    padding: 'clamp(4rem, 4.8dvh, 5.6rem) 2.8rem clamp(2rem, 3dvh, 3.2rem) 2.8rem',
  },
  variants: {
    color: {
      light: {
        backgroundColor: themeVars.color.primary50,
        border: `0.15rem solid ${themeVars.color.primary100}`,
        boxShadow:
          'inset 0 6px 16px rgba(255, 255, 255, 0.85), 0 4px 16px rgba(248, 225, 189, 0.5)',
      },
      warm: {
        backgroundColor: themeVars.color.primary100,
        border: `0.15rem solid ${themeVars.color.primary200}`,
        boxShadow:
          'inset 0 6px 20px rgba(255, 255, 255, 0.65), 0 0 10px 2px rgba(252, 201, 68, 0.15), 0 0 18px 4px rgba(248, 229, 205, 0.25)',
      },
    },
  },
})

export const header = recipe({
  base: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-70%, -50%)',
    display: 'flex',
    gap: '0.8rem',
    whiteSpace: 'nowrap',
    borderRadius: '5rem',
    padding: '0.9rem 2.6rem',
    ...themeVars.fontStyles.body_18eb,
  },
  variants: {
    color: {
      light: {
        backgroundColor: themeVars.color.white,
        border: `0.15rem solid ${themeVars.color.primary100}`,
        color: themeVars.color.brown200,
      },
      warm: {
        backgroundColor: themeVars.color.primary100,
        border: `0.15rem solid ${themeVars.color.primary200}`,
        color: themeVars.color.primary500,
        boxShadow: '0 0 px 2px rgba(252, 201, 68, 0.15), 0 0 18px 4px rgba(248, 229, 205, 0.25)',
      },
    },
  },
})
