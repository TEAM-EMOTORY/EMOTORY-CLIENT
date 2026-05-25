import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const headerStar = style({
  color: themeVars.color.primary500,
})

export const cardFlex = style({
  display: 'flex',
  flexDirection: 'column',
})

export const infoBlock = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '1rem 0',
})

export const emotionTitle = style({
  ...themeVars.fontStyles.body_36eb,
  color: themeVars.color.primary400,
  textAlign: 'center',
})

export const tags = style({
  display: 'flex',
  gap: '0.8rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

export const tag = style({
  ...themeVars.fontStyles.sub_14r,
  color: themeVars.color.orange,
  backgroundColor: themeVars.color.primary200,
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  padding: '0.4rem 1.4rem',
})
