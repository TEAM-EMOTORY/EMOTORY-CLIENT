import bgImage from '@shared/assets/background-img/bg.webp'
import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const page = style({
  position: 'relative',
  minHeight: '100vh',
  padding: '6.4rem 7.2rem 4rem',
  overflow: 'hidden',
  color: themeVars.color.brown200,
  backgroundImage: `linear-gradient(rgba(255, 249, 240, 0.42), rgba(255, 249, 240, 0.5)), url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const hero = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3.2rem',
  marginBottom: '3.2rem',
  filter: 'drop-shadow(0 0 8px #fff) drop-shadow(0 0 28px rgba(255, 255, 255, 0.86))',
})

export const star = style({
  color: themeVars.color.primary500,
  fontSize: '3.6rem',
  lineHeight: 1,
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.2rem',
})

export const title = style({
  ...themeVars.fontStyles.body_40eb,
  color: themeVars.color.brown200,
})

export const description = style({
  ...themeVars.fontStyles.body_20eb,
  color: 'rgba(104, 70, 43, 0.72)',
})

export const board = style({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  gridTemplateColumns: '28rem minmax(42rem, 1fr) 32rem',
  gap: '2rem',
  width: '100%',
  maxWidth: '132rem',
  minHeight: '56rem',
  margin: '0 auto',
  padding: '3.2rem',
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
  minHeight: '100%',
  padding: '3.6rem 2.4rem 2rem',
  overflow: 'hidden',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '3rem',
  backgroundColor: 'rgba(255, 255, 255, 0.82)',
  boxShadow: '0 1rem 2.8rem rgba(104, 70, 43, 0.1)',
})

export const profileImage = style({
  width: '16rem',
  height: '16rem',
  marginBottom: '2rem',
  borderRadius: '50%',
  objectFit: 'cover',
  backgroundColor: themeVars.color.primary100,
  border: `0.15rem solid ${themeVars.color.primary300}`,
})

export const childName = style({
  ...themeVars.fontStyles.body_40eb,
  marginBottom: '2.8rem',
  color: themeVars.color.brown200,
})

export const profileMessage = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  width: '100%',
  padding: '1.8rem',
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
  padding: '6rem 3.2rem 2.4rem',
  border: `0.15rem solid ${themeVars.color.primary200}`,
  borderRadius: '2.8rem',
  backgroundColor: 'rgba(255, 255, 255, 0.68)',
})

export const graphBadge = style({
  position: 'absolute',
  top: '-2.6rem',
  left: '50%',
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  minWidth: '28rem',
  justifyContent: 'center',
  padding: '1.4rem 3.2rem',
  transform: 'translateX(-50%)',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  backgroundColor: 'rgba(255, 253, 248, 0.96)',
  ...themeVars.fontStyles.body_20eb,
  color: themeVars.color.primary400,
  boxShadow: '0 0.8rem 2rem rgba(104, 70, 43, 0.08)',
})

export const graphQuestion = style({
  ...themeVars.fontStyles.sub_16r,
  marginBottom: '2rem',
  color: themeVars.color.brown200,
})

export const chart = style({
  position: 'relative',
  flex: 1,
  width: '100%',
  minHeight: '42rem',
  padding: '7rem 2rem 0 4rem',
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
  top: '7rem',
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
  transition: 'height 0.4s ease',
  boxShadow: 'inset 0 0.4rem 1.2rem rgba(255, 255, 255, 0.34)',
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
  minHeight: '100%',
  padding: '2rem',
  border: `0.15rem solid rgba(125, 171, 91, 0.28)`,
  borderRadius: '3rem',
  backgroundColor: 'rgba(255, 253, 240, 0.82)',
})

export const noteTitle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  ...themeVars.fontStyles.body_20eb,
  color: '#5B8A46',
  marginBottom: '2rem',
})

export const noteBody = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  padding: '3.2rem 2.4rem 0',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '2.4rem',
  backgroundColor: 'rgba(255, 255, 255, 0.76)',
  textAlign: 'center',
  ...themeVars.fontStyles.sub_16r,
  lineHeight: 1.9,
})

export const noteHeadline = style({
  ...themeVars.fontStyles.body_24eb,
  color: '#5B8A46',
})

export const noteCharacter = style({
  width: '14rem',
  marginTop: 'auto',
})

export const bottomNav = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.4rem',
  marginTop: '3.2rem',
})

export const subButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '18rem',
  height: '7rem',
  padding: '0 2.8rem',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.88)',
  ...themeVars.fontStyles.body_18eb,
  color: themeVars.color.brown200,
  cursor: 'pointer',
  boxShadow: '0 0.8rem 2rem rgba(104, 70, 43, 0.1)',
})

export const primaryButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  minWidth: '38rem',
  height: '8rem',
  padding: '0 4rem',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  backgroundColor: themeVars.color.primary500,
  ...themeVars.fontStyles.body_24eb,
  color: themeVars.color.white,
  cursor: 'pointer',
  boxShadow:
    'inset 0 0.4rem 0.8rem rgba(255, 255, 255, 0.44), 0 1rem 2.8rem rgba(245, 169, 58, 0.3)',
})

export const cornerCharacter = style({
  position: 'absolute',
  right: '4rem',
  bottom: '1.6rem',
  width: '16rem',
  transform: 'rotate(-4deg)',
})
