import { Outlet } from 'react-router'
import Header from './Header'
import ProductProvider from '@/providers/ProductProvider'
import CartProvider from '@/providers/CartProvider'
function MainLayout() {
  return (
    <div className="h-screen w-screen p-16">
      <ProductProvider>
        <CartProvider>
          <Header />
          <Outlet />
        </CartProvider>
      </ProductProvider>
    </div>
  )
}

export default MainLayout
