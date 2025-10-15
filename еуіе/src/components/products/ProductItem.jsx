import { CartActionsContext } from '@/context/CartContext'
import { useContext } from 'react'
import { CART_ACTION_TYPES } from '@/providers/cartActionTypes'

function ProductItem({ prod }) {
  const dispatch = useContext(CartActionsContext)

  const addToCart = () => {
    dispatch({
      type: CART_ACTION_TYPES.ADD,
      payload: prod.id,
    })
  }

  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={prod.imgSrc}
        alt={prod.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {prod.title}
        </h2>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-gray-600">Price:</span>
          <span className="text-lg font-bold text-green-600">{prod.price}</span>
        </div>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem
