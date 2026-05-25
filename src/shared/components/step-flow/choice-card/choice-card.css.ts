import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const card = recipe({
  base: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '14rem',
    borderRadius: '20px',
    padding: '0.5rem',
    selectors: {
      '&:disabled': {
        opacity: 0.4,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  },
  variants: {
    color: {
      yellow: { backgroundColor: 'rgba(255, 249, 240)', transform: 'rotate(-2deg)' },
      blue: { backgroundColor: 'rgba(238, 244, 255)', transform: 'translateY(-0.5rem)' },
      purple: { backgroundColor: 'rgba(243, 238, 255)', transform: 'rotate(2deg)' },
    },
  },
})

export const inner = recipe({
  base: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '3rem',
    borderRadius: '14px',
  },
  variants: {
    color: {
      yellow: { border: `0.15rem solid ${themeVars.color.primary300}` },
      blue: { border: '0.15rem solid #C5D8FF' },
      purple: { border: '0.15rem solid #D9C5FF' },
    },
  },
})

export const text = style({
  ...themeVars.fontStyles.sub_16r,
  color: themeVars.color.brown200,
})

export const arrowBtn = recipe({
  base: {
    position: 'absolute',
    bottom: '1.2rem',
    right: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3.2rem',
    height: '3.2rem',
    borderRadius: '50%',
    border: 'none',
    color: themeVars.color.white,
    fontSize: '3.5rem',
    cursor: 'pointer',
    paddingBottom: '0.2rem',
  },
  variants: {
    color: {
      yellow: { backgroundColor: themeVars.color.primary500 },
      blue: { backgroundColor: '#5B8DEF' },
      purple: { backgroundColor: '#9B72EF' },
    },
  },
})
