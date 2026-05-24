import { style } from '@vanilla-extract/css'
import bgImage from '@shared/assets/background-img/bg.webp'
import storyBgImage from '@shared/assets/background-img/storyBg.webp'

const layoutBase = style({
  width: '100%',
  height: '100dvh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

export const layout = style([
  layoutBase,
  { backgroundImage: `url(${bgImage})` },
])

export const storyLayout = style([
  layoutBase,
  { backgroundImage: `url(${storyBgImage})` },
])
