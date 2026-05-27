import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1.4rem',
})

export const item = style({
  backgroundColor: themeVars.color.white,
  border: `0.15rem solid ${themeVars.color.primary200}`,
  borderRadius: '16px',
  padding: '1.6rem',
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
  justifyContent: 'center',
  gap: '0.6rem',
  padding: '0.8rem',
})

export const tipTitle = style({
  ...themeVars.fontStyles.body_21eb,
  color: themeVars.color.navy200,
})

export const tipDesc = style({
  ...themeVars.fontStyles.body_20eb,
  lineHeight: 1.55,
  wordBreak: 'keep-all',
  color: themeVars.color.navy200,
})
