import { CART_ACTION_TYPES } from '@/providers/cartActionTypes'
import { CartActionsContext } from '@/context/CartContext'
import { useContext } from 'react'

function CartItem({ prod }) {
  const dispatch = useContext(CartActionsContext)

  const addToCart = () => {
    dispatch({
      type: CART_ACTION_TYPES.ADD,
      payload: prod.id,
    })
  }
  const removeFromCart = () => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE,
      payload: prod.id,
    })
  }

  return (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-lg p-4 mb-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-4">
        <img
          src={prod.imgSrc}
          alt={prod.title}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="text-sm sm:text-base font-medium text-gray-800">
          {prod.title}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={removeFromCart}
        >
          -
        </button>
        <div className="px-2 text-gray-700 font-semibold">{prod.amount}</div>
        <button
          className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={addToCart}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem
