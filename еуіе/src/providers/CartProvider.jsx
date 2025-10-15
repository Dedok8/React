import { useReducer } from 'react'
import { CartContext, CartActionsContext } from '@/context/CartContext'

import { CART_ACTION_TYPES } from './cartActionTypes'

const initialCartProducts = {
  1: 2,
  5: 3,
  7: 4,
}

function cartReducer(currentState, action) {
  const prodId = action.payload

  let newState
  switch (action.type) {
    case CART_ACTION_TYPES.ADD:
      console.log('--action')
      console.log(action)
      newState = {
        ...currentState,
        [prodId]: (currentState[prodId] ?? 0) + 1,
      }
      break
    case CART_ACTION_TYPES.REMOVE:
      newState = {
        ...currentState,
        [prodId]: currentState[prodId] - 1,
      }
      if (newState[prodId] === 0) delete newState[prodId]
      break
    case CART_ACTION_TYPES.DELETE:
      newState = { ...currentState }
      delete newState[prodId]
      break
    default:
      newState = currentState
      break
  }
  return newState
}
// {type:'ADD', payload:id}
function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartProducts)

  return (
    <CartContext value={cartState}>
      <CartActionsContext value={dispatch}>{children}</CartActionsContext>
    </CartContext>
  )
}

export default CartProvider
