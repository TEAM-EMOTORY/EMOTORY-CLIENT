import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

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
  objectPosition: 'center',
  backgroundColor: themeVars.color.primary100,
  border: `0.15rem solid ${themeVars.color.primary300}`,
})

export const childName = style({
  ...themeVars.fontStyles.body_36eb,
  marginBottom: 'clamp(1.2rem, 2dvh, 2.8rem)',
  color: themeVars.color.brown200,
})

export const profileMessage = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  width: '100%',
  padding: 'clamp(1rem, 1.5dvh, 1.8rem)',
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '2rem',
  backgroundColor: 'rgba(255, 249, 240, 0.9)',
  ...themeVars.fontStyles.sub_18r,
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
