import { recipe } from '@vanilla-extract/recipes'

import { themeVars } from '@shared/styles/theme.css'

export const buttonVariants = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '6rem',
    width: '23rem',
    borderRadius: '5rem',
    ...themeVars.fontStyles.body_24eb,
    color: themeVars.color.brown200,
    border: `1px solid ${themeVars.color.primary300}`,
    boxShadow:
      'inset 0px 3px 6px rgba(255, 255, 255, 0.41), inset 0px -3px 5px rgba(0, 0, 0, 0.08)',
  },

  variants: {
    color: {
      yellow: {
        backgroundColor: themeVars.color.primary500,
      },
      cream: {
        backgroundColor: themeVars.color.primary200,
      },
    },
  },
})
