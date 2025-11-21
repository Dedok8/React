import FavoritesList from "@/widgets/favoritesList/FavoritesList";
import { useSelector } from "react-redux";

function FavoritesPage() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <FavoritesList userId={user.id} />
    </div>
  );
}

export default FavoritesPage;
