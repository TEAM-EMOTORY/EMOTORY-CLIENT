import { style } from '@vanilla-extract/css'
import { themeVars } from '@shared/styles/theme.css'

import angryImg from '@shared/assets/emotion-img/angry.webp'
import joyImg from '@shared/assets/emotion-img/joy.webp'
import sadImg from '@shared/assets/emotion-img/sad.webp'

export const wrapper = style({
  paddingTop: '10rem',
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
  filter:
    'drop-shadow(0 0 6px #fff) drop-shadow(0 0 24px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 48px rgba(255, 255, 255, 0.4))',
})

export const mainTitle = style({
  ...themeVars.fontStyles.body_44eb,
  color: themeVars.color.navy100,
  WebkitTextStroke: '0.5rem white',
  paintOrder: 'stroke fill',
})

export const pointWord = style({
  color: themeVars.color.orange,
})

export const subTitle = style({
  ...themeVars.fontStyles.body_23eb,
  color: themeVars.color.brown200,
})

export const cardSection = style({
  display: 'flex',
  gap: '1rem',
  marginTop: '5rem',
})

const emotionCardBase = style({
  width: '19rem',
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
  ...themeVars.fontStyles.body_28eb,
  color: 'inherit',
})

export const emotionCardSad = style([
  emotionCardBase,
  {
    transform: 'rotate(-3deg)',
    backgroundImage: `url(${sadImg})`,
    color: themeVars.color.navy100,
  },
])

export const emotionCardJoy = style([
  emotionCardBase,
  {
    transform: 'translateY(-0.5rem)',
    backgroundImage: `url(${joyImg})`,
    color: themeVars.color.primary500,
  },
])

export const emotionCardAngry = style([
  emotionCardBase,
  {
    transform: 'rotate(3deg)',
    backgroundImage: `url(${angryImg})`,
    color: themeVars.color.orange,
  },
])
