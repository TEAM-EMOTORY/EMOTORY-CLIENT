import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const page = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  overflowY: 'auto',
  color: themeVars.color.brown200,
})

export const statusMessage = style({
  ...themeVars.fontStyles.body_23eb,
  color: themeVars.color.navy200,
})

export const wrapper = style({
  position: 'relative',
  width: '100%',
  maxWidth: '104rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 'clamp(3rem, 3.5dvh, 4rem)',
  padding: '2rem',
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  filter:
    'drop-shadow(0 0 6px #fff) drop-shadow(0 0 24px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 48px rgba(255, 255, 255, 0.4))',
})

export const title = style({
  ...themeVars.fontStyles.body_44eb,
  fontSize: 'clamp(3rem, 4dvh, 4.4rem)',
  display: 'flex',
  gap: '1.2rem',
})

export const star = style({
  color: themeVars.color.primary500,
})

export const description = style({
  ...themeVars.fontStyles.sub_18r,
})

export const mainCards = style({
  display: 'flex',
  gap: '2rem',
  alignItems: 'stretch',
})

export const storyCard = style({
  flex: 5,
})

export const emotionCard = style({
  flex: 4,
})

export const tipsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1.2rem',
})

export const bottomNav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem',
})

export const ctaButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  height: '6rem',
  padding: '0 4rem',
  backgroundColor: themeVars.color.primary500,
  border: `0.1rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  ...themeVars.fontStyles.body_23eb,
  color: themeVars.color.white,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  boxShadow: 'inset 0px 3px 6px rgba(255, 255, 255, 0.41), inset 0px -3px 5px rgba(0, 0, 0, 0.08)',
})
