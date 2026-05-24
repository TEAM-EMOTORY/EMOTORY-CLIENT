import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const page = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  color: themeVars.color.brown200,
})

export const statusMessage = style({
  ...themeVars.fontStyles.body_20eb,
  color: themeVars.color.navy200,
})

export const wrapper = style({
  position: 'relative',
  width: '100%',
  maxWidth: '96rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.5rem',
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  filter:
    'drop-shadow(0 0 6px #fff) drop-shadow(0 0 24px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 48px rgba(255, 255, 255, 0.4))',
})

export const title = style({
  ...themeVars.fontStyles.body_40eb,
  display: 'flex',
  gap: '1.2rem',
})

export const star = style({
  color: themeVars.color.primary500,
})

export const description = style({
  ...themeVars.fontStyles.sub_16r,
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
  ...themeVars.fontStyles.body_20eb,
  color: themeVars.color.white,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  boxShadow: 'inset 0px 3px 6px rgba(255, 255, 255, 0.41), inset 0px -3px 5px rgba(0, 0, 0, 0.08)',
})
