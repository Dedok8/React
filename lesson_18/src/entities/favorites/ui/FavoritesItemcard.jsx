import { useTranslation } from "react-i18next";

function FavoritesItemCard({ item, children }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="w-[100px] h-[100px] object-cover"
        />
      </div>
      <div>
        <div>{item.name}</div>
        <div>
          {t(`Cart.price`)}: {item.price}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default FavoritesItemCard;
