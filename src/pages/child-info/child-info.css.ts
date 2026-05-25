import { themeVars } from '@shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const page = style({
  display: 'flex',
  gap: '8rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  color: themeVars.color.brown200,
})

export const title = style({
  display: 'flex',
  flexDirection: 'column',
  ...themeVars.fontStyles.body_44eb,
  alignItems: 'center',
  filter:
    'drop-shadow(0 0 6px #fff) drop-shadow(0 0 24px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 48px rgba(255, 255, 255, 0.4))',
})

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
})

export const titleStar = style({
  padding: '1rem',
  color: themeVars.color.primary500,
  fontSize: themeVars.fontSize[28],
})

export const pointText = style({
  color: themeVars.color.orange,
})

export const subtitle = style({
  ...themeVars.fontStyles.sub_18r,
})

export const container = style({
  display: 'flex',
  gap: '5rem',
})

export const formSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
})

export const nameLabel = style({ ...themeVars.fontStyles.body_21eb })

export const notice = style({
  ...themeVars.fontStyles.sub_18r,
  display: 'flex',
  alignItems: 'center',
})
