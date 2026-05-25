import bgImage from '@shared/assets/background-img/bg.webp'
import { themeVars } from '@shared/styles/theme.css'
import { style, keyframes } from '@vanilla-extract/css'

const barGrow = keyframes({
  '0%': { transform: 'scaleY(0)' },
  '70%': { transform: 'scaleY(1.06)' },
  '100%': { transform: 'scaleY(1)' },
})

const fadeSlideUp = keyframes({
  '0%': { opacity: '0', transform: 'translateX(-50%) translateY(12px)' },
  '100%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
})

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

export const starLeft = style({
  ...starBase,
  animationDelay: '0s, 0.7s',
})

export const starRight = style({
  ...starBase,
  animationDelay: '0.15s, 0.85s',
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'clamp(0.6rem, 1vh, 1.2rem)',
})

export const title = style({
  ...themeVars.fontStyles.body_32eb,
  color: themeVars.color.brown200,
})

export const description = style({
  ...themeVars.fontStyles.body_16eb,
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

export const profileCard = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: 0,
  padding: 'clamp(1.6rem, 2.5vh, 3.6rem) clamp(1.2rem, 1.8vw, 2.4rem) 2rem',
  overflow: 'hidden',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '3rem',
  backgroundColor: 'rgba(255, 255, 255, 0.82)',
  boxShadow: '0 1rem 2.8rem rgba(104, 70, 43, 0.1)',
})

export const profileImage = style({
  width: 'clamp(8rem, 12vh, 16rem)',
  height: 'clamp(8rem, 12vh, 16rem)',
  marginBottom: 'clamp(1rem, 1.5vh, 2rem)',
  borderRadius: '50%',
  objectFit: 'cover',
  backgroundColor: themeVars.color.primary100,
  border: `0.15rem solid ${themeVars.color.primary300}`,
})

export const childName = style({
  ...themeVars.fontStyles.body_32eb,
  marginBottom: 'clamp(1.2rem, 2vh, 2.8rem)',
  color: themeVars.color.brown200,
})

export const profileMessage = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  width: '100%',
  padding: 'clamp(1rem, 1.5vh, 1.8rem)',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '2rem',
  backgroundColor: 'rgba(255, 249, 240, 0.9)',
  ...themeVars.fontStyles.sub_16r,
  lineHeight: 1.7,
})

export const flowerBed = style({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '8rem',
  background:
    'radial-gradient(circle at 22% 56%, #FBB7C3 0 0.8rem, transparent 0.9rem), radial-gradient(circle at 35% 70%, #FCC944 0 0.7rem, transparent 0.8rem), radial-gradient(circle at 72% 60%, #FBB7C3 0 0.8rem, transparent 0.9rem), linear-gradient(180deg, transparent 0%, rgba(125, 171, 91, 0.28) 100%)',
})

export const graphCard = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: 0,
  padding: 'clamp(3rem, 5vh, 6rem) clamp(1.6rem, 2.5vw, 3.2rem) clamp(1.2rem, 2vh, 2.4rem)',
  border: `0.15rem solid ${themeVars.color.primary200}`,
  borderRadius: '2.8rem',
  backgroundColor: 'rgba(255, 255, 255, 0.68)',
})

export const graphBadge = style({
  position: 'absolute',
  top: '-2.2rem',
  left: '50%',
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  minWidth: '24rem',
  justifyContent: 'center',
  padding: '1.2rem 3.2rem',
  transform: 'translateX(-50%)',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  backgroundColor: 'rgba(255, 253, 248, 0.96)',
  ...themeVars.fontStyles.body_18eb,
  color: themeVars.color.primary400,
  boxShadow: '0 0.8rem 2rem rgba(104, 70, 43, 0.08)',
})

export const graphQuestion = style({
  ...themeVars.fontStyles.sub_16r,
  marginBottom: 'clamp(0.8rem, 1.5vh, 2rem)',
  color: themeVars.color.brown200,
})

export const chart = style({
  position: 'relative',
  flex: 1,
  width: '100%',
  minHeight: 0,
  padding: 'clamp(4rem, 7vh, 7rem) 2rem 0 4rem',
})

export const yAxis = style({
  position: 'absolute',
  left: '3.2rem',
  top: '8rem',
  bottom: '8.8rem',
  width: '0.2rem',
  background:
    'linear-gradient(180deg, rgba(248, 229, 205, 0.2), rgba(248, 229, 205, 1), rgba(248, 229, 205, 0.2))',
})

export const bars = style({
  position: 'absolute',
  left: '6rem',
  right: '2rem',
  bottom: 0,
  top: 'clamp(4rem, 7vh, 7rem)',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 'clamp(1.6rem, 5vw, 5.2rem)',
  borderBottom: `0.15rem solid ${themeVars.color.primary300}`,
})

export const barGroup = style({
  position: 'relative',
  display: 'flex',
  height: '100%',
  minWidth: 0,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
})

export const barArea = style({
  position: 'relative',
  width: '100%',
  flex: 1,
  minHeight: 0,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
})

export const countBubble = style({
  position: 'absolute',
  left: '50%',
  zIndex: 4,
  minWidth: 'clamp(4.8rem, 44%, 6.4rem)',
  minHeight: 'clamp(4.4rem, 10%, 5.6rem)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.2rem',
  padding: '0.6rem clamp(0.8rem, 1vw, 1rem)',
  transform: 'translateX(-50%)',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '1.6rem',
  backgroundColor: 'rgba(255, 249, 240, 0.96)',
  ...themeVars.fontStyles.body_24eb,
  fontSize: 'clamp(2rem, 2.2vw, 2.4rem)',
  textAlign: 'center',
  color: themeVars.color.brown200,
  boxShadow: '0 0.6rem 1.6rem rgba(104, 70, 43, 0.08)',
  animationName: fadeSlideUp,
  animationDuration: '0.4s',
  animationTimingFunction: 'ease-out',
  animationFillMode: 'both',
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      left: '50%',
      bottom: '-0.7rem',
      width: '1.2rem',
      height: '1.2rem',
      transform: 'translateX(-50%) rotate(45deg)',
      borderRight: `0.15rem solid ${themeVars.color.primary300}`,
      borderBottom: `0.15rem solid ${themeVars.color.primary300}`,
      backgroundColor: 'rgba(255, 249, 240, 0.96)',
    },
  },
})

export const countBubbleValue = style({
  lineHeight: 1,
})

export const countBubbleUnit = style({
  ...themeVars.fontStyles.body_18eb,
  fontSize: 'clamp(1.5rem, 1.6vw, 1.8rem)',
  lineHeight: 1,
})

export const barCharacterBox = style({
  position: 'absolute',
  left: '50%',
  zIndex: 3,
  width: 'clamp(6.8rem, 68%, 11.2rem)',
  height: 'clamp(6rem, 24%, 9.6rem)',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  filter: 'drop-shadow(0 0.7rem 0.8rem rgba(104, 70, 43, 0.14))',
  animationName: fadeSlideUp,
  animationDuration: '0.4s',
  animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  animationFillMode: 'both',
})

export const barCharacter = style({
  width: 'auto',
  height: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
})

export const bar = style({
  position: 'relative',
  zIndex: 1,
  width: 'clamp(5.6rem, 58%, 9.8rem)',
  minHeight: 'clamp(2.4rem, 7%, 3.2rem)',
  borderRadius: '1.4rem 1.4rem 0 0',
  boxShadow: 'inset 0 0.4rem 1.2rem rgba(255, 255, 255, 0.34)',
  transformOrigin: 'bottom',
  animationName: barGrow,
  animationDuration: '0.6s',
  animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  animationFillMode: 'both',
})

export const joyBar = style({
  background: 'linear-gradient(180deg, #FFD95B 0%, #FFC528 100%)',
})

export const sadBar = style({
  background: 'linear-gradient(180deg, #7EAFE8 0%, #4B82C4 100%)',
})

export const angryBar = style({
  background: 'linear-gradient(180deg, #FF8987 0%, #F2605D 100%)',
})

export const emotionIcon = style({
  width: 'clamp(3.4rem, 34%, 4.8rem)',
  aspectRatio: '1',
  marginTop: '1.6rem',
  objectFit: 'contain',
})

export const emotionLabel = style({
  ...themeVars.fontStyles.body_16eb,
  marginTop: '0.4rem',
  color: themeVars.color.brown200,
})

export const noteCard = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
  padding: 'clamp(1.2rem, 2vh, 2rem)',
  border: `0.15rem solid rgba(125, 171, 91, 0.28)`,
  borderRadius: '3rem',
  backgroundColor: 'rgba(255, 253, 240, 0.82)',
})

export const noteTitle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  ...themeVars.fontStyles.body_18eb,
  color: '#5B8A46',
  marginBottom: 'clamp(1rem, 1.5vh, 2rem)',
})

export const noteBody = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(1rem, 1.5vh, 2rem)',
  padding: 'clamp(1.6rem, 2.5vh, 3.2rem) clamp(1.2rem, 2vw, 2.4rem) 0',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '2.4rem',
  backgroundColor: 'rgba(255, 255, 255, 0.76)',
  textAlign: 'center',
  ...themeVars.fontStyles.sub_16r,
  lineHeight: 1.9,
  overflow: 'hidden',
})

export const noteHeadline = style({
  ...themeVars.fontStyles.body_20eb,
  color: '#5B8A46',
})

export const noteCharacter = style({
  width: 'clamp(8rem, 12vh, 14rem)',
  marginTop: 'auto',
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
  ...themeVars.fontStyles.body_16eb,
  color: themeVars.color.brown200,
  cursor: 'pointer',
  boxShadow: '0 0.8rem 2rem rgba(104, 70, 43, 0.1)',
})

export const primaryButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  minWidth: 'clamp(28rem, 32vw, 38rem)',
  height: 'clamp(5.5rem, 7.5vh, 8rem)',
  padding: '0 4rem',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  backgroundColor: themeVars.color.primary500,
  ...themeVars.fontStyles.body_20eb,
  color: themeVars.color.white,
  cursor: 'pointer',
  boxShadow:
    'inset 0 0.4rem 0.8rem rgba(255, 255, 255, 0.44), 0 1rem 2.8rem rgba(245, 169, 58, 0.3)',
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
