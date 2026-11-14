import { Outlet } from 'react-router-dom'
import bgImage from '@shared/assets/background-img/bg.webp'
import storyBgImage from '@shared/assets/background-img/storyBg.webp'

const LAYOUT = 'h-dvh w-full bg-cover bg-center bg-no-repeat'

export const Layout = () => (
  <div className={LAYOUT} style={{ backgroundImage: `url(${bgImage})` }}>
    <Outlet />
  </div>
)

export const StoryLayout = () => (
  <div className={LAYOUT} style={{ backgroundImage: `url(${storyBgImage})` }}>
    <Outlet />
  </div>
)

export default Layout
