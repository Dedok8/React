import { useGetUserFavoritesQuery } from "@/entities/favorites";
import { FavoritesListWithActions } from "@/widgets/favoritesListWithActions";

function FavoritesList({ userId }) {
  const { data: favorites = {} } = useGetUserFavoritesQuery(userId);

  const favoritesArray = Object.entries(favorites).map(([productId, item]) => ({
    ...item,
    productId,
  }));

  return (
    <div>
      {favoritesArray.map((item) => (
        <FavoritesListWithActions
          key={item.productId}
          item={item}
          userId={userId}
          productId={item.productId}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
