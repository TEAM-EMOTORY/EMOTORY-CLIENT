import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1.2rem',
})

export const item = style({
  backgroundColor: themeVars.color.white,
  border: `0.15rem solid ${themeVars.color.primary200}`,
  borderRadius: '16px',
  padding: '1.2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
})

export const itemImage = style({
  flexShrink: 0,
  width: '6rem',
  height: '6rem',
  objectFit: 'cover',
  borderRadius: '12px',
})

export const content = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
})

export const tipTitle = style({
  ...themeVars.fontStyles.body_12eb,
  color: themeVars.color.navy200,
})

export const tipDesc = style({
  fontSize: themeVars.fontSize[12],
  fontWeight: themeVars.fontWeight.regular,
  lineHeight: themeVars.lineHeight[150],
  color: themeVars.color.navy200,
})
