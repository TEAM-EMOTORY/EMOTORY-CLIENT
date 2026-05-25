import { keyframes, style } from '@vanilla-extract/css'

const sunGlow = keyframes({
  '0%, 100%': {
    boxShadow:
      '0 0 0 1.4rem rgba(252, 201, 68, 0.18), 0 0 4.8rem rgba(245, 169, 58, 0.72)',
  },
  '50%': {
    boxShadow:
      '0 0 0 2rem rgba(252, 201, 68, 0.24), 0 0 7.2rem rgba(245, 169, 58, 0.92)',
  },
})

const cloudDrift = keyframes({
  '0%': { transform: 'translateX(115vw)' },
  '100%': { transform: 'translateX(-35vw)' },
})

const cloudDriftSmall = keyframes({
  '0%': { transform: 'translateX(112vw) scale(0.78)' },
  '100%': { transform: 'translateX(-35vw) scale(0.78)' },
})

const sparkleTwinkle = keyframes({
  '0%, 100%': { opacity: 0.25, transform: 'scale(0.82) rotate(0deg)' },
  '50%': { opacity: 1, transform: 'scale(1.16) rotate(18deg)' },
})

export const scene = style({
  position: 'relative',
  flex: 1,
  minWidth: 0,
  height: '100%',
  borderRadius: '40px',
  overflow: 'hidden',
  background: 'linear-gradient(180deg, #8EC5FF 0%, #CFEAFF 58%, #FFF9F0 100%)',
  boxShadow:
    'inset 0 6px 24px rgba(255, 255, 255, 0.32), inset 0 -16px 32px rgba(104, 70, 43, 0.12)',
})

export const skyLayer = style({
  position: 'absolute',
  inset: 0,
  transition: 'opacity 0.8s ease',
})

export const dawnSky = style([
  skyLayer,
  {
    background: 'linear-gradient(180deg, #F8B879 0%, #FFE4B5 54%, #FFF9F0 100%)',
  },
])

export const daySky = style([
  skyLayer,
  {
    background: 'linear-gradient(180deg, #8EC5FF 0%, #CFEAFF 58%, #FFF9F0 100%)',
  },
])

export const duskSky = style([
  skyLayer,
  {
    background: 'linear-gradient(180deg, #334C8F 0%, #F19A72 58%, #FFE4B5 100%)',
  },
])

export const nightSky = style([
  skyLayer,
  {
    background: 'linear-gradient(180deg, #151B4F 0%, #364277 58%, #8D6D80 100%)',
  },
])

export const sunPath = style({
  position: 'absolute',
  left: '10%',
  right: '10%',
  bottom: '16%',
  height: '64%',
  borderTop: '0.2rem dashed rgba(255, 255, 255, 0.42)',
  borderRadius: '50% 50% 0 0',
})

export const sun = style({
  position: 'absolute',
  width: '8.4rem',
  height: '8.4rem',
  borderRadius: '50%',
  backgroundColor: '#FCC944',
  transform: 'translate(-50%, 50%)',
  boxShadow: '0 0 0 1.4rem rgba(252, 201, 68, 0.18), 0 0 4.8rem rgba(245, 169, 58, 0.72)',
  transition: 'left 0.45s ease, bottom 0.45s ease, opacity 0.45s ease',
  animationName: sunGlow,
  animationDuration: '2.4s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
})

export const moon = style({
  position: 'absolute',
  width: '8.4rem',
  height: '8.4rem',
  borderRadius: '50%',
  backgroundColor: '#F7F1D5',
  transform: 'translate(-50%, 50%)',
  boxShadow: '0 0 3.2rem rgba(247, 241, 213, 0.72)',
  transition: 'left 0.45s ease, bottom 0.45s ease, opacity 0.45s ease',
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      top: '-0.4rem',
      right: '-0.8rem',
      width: '8.4rem',
      height: '8.4rem',
      borderRadius: '50%',
      backgroundColor: '#151B4F',
      transform: 'translateX(0)',
    },
  },
})

export const cloud = style({
  position: 'absolute',
  left: 0,
  width: '11rem',
  height: '3.6rem',
  borderRadius: '5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.72)',
  boxShadow: '2.4rem -1.4rem 0 rgba(255, 255, 255, 0.72), 5.2rem 0 0 rgba(255, 255, 255, 0.72)',
})

export const cloudLeft = style([
  cloud,
  {
    top: '22%',
    animationName: cloudDrift,
    animationDuration: '16s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
])

export const cloudRight = style([
  cloud,
  {
    top: '32%',
    animationName: cloudDriftSmall,
    animationDuration: '21s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationDelay: '-9s',
  },
])

export const ground = style({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '18%',
  backgroundColor: 'rgba(104, 70, 43, 0.22)',
  borderTop: '0.2rem solid rgba(255, 255, 255, 0.28)',
})

export const sparkle = style({
  position: 'absolute',
  width: '1.8rem',
  height: '1.8rem',
  backgroundColor: 'rgba(255, 255, 255, 0.86)',
  clipPath:
    'polygon(50% 0%, 61% 35%, 100% 50%, 61% 65%, 50% 100%, 39% 65%, 0% 50%, 39% 35%)',
  filter: 'drop-shadow(0 0 0.8rem rgba(255, 255, 255, 0.9))',
  animationName: sparkleTwinkle,
  animationDuration: '2.2s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
})

export const sparkleOne = style([
  sparkle,
  {
    left: '20%',
    top: '16%',
  },
])

export const sparkleTwo = style([
  sparkle,
  {
    right: '20%',
    top: '18%',
    animationDelay: '0.7s',
  },
])

export const sparkleThree = style([
  sparkle,
  {
    left: '54%',
    top: '30%',
    width: '1.4rem',
    height: '1.4rem',
    animationDelay: '1.2s',
  },
])
