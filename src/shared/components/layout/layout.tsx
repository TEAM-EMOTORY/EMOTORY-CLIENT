import { Outlet } from 'react-router-dom'
import * as styles from './layout.css'

export const Layout = () => (
  <div className={styles.layout}>
    <Outlet />
  </div>
)

export const StoryLayout = () => (
  <div className={styles.storyLayout}>
    <Outlet />
  </div>
)

export default Layout
