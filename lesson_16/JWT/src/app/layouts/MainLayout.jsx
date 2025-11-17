import { Outlet } from 'react-router'
import { Menu } from '@/widgets/Menu'

export const MainLayout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
}
