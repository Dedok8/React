import { useAddFavoriteMutation } from "@/entities/favorites";
import { useTranslation } from "react-i18next";

function AddFavoriteBtn({ product, userId }) {
  const { t } = useTranslation();

  const productId = product.id;
  const favorite = { ...product, id: productId };

  const [addFavorite, { isLoading }] = useAddFavoriteMutation();

  const handleAdd = () => {
    if (!userId || !productId) {
      console.error("User ID або Product ID відсутній.");
      return;
    }
    addFavorite({ userId, favorite });
  };

  return (
    <button onClick={handleAdd}>
      {isLoading ? t("loading") : t("Favorites.addToFavorite")}
    </button>
  );
}

export default AddFavoriteBtn;
