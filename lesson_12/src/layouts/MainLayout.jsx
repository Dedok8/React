import { Outlet } from 'react-router'
import Header from './Header'

function MainLayout() {
  return (
    <div className="h-screen w-screen p-16">
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout
