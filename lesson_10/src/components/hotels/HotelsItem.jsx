import { TravelContext } from "@/context/TravelContext";
import { TRAVEL_TYPE_ACTION } from "@/provider/TRAVEL_TYPE";
import { useContext } from "react";
import "@/scss/hotelItem.scss";

function HotelsItem({ hotel }) {
  const { state, dispatch } = useContext(TravelContext);
  const isSelected = state.hotels.includes(hotel.id);

  const onAdd = () => {
    dispatch({
      type: TRAVEL_TYPE_ACTION.TOGGLE_HOTEL,
      payload: hotel.id,
    });
  };
  return (
    <div className={`hotels-item ${isSelected ? "hotels-item--selected" : ""}`}>
      <div className="hotels-item__photo">🏨</div>
      <div className="hotels-item__content">
        <h3 className="hotels-item__name">{hotel.name}</h3>
        <div className="hotels-item__details">
          <p className="hotels-item__detail">
            <span className="hotels-item__label">Місто:</span>
            <span className="hotels-item__value">{hotel.city}</span>
          </p>
          <p className="hotels-item__detail">
            <span className="hotels-item__label">Зірки:</span>
            <span className="hotels-item__value">{hotel.stars}</span>
          </p>
          <p className="hotels-item__detail">
            <span className="hotels-item__label">Ціна:</span>
            <span className="hotels-item__value hotels-item__price">
              {hotel.price}₴
            </span>
          </p>
          <p className="hotels-item__detail">
            <span className="hotels-item__label">Входить:</span>
            <span className="hotels-item__value">{hotel.features}</span>
          </p>
        </div>
      </div>
      <div className="hotels-item__action">
        <button
          type="button"
          onClick={onAdd}
          className={`hotels-item__btn ${isSelected ? "hotels-item__btn--selected" : ""}`}
        >
          {isSelected ? "✓ Вибрано" : "Вибрати"}
        </button>
      </div>
    </div>
  );
}

export default HotelsItem;
