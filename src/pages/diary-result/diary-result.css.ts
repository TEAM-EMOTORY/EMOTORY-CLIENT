import bgImage from '@shared/assets/background-img/bg.webp'
import { themeVars } from '@shared/styles/theme.css'
import { style, keyframes } from '@vanilla-extract/css'

const slideInUp = keyframes({
  '0%': { transform: 'rotate(-4deg) translateY(120%)' },
  '70%': { transform: 'rotate(-4deg) translateY(-8%)' },
  '100%': { transform: 'rotate(-4deg) translateY(0)' },
})

const starBounceIn = keyframes({
  '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
  '30%': { opacity: '1' },
  '50%': { transform: 'translateY(-20px) rotate(-15deg)' },
  '70%': { transform: 'translateY(-8px) rotate(10deg)' },
  '85%': { transform: 'translateY(-14px) rotate(-8deg)' },
  '100%': { transform: 'translateY(-10px) rotate(0deg)' },
})

const starWobble = keyframes({
  '0%':   { transform: 'translateY(-10px) rotate(-12deg)' },
  '25%':  { transform: 'translateY(-16px) rotate(12deg)' },
  '50%':  { transform: 'translateY(-10px) rotate(-12deg)' },
  '75%':  { transform: 'translateY(-16px) rotate(12deg)' },
  '100%': { transform: 'translateY(-10px) rotate(-12deg)' },
})

export const page = style({
  position: 'relative',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  padding: 'clamp(2rem, 3.5vh, 6.4rem) clamp(2rem, 5vw, 7.2rem) clamp(1.5rem, 2vh, 4rem)',
  overflow: 'hidden',
  color: themeVars.color.brown200,
  backgroundImage: `linear-gradient(rgba(255, 249, 240, 0.42), rgba(255, 249, 240, 0.5)), url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const hero = style({
  position: 'relative',
  zIndex: 1,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(1.2rem, 2.5vw, 3.2rem)',
  marginBottom: 'clamp(1rem, 2vh, 3.2rem)',
  filter: 'drop-shadow(0 0 8px #fff) drop-shadow(0 0 28px rgba(255, 255, 255, 0.86))',
})

const starBase = {
  color: themeVars.color.primary500,
  fontSize: 'clamp(2rem, 3vw, 3.6rem)',
  lineHeight: 1,
  display: 'inline-block',
  animationName: `${starBounceIn}, ${starWobble}`,
  animationDuration: '0.7s, 1.8s',
  animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1), ease-in-out',
  animationFillMode: 'forwards, none',
  animationIterationCount: '1, infinite',
} as const

export const starLeft = style({ ...starBase, animationDelay: '0s, 0.7s' })
export const starRight = style({ ...starBase, animationDelay: '0.15s, 0.85s' })

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'clamp(0.6rem, 1vh, 1.2rem)',
})

export const title = style({
  ...themeVars.fontStyles.body_36eb,
  color: themeVars.color.brown200,
})

export const description = style({
  ...themeVars.fontStyles.body_18eb,
  color: 'rgba(104, 70, 43, 0.72)',
})

export const board = style({
  position: 'relative',
  zIndex: 1,
  flex: 1,
  minHeight: 0,
  display: 'grid',
  gridTemplateColumns: 'clamp(18rem, 22%, 28rem) minmax(0, 1fr) clamp(20rem, 25%, 32rem)',
  gap: 'clamp(1rem, 1.5vw, 2rem)',
  width: '100%',
  maxWidth: '132rem',
  margin: '0 auto',
  padding: 'clamp(1.6rem, 2.5vw, 3.2rem)',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '3.6rem',
  backgroundColor: 'rgba(255, 255, 255, 0.76)',
  boxShadow: '0 1.8rem 4.8rem rgba(104, 70, 43, 0.14), inset 0 0 4.8rem rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(0.4rem)',
})

export const bottomNav = style({
  position: 'relative',
  zIndex: 1,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(1.2rem, 2vw, 2.4rem)',
  marginTop: 'clamp(1rem, 2vh, 3.2rem)',
})

export const subButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 'clamp(14rem, 16vw, 18rem)',
  height: 'clamp(5rem, 7vh, 7rem)',
  padding: '0 2.8rem',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.88)',
  ...themeVars.fontStyles.body_18eb,
  color: themeVars.color.brown200,
  cursor: 'pointer',
  boxShadow: '0 0.8rem 2rem rgba(104, 70, 43, 0.1)',
})

export const cornerCharacter = style({
  position: 'absolute',
  right: '4rem',
  bottom: '1.6rem',
  width: 'clamp(10rem, 12vw, 16rem)',
  zIndex: 10,
  animationName: slideInUp,
  animationDuration: '0.7s',
  animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  animationFillMode: 'both',
  animationDelay: '0.2s',
})
