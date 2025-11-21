import { useTranslation } from "react-i18next";
import { useRemoveFromCartMutation } from "../../../entities/cartItem/api/cartItemApi";

export default function CartRemoveButton({ userId, productId }) {
  const [remove] = useRemoveFromCartMutation();
  const { t } = useTranslation();
  return (
    <button
      className="px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-medium"
      onClick={() => remove({ userId, productId })}
    >
      {t("buttons.delete")}
    </button>
  );
}
