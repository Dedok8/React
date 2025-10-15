import { useContext } from 'react'
import MainMenu from './MainMenu'
import { CartContext } from '@/context/CartContext'
function Header() {
  const cartProducts = useContext(CartContext)
  console.log('---cartProducts')
  console.log(cartProducts)
  console.log(Object.values(cartProducts))

  const totalProductsNumber = Object.values(cartProducts).reduce(
    (prevSum, num) => prevSum + num,
    0
  )
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <MainMenu />
      <div className="text-black">Cart: {totalProductsNumber}</div>
    </div>
  )
}

export default Header
