import { style } from '@vanilla-extract/css'
import { themeVars } from '@shared/styles/theme.css'
import { fontStyles } from '@shared/styles/tokens/font-style'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100dvh',
})

export const whiteBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3.5rem',
  width: '62rem',
  height: '49rem',
  borderRadius: '4rem',
  backgroundColor: themeVars.color.primary100,
})

export const title = style({
  color: themeVars.color.brown200,
  textAlign: 'center',
  ...fontStyles.body_36eb,
})

export const infoSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '50rem',
  height: '15.5rem',
  padding: '2.5rem 4rem 2.5rem 3.5rem',
  borderRadius: '1.5rem',
  backgroundColor: themeVars.color.primary200,
})

export const infoText = style({
  color: themeVars.color.brown200,
  fontSize: themeVars.fontSize[18],
  fontWeight: 400,
  lineHeight: '3.5rem',
  textAlign: 'left',
})

export const checkboxWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  cursor: 'pointer',
})

export const checkboxInput = style({
  width: '3rem',
  height: '3rem',
  border: '1px solid #735656',
  borderRadius: '0.5rem',
  backgroundColor: '#D9D9D9',
  cursor: 'pointer',
})

export const checkboxLabel = style({
  color: themeVars.color.brown200,
  fontSize: themeVars.fontSize[18],
  fontWeight: 400,
  lineHeight: '3.5rem',
})

export const buttonGroup = style({
  display: 'flex',
  gap: '1.5rem',
})
