import { useDeleteProductMutation } from "@/entities/product/api/productApi";
import deleteIcon from "@/assets/icons/delete-white.svg";
import { useTranslation } from "react-i18next";

export function ProductDeleteButton({ productId, onDeleted }) {
  const [deleteProduct] = useDeleteProductMutation();
  const { t } = useTranslation();
  const handleDelete = async () => {
    await deleteProduct(productId);
    onDeleted && onDeleted();
  };
  return (
    <button
      className="px-1.5 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-medium shadow focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center"
      onClick={handleDelete}
      title={t("buttons.delete")}
    >
      <img src={deleteIcon} alt={t("buttons.delete")} className="w-4 h-4" />
    </button>
  );
}
