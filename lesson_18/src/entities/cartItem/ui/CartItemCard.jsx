import { useTranslation } from "react-i18next";

export default function CartItemCard({ item, children }) {
  const quantity = item?.quantity || 1;
  const price = item?.price || 0;
  const total = price * quantity;

  const { t } = useTranslation();

  return (
    <div style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
      <div>
        {t(`Cart.name`)}: {item?.name || t(`Cart.noName`)}
      </div>
      <div>
        {t(`Cart.price`)}: {price} {t(`Cart.grn`)}
      </div>
      <div>
        {t(`Cart.quantity`)}: {quantity}
      </div>
      <div>
        {t(`Cart.sum`)}: {total} {t(`Cart.grn`)}
      </div>
      <div style={{ marginTop: 8 }}>{children}</div>
    </div>
  );
}
