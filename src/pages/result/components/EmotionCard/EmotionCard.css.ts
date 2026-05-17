import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const headerStar = style({
  color: themeVars.color.primary500,
})

export const body = style({
  display: 'flex',
  gap: '2rem',
  alignItems: 'flex-start',
})

export const characterBlock = style({
  flexShrink: 0,
  position: 'relative',
  width: '15rem',
})

export const characterBox = style({
  width: '100%',
  height: '18rem',
  backgroundColor: themeVars.color.primary200,
  borderRadius: '1.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
})

export const characterImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const characterPlaceholder = style({
  fontSize: '6rem',
  lineHeight: '1',
})

export const bubble = style({
  position: 'absolute',
  top: '-1.2rem',
  right: '-1.2rem',
  width: '5rem',
  height: '5rem',
  backgroundColor: themeVars.color.primary100,
  border: `0.2rem solid ${themeVars.color.primary300}`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2.4rem',
  lineHeight: '1',
})

export const infoBlock = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const emotionTitle = style({
  ...themeVars.fontStyles.body_32eb,
  color: themeVars.color.navy200,
})

export const description = style({
  fontSize: themeVars.fontSize[18],
  fontWeight: themeVars.fontWeight.regular,
  lineHeight: themeVars.lineHeight[150],
  color: themeVars.color.navy200,
})

export const tags = style({
  display: 'flex',
  gap: '0.8rem',
  flexWrap: 'wrap',
})

export const tag = style({
  ...themeVars.fontStyles.body_16eb,
  color: themeVars.color.navy200,
  backgroundColor: themeVars.color.primary200,
  border: `0.15rem solid ${themeVars.color.primary300}`,
  borderRadius: '5rem',
  padding: '0.4rem 1.4rem',
})