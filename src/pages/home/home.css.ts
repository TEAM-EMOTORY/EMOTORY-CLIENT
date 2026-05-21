import { style } from '@vanilla-extract/css'
import homeBg from '@shared/assets/background-img/home.webp'

export const bgContainer = style({
  position: 'relative',
  width: '100vw',
  height: '100dvh',
  backgroundImage: `url(${homeBg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
})

export const button = style({
  position: 'absolute',
  width: '25rem',
  height: '12rem',
  bottom: '3rem',
  left: '2rem',
})
