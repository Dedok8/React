import { useTranslation } from "react-i18next";
import { useGetUserCartQuery } from "../../entities/cartItem/api/cartItemApi";
import CartItemCardWithActions from "@/widgets/CartItemCardWithActions/CartItemCardWithActions";

export default function CartList({ userId }) {
  const { t } = useTranslation();
  const { data: cart = {}, isLoading } = useGetUserCartQuery(userId);

  const items = Object.entries(cart).filter(([_, item]) => item);

  const total = items.reduce(
    (sum, [_, item]) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  if (isLoading) return <div>{t("common.loadingMessage")}</div>;

  return (
    <div>
      {items.length === 0 && <div>{t("Cart.empty")}</div>}
      {items.map(([productId, item]) => (
        <CartItemCardWithActions
          key={productId}
          userId={userId}
          productId={productId}
          item={item}
        />
      ))}
      {items.length > 0 && (
        <div style={{ marginTop: 16, fontWeight: "bold" }}>
          {t("Cart.totalPrice")}: {total}
        </div>
      )}
    </div>
  );
}
