import { style } from '@vanilla-extract/css'
import { themeVars } from '@shared/styles/theme.css'

export const wrapper = style({
  marginTop: '10rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

export const titleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  textAlign: 'center',
})

export const mainTitle = style({
  ...themeVars.fontStyles.body_40eb,
  color: themeVars.color.navy100,
})

export const pointWord = style({
  color: themeVars.color.orange,
})

export const subTitle = style({
  ...themeVars.fontStyles.body_20eb,
  color: themeVars.color.brown200,
})

export const cardSection = style({
  display: 'flex',
  gap: '1rem',
  marginTop: '5rem',
})

const emotionCardBase = style({
  width: '18.0rem',
  aspectRatio: '14 / 20',
  borderRadius: '2.0rem',
  cursor: 'pointer',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  paddingBottom: '1rem',
})

export const labelText = style({
  ...themeVars.fontStyles.body_24eb,
  color: 'inherit',
})

export const emotionCardSad = style([
  emotionCardBase,
  {
    transform: 'rotate(-3deg)',
    backgroundImage: "url('/emotion-select/sad.png')",
    color: themeVars.color.navy100,
  },
])

export const emotionCardJoy = style([
  emotionCardBase,
  {
    transform: 'translateY(-0.5rem)',
    backgroundImage: "url('/emotion-select/joy.png')",
    color: themeVars.color.primary500,
  },
])

export const emotionCardAngry = style([
  emotionCardBase,
  {
    transform: 'rotate(3deg)',
    backgroundImage: "url('/emotion-select/angry.png')",
    color: themeVars.color.orange,
  },
])
