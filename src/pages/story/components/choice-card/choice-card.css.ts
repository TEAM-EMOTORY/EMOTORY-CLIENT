import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const card = style({
  position: 'relative',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  minHeight: '14rem',
  border: `0.15rem solid ${themeVars.color.primary200}`,
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 2px 12px rgba(248, 225, 189, 0.5)',
})

export const text = style({
  ...themeVars.fontStyles.sub_16r,
  color: themeVars.color.brown200,
})

export const arrowBtn = style({
  position: 'absolute',
  bottom: '1.2rem',
  right: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3.2rem',
  height: '3.2rem',
  backgroundColor: themeVars.color.navy100,
  borderRadius: '50%',
  color: themeVars.color.white,
  fontSize: '3.5rem',
  cursor: 'pointer',
  paddingBottom: '0.2rem',
})
