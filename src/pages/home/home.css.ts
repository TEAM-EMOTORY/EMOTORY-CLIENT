import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const bgcolor = style({
  backgroundColor: themeVars.color.brown100,
})

export const fontstyle = style({
  ...themeVars.fontStyles.body_60eb,
})
