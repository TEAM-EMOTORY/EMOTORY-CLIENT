import { style } from '@vanilla-extract/css'

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
  transition: 'left 0.45s ease, bottom 0.45s ease',
})

export const cloud = style({
  position: 'absolute',
  width: '11rem',
  height: '3.6rem',
  borderRadius: '5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.72)',
  boxShadow: '2.4rem -1.4rem 0 rgba(255, 255, 255, 0.72), 5.2rem 0 0 rgba(255, 255, 255, 0.72)',
})

export const cloudLeft = style([
  cloud,
  {
    left: '12%',
    top: '22%',
  },
])

export const cloudRight = style([
  cloud,
  {
    right: '16%',
    top: '32%',
    transform: 'scale(0.78)',
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
