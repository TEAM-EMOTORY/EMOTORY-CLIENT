import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const page = style({
  display: 'flex',
  gap: '8rem',
  flexDirection: 'column',
  padding: '10rem 20rem 0rem 20rem',
  color: themeVars.color.brown200,
})

export const title = style({
  display: 'flex',
  flexDirection: 'column',
  ...themeVars.fontStyles.body_40eb,
  alignItems: 'center',
})

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
})

export const titleStar = style({
  padding: '1rem',
  color: themeVars.color.primary500,
  fontSize: themeVars.fontSize[24],
})

export const pointText = style({
  color: themeVars.color.orange,
})

export const subtitle = style({
  ...themeVars.fontStyles.sub_16r,
})

export const container = style({
  display: 'flex',
  gap: '3.2rem',
})

export const formSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
})

export const nameLabel = style({ ...themeVars.fontStyles.body_18eb })

export const notice = style({
  ...themeVars.fontStyles.sub_12r,
  display: 'flex',
  alignItems: 'center',
})
