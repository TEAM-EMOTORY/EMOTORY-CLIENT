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

export const graphCard = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: 0,
  padding: 'clamp(4rem, 6dvh, 7rem) clamp(1.6rem, 2.5vw, 3.2rem) clamp(1.2rem, 2dvh, 2.4rem)',
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
  whiteSpace: 'nowrap',
  justifyContent: 'center',
  padding: '1.2rem 3.2rem',
  transform: 'translateX(-50%)',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  backgroundColor: 'rgba(255, 253, 248, 0.96)',
  ...themeVars.fontStyles.body_21eb,
  color: themeVars.color.primary400,
  boxShadow: '0 0.8rem 2rem rgba(104, 70, 43, 0.08)',
})

export const graphQuestion = style({
  ...themeVars.fontStyles.sub_18r,
  marginBottom: 'clamp(0.8rem, 1.5dvh, 2rem)',
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
  top: 'clamp(4rem, 7dvh, 7rem)',
  bottom: 'clamp(8rem, 12dvh, 10rem)',
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
  ...themeVars.fontStyles.body_28eb,
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

export const countBubbleValue = style({ lineHeight: 1 })

export const countBubbleUnit = style({
  ...themeVars.fontStyles.body_21eb,
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

export const joyBar = style({ background: 'linear-gradient(180deg, #FFD95B 0%, #FFC528 100%)' })
export const sadBar = style({ background: 'linear-gradient(180deg, #7EAFE8 0%, #4B82C4 100%)' })
export const angryBar = style({ background: 'linear-gradient(180deg, #FF8987 0%, #F2605D 100%)' })

export const emotionIcon = style({
  width: 'clamp(3.4rem, 34%, 4.8rem)',
  aspectRatio: '1',
  marginTop: 'clamp(0.8rem, 1.5dvh, 1.6rem)',
  objectFit: 'contain',
})

export const emotionLabel = style({
  ...themeVars.fontStyles.body_18eb,
  marginTop: '0.4rem',
  color: themeVars.color.brown200,
})
