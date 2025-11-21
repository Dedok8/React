import { useTranslation } from "react-i18next";
import { useRemoveFavoriteMutation } from "@/entities/favorites";

function RemoveFavoriteBtn({ productId, userId }) {
  const { t } = useTranslation();

  const [removeFavorite, { isLoading }] = useRemoveFavoriteMutation();

  return (
    <button
      disabled={isLoading}
      onClick={() => removeFavorite({ productId, userId })}
    >
      {t("buttons.delete")}
    </button>
  );
}

export default RemoveFavoriteBtn;
