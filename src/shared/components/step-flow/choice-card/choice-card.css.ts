import { themeVars } from '@shared/styles/theme.css'
import { keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const cardPop = keyframes({
  '0%': { transform: 'translateY(0) scale(1)' },
  '45%': { transform: 'translateY(-1.2rem) scale(1.04)' },
  '100%': { transform: 'translateY(0) scale(1)' },
})

const characterBounce = keyframes({
  '0%': { transform: 'translateY(0) rotate(0deg)' },
  '35%': { transform: 'translateY(-1.4rem) rotate(-6deg)' },
  '70%': { transform: 'translateY(0.2rem) rotate(5deg)' },
  '100%': { transform: 'translateY(0) rotate(0deg)' },
})

export const card = recipe({
  base: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '16.5rem',
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

export const selectedCard = style({
  animationName: cardPop,
  animationDuration: '0.36s',
  animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  filter: 'saturate(1.65) brightness(0.94)',
  boxShadow: '0 1rem 2.8rem rgba(104, 70, 43, 0.26)',
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      inset: '0.5rem',
      borderRadius: '14px',
      backgroundColor: 'rgba(252, 201, 68, 0.18)',
      border: `0.24rem solid ${themeVars.color.primary500}`,
      pointerEvents: 'none',
    },
    '&:disabled': {
      opacity: 1,
      cursor: 'pointer',
      pointerEvents: 'auto',
    },
  },
})

export const inner = recipe({
  base: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3.2rem 6rem',
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

export const character = style({
  position: 'absolute',
  left: '1.8rem',
  bottom: '1.2rem',
  width: 'clamp(6rem, 24%, 8rem)',
  maxHeight: '80%',
  objectFit: 'contain',
  pointerEvents: 'none',
  filter: 'drop-shadow(0 0.6rem 0.8rem rgba(104, 70, 43, 0.14))',
})

export const selectedCharacter = style({
  animationName: characterBounce,
  animationDuration: '0.36s',
  animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
})

export const text = style({
  ...themeVars.fontStyles.body_28eb,
  width: '100%',
  textAlign: 'center',
  wordBreak: 'keep-all',
  color: themeVars.color.brown200,
})

export const arrowBtn = recipe({
  base: {
    position: 'absolute',
    bottom: '1.6rem',
    right: '1.6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '4.4rem',
    height: '4.4rem',
    borderRadius: '50%',
    border: 'none',
    color: themeVars.color.white,
    fontSize: '4.4rem',
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
