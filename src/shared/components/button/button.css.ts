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
