import { style } from '@vanilla-extract/css'
import { themeVars } from '@shared/styles/theme.css'

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
  backgroundImage: "url('/home-bg.webp')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

export const storyButtonWrapper = style({
  position: 'absolute',
  left: '4.5rem',
  bottom: '4.0rem',
  width: '24.0rem',
  height: '9.5rem',
  borderRadius: '5.0rem',
  backgroundColor: '#FEF1D3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const storyButtonInner = style({
  width: '22.5rem',
  height: '8.5rem',
  borderRadius: '5.0rem',
  border: '0.2rem dashed #E7C5AB',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
})

export const storyButtonText = style({
  color: themeVars.color.brown200,
  textAlign: 'center',
  fontFamily: '"Tmoney RoundWind", sans-serif',
  fontSize: '2.5rem',
  fontWeight: 800,
  lineHeight: '3.5rem',
})

export const menuGroup = style({
  position: 'absolute',
  right: '4.5rem',
  bottom: '4.0rem',
  display: 'flex',
  gap: '1.5rem',
})

export const menuButton = style({
  width: '7.5rem',
  height: '9.5rem',
  backgroundColor: '#D9D9D9',
  borderTopLeftRadius: '5.0rem',
  borderTopRightRadius: '5.0rem',
  borderBottomLeftRadius: '1.5rem',
  borderBottomRightRadius: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  border: 'none',
  padding: 0,
})

export const menuIconPlaceholder = style({
  width: '6.0rem',
  height: '6.0rem',
  borderRadius: '5.0rem',
  backgroundColor: '#FF3E3E',
})

export const menuLabel = style({
  color: '#539DF7',
  fontFamily: '"Tmoney RoundWind", sans-serif',
  fontSize: '1.0rem',
  lineHeight: '2.0rem',
  whiteSpace: 'nowrap',
})
