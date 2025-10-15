import { CartContext } from '@/context/CartContext'
import { ProductsContext } from '@/context/ProductsContext'

import { useContext } from 'react'
import CartItem from './CartItem'

function CartList() {
  const cartList = useContext(CartContext)
  const productsList = useContext(ProductsContext)
  const productsInCartIdsList = Object.keys(cartList)
  const productsInCart = productsList
    .filter((prod) => productsInCartIdsList.includes(prod.id))
    .map((prod) => ({
      ...prod,
      amount: cartList[prod.id],
    }))
  return (
    <div>
      {productsInCart.length ? (
        productsInCart.map((prod) => <CartItem key={prod.id} prod={prod} />)
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  )
}

export default CartList
