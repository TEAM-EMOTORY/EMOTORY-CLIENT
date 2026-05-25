import { style } from '@vanilla-extract/css'
import { themeVars } from '@shared/styles/theme.css'

import angryImg from '@shared/assets/emotion-img/angry.webp'
import joyImg from '@shared/assets/emotion-img/joy.webp'
import sadImg from '@shared/assets/emotion-img/sad.webp'
import fearImg from '@shared/assets/emotion-img/fear.webp'
import surpriseImg from '@shared/assets/emotion-img/surprise.webp'

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
  alignItems: 'center',
  gap: '0.8rem',
  marginTop: '3.6rem',
})

const emotionCardBase = style({
  width: '22rem',
  aspectRatio: '14 / 20',
  borderRadius: '2.0rem',
  cursor: 'pointer',
  backgroundSize: 'auto 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  paddingBottom: '1rem',
})

export const labelText = style({
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
})

export const emotionCardSad = style([
  emotionCardBase,
  {
    transform: 'rotate(-5deg) translateY(1.2rem)',
    backgroundImage: `url(${sadImg})`,
    color: themeVars.color.navy100,
  },
])

export const emotionCardJoy = style([
  emotionCardBase,
  {
    transform: 'rotate(-2deg) translateY(-0.4rem)',
    backgroundImage: `url(${joyImg})`,
    color: themeVars.color.primary500,
  },
])

export const emotionCardAngry = style([
  emotionCardBase,
  {
    transform: 'rotate(0deg) translateY(-1rem)',
    backgroundImage: `url(${angryImg})`,
    color: themeVars.color.orange,
  },
])

export const emotionCardFear = style([
  emotionCardBase,
  {
    transform: 'rotate(2deg) translateY(-0.4rem)',
    backgroundImage: `url(${fearImg})`,
    color: '#5B8DEF',
  },
])

export const emotionCardSurprise = style([
  emotionCardBase,
  {
    transform: 'rotate(5deg) translateY(1.2rem)',
    backgroundImage: `url(${surpriseImg})`,
    color: '#9B72EF',
  },
])
