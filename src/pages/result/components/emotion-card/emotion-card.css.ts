import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const headerStar = style({
  color: themeVars.color.primary500,
})

export const body = style({
  display: 'flex',
  gap: '2rem',
})

export const characterImage = style({
  width: '16rem',
  height: '16rem',
  objectFit: 'cover',
  borderRadius: '16px',
})

export const infoBlock = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
})

export const emotionTitle = style({
  ...themeVars.fontStyles.body_24eb,
  color: themeVars.color.primary400,
})

export const summary = style({
  ...themeVars.fontStyles.sub_16r,
})

export const tags = style({
  display: 'flex',
  gap: '0.8rem',
  flexWrap: 'wrap',
})

export const tag = style({
  ...themeVars.fontStyles.sub_12r,
  color: themeVars.color.orange,
  backgroundColor: themeVars.color.primary200,
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  padding: '0.4rem 1.4rem',
})
