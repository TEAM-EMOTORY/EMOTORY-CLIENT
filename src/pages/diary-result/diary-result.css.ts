import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const page = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  color: themeVars.color.brown200,
})

export const wrapper = style({
  width: '100%',
  maxWidth: '76rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.2rem',
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  filter:
    'drop-shadow(0 0 6px #fff) drop-shadow(0 0 24px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 48px rgba(255, 255, 255, 0.4))',
})

export const title = style({
  ...themeVars.fontStyles.body_40eb,
  color: themeVars.color.navy200,
})

export const description = style({
  ...themeVars.fontStyles.sub_16r,
})

export const resultList = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.6rem',
})

export const resultCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.2rem',
  minHeight: '18rem',
  padding: '2.4rem',
  backgroundColor: themeVars.color.white,
  border: `0.15rem solid ${themeVars.color.primary200}`,
  borderRadius: '3rem',
  boxShadow: '0 2px 12px rgba(248, 225, 189, 0.5)',
})

export const emotionLabel = style({
  ...themeVars.fontStyles.body_24eb,
  color: themeVars.color.brown200,
})

export const count = style({
  ...themeVars.fontStyles.body_40eb,
  color: themeVars.color.primary500,
})

export const bottomNav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem',
})
