import { recipe } from '@vanilla-extract/recipes'

import { themeVars } from '@shared/styles/theme.css'

export const buttonVariants = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5rem',
    color: themeVars.color.brown200,
    ...themeVars.fontStyles.body_28eb,
    border: `1px solid ${themeVars.color.primary300}`,
    boxShadow:
      'inset 0px 3px 6px rgba(255, 255, 255, 0.41), inset 0px -3px 5px rgba(0, 0, 0, 0.08)',
  },

  variants: {
    color: {
      yellow: {
        minHeight: '7.2rem',
        width: '26rem',
        padding: '0 2.8rem',
        backgroundColor: themeVars.color.primary500,
      },
      cream: {
        minHeight: '7.2rem',
        width: '26rem',
        padding: '0 2.8rem',
        backgroundColor: themeVars.color.primary300,
      },
      white: {
        ...themeVars.fontStyles.body_18eb,
        boxShadow: 'none',
        border: 'none',
        backgroundColor: themeVars.color.primary50,
        padding: '1.8rem 3.2rem',
      },
    },
  },
})
