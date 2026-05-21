import { style, globalStyle } from '@vanilla-extract/css'
import { themeVars } from '@shared/styles/theme.css'
import { fontStyles } from '@shared/styles/tokens/font-style'

export const wrapper = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100dvh',
  backgroundColor: themeVars.color.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  zIndex: 1,
})

export const bgContainer = style({
  position: 'relative',
  height: '100dvh',
  aspectRatio: '1133 / 744',
  width: 'auto',
  backgroundColor: themeVars.color.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: '6.5rem',
})

export const titleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  textAlign: 'center',
})

export const mainTitle = style([
  fontStyles.body_32eb,
  {
    color: themeVars.color.navy100,
    textAlign: 'center',
    textShadow: '0 0.4rem 0.4rem rgba(255, 255, 255, 0.25)',
    fontSize: '4.0rem',
    lineHeight: '150%',
    letterSpacing: '-0.04rem',
  },
])

export const pointWord = style([
  fontStyles.body_32eb,
  {
    color: themeVars.color.orange,
    fontSize: '4.0rem',
    lineHeight: '150%',
    letterSpacing: '-0.04rem',
  },
])

export const subTitle = style([
  fontStyles.body_32eb,
  {
    color: themeVars.color.brown200,
    fontSize: '2.0rem',
    lineHeight: '150%',
    letterSpacing: '-0.02rem',
  },
])

export const cardSection = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: '2.0rem',
  marginTop: '-0.5rem',
  marginBottom: '4.0rem',
  height: '35.0rem',
})

export const emotionCard = style({
  width: '21.0rem',
  aspectRatio: '14 / 20',

  borderRadius: '2.0rem',
  border: 'none !important',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: '2.0rem',
  transformOrigin: 'bottom center',
  backgroundColor: 'transparent !important',
  outline: 'none !important',
  WebkitTapHighlightColor: 'transparent !important',
  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',

  selectors: {
    '&:focus': { outline: 'none !important' },
    '&:active': { outline: 'none !important' },
    '&:focus-visible': { outline: 'none !important' },
  },
})

globalStyle(`${cardSection} > *:nth-child(1)`, {
  transform: 'rotate(-10deg) translateY(1.0rem)',
  backgroundImage: "url('/emotion-select/joy.png')",
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

globalStyle(`${cardSection} > *:nth-child(1):focus`, {
  boxShadow: '0 0 2.5rem 0.8rem rgba(252, 201, 68, 0.9) !important',
})
globalStyle(`${cardSection} > *:nth-child(1):active`, {
  boxShadow: '0 0 2.5rem 0.8rem rgba(252, 201, 68, 0.9) !important',
})
globalStyle(`${cardSection} > *:nth-child(1):focus-visible`, {
  boxShadow: '0 0 2.5rem 0.8rem rgba(252, 201, 68, 0.9) !important',
})

globalStyle(`${cardSection} > *:nth-child(2)`, {
  transform: 'rotate(0deg) translateY(-0.5rem)',
  backgroundImage: "url('/emotion-select/sad.png')",
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

globalStyle(`${cardSection} > *:nth-child(2):focus`, {
  boxShadow: '0 0 2.5rem 0.8rem rgba(56, 189, 248, 0.9) !important',
})
globalStyle(`${cardSection} > *:nth-child(2):active`, {
  boxShadow: '0 0 2.5rem 0.8rem rgba(56, 189, 248, 0.9) !important',
})
globalStyle(`${cardSection} > *:nth-child(2):focus-visible`, {
  boxShadow: '0 0 2.5rem 0.8rem rgba(56, 189, 248, 0.9) !important',
})

globalStyle(`${cardSection} > *:nth-child(3)`, {
  transform: 'rotate(10deg) translateY(1.0rem)',
  backgroundImage: "url('/emotion-select/angry.png')",
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

globalStyle(`${cardSection} > *:nth-child(3):focus`, {
  boxShadow: '0 0 2.5rem 0.8rem rgba(239, 68, 68, 0.9) !important',
})
globalStyle(`${cardSection} > *:nth-child(3):active`, {
  boxShadow: '0 0 2.5rem 0.8rem rgba(239, 68, 68, 0.9) !important',
})
globalStyle(`${cardSection} > *:nth-child(3):focus-visible`, {
  boxShadow: '0 0 2.5rem 0.8rem rgba(239, 68, 68, 0.9) !important',
})

export const labelText = style([
  fontStyles.body_32eb,
  {
    color: themeVars.color.brown200,
    fontSize: '2.0rem',
    lineHeight: '50%',
    letterSpacing: '-0.02rem',
  },
])

export const submitButtonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '35.5rem',
  height: '10.5rem',
})

globalStyle(
  `${submitButtonWrapper} button`,
  Object.assign({}, fontStyles.body_32eb, {
    width: '35rem !important',
    height: '10rem !important',
    borderRadius: '5.0rem !important',
    fontSize: '3.0rem !important',
    lineHeight: '150% !important',
    letterSpacing: '-0.032rem !important',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
  }),
)
