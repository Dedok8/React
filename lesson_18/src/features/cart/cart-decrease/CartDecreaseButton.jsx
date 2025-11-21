import { useDecreaseQuantityMutation } from '../../../entities/cartItem/api/cartItemApi'

export default function CartDecreaseButton({ userId, productId }) {
  const [decrease] = useDecreaseQuantityMutation()
  return (
    <button
      className="px-2 py-1 rounded bg-yellow-600 hover:bg-yellow-700 text-white text-xs font-medium"
      onClick={() => decrease({ userId, productId })}
    >
      -
    </button>
  )
}
