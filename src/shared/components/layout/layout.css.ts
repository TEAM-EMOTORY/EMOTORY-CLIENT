import { style } from '@vanilla-extract/css'
import bgImage from '@shared/assets/background-img/bg.webp'

export const layout = style({
  width: '100%',
  height: '100dvh',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})
