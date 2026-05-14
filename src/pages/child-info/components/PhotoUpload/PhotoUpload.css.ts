import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const uploadBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.2rem',
  width: '100%',
  aspectRatio: '1 / 1',
  backgroundColor: themeVars.color.primary100,
  border: `0.25rem dashed ${themeVars.color.brown100}`,
  borderRadius: '2rem',
  cursor: 'pointer',
  padding: '2.4rem',
  transition: 'border-color 0.15s',
  selectors: {
    '&:hover': {
      borderColor: themeVars.color.amber,
    },
  },
})

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '7.2rem',
  height: '7.2rem',
  backgroundColor: themeVars.color.primary300,
  borderRadius: '1.6rem',
  overflow: 'hidden',
})

export const iconPlaceholder = style({
  fontSize: '3.6rem',
  lineHeight: 1,
})

export const uploadTitle = style({
  ...themeVars.fontStyles.body_18eb,
  color: themeVars.color.navy200,
})

export const uploadDesc = style({
  fontSize: themeVars.fontSize[16],
  fontWeight: themeVars.fontWeight.regular,
  lineHeight: themeVars.lineHeight[150],
  color: themeVars.color.gray,
  textAlign: 'center',
})