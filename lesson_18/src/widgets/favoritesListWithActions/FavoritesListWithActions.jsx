import FavoritesItemCard from "@/entities/favorites/ui/FavoritesItemcard";
import RemoveFavoriteBtn from "@/features/favorites/removeFavorites/RemoveFavoriteBtn";

function FavoritesListWithActions({ item, userId, productId }) {
  console.log(item);

  return (
    <FavoritesItemCard item={item}>
      <RemoveFavoriteBtn productId={productId} userId={userId} />
    </FavoritesItemCard>
  );
}

export default FavoritesListWithActions;
