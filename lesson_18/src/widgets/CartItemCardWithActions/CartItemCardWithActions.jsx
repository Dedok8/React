import CartItemCard from "@/entities/cartItem/ui/CartItemCard";
import {
  CartDecreaseButton,
  CartIncreaseButton,
  CartRemoveButton,
} from "@/features/cart";

function CartItemCardWithActions({ userId, productId, item }) {
  return (
    <CartItemCard item={item}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <CartDecreaseButton userId={userId} productId={productId} />
        <CartIncreaseButton
          userId={userId}
          productId={productId}
          product={item}
        />
        <CartRemoveButton userId={userId} productId={productId} />
      </div>
    </CartItemCard>
  );
}

export default CartItemCardWithActions;
