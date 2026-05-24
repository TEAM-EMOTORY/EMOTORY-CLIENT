import { Outlet } from 'react-router-dom'
import * as styles from './layout.css'

const Layout = () => (
  <div className={styles.layout}>
    <Outlet />
  </div>
)

export default Layout
