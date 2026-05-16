import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { themeVars } from '@shared/styles/theme.css'
import { fontStyles } from '@shared/styles/tokens/font-style'

export const inputVariants = recipe({
  base: {
    width: '100%',
    height: '6rem',
    padding: '1.3rem 1.2rem',
    border: `2px solid ${themeVars.color.primary300}`,
    backgroundColor: themeVars.color.primary100,
    borderRadius: '10px',
    outline: 'none',
    fontFamily: 'inherit',

    ...fontStyles.body_18eb,

    selectors: {
      '&::placeholder': { color: themeVars.color.brown100 },
      '&:focus': {
        borderColor: themeVars.color.primary500,
      },

      '&:focus::placeholder': { color: 'transparent' },
    },
  },

  variants: {
    hasError: {
      false: {},

      true: {
        borderColor: themeVars.color.brown200,
        selectors: {
          '&:not(:placeholder-shown)': {
            color: themeVars.color.brown200,
            borderColor: themeVars.color.brown200,
          },
          '&:focus::placeholder': {
            color: 'transparent',
          },
        },
      },
    },
  },

  defaultVariants: {
    hasError: false,
  },
})

export const inputContainer = style({
  display: 'flex',
  justifyContent: 'center',
})
