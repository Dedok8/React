import { TravelContext } from "@/context/TravelContext";
import { TRAVEL_TYPE_ACTION } from "@/provider/TRAVEL_TYPE";
import { useContext } from "react";
import "@/scss/busesItem.scss";

function BusesItem({ bus }) {
  const { state, dispatch } = useContext(TravelContext);
  const isSelected = state.buses.includes(bus.id);

  const onAdd = () => {
    dispatch({
      type: TRAVEL_TYPE_ACTION.TOGGLE_BUS,
      payload: bus.id,
    });
  };

  return (
    <div className={`buses-item ${isSelected ? "buses-item--selected" : ""}`}>
      <div className="buses-item__photo">🚌</div>
      <div className="buses-item__content">
        <h3 className="buses-item__name">{bus.name}</h3>
        <div className="buses-item__details">
          <p className="buses-item__detail">
            <span className="buses-item__label">Маршрут:</span>
            <span className="buses-item__value">{bus.route}</span>
          </p>
          <p className="buses-item__detail">
            <span className="buses-item__label">Час:</span>
            <span className="buses-item__value">{bus.time}</span>
          </p>
          <p className="buses-item__detail">
            <span className="buses-item__label">Ціна:</span>
            <span className="buses-item__value buses-item__price">
              {bus.price}₴
            </span>
          </p>
          <p className="buses-item__detail">
            <span className="buses-item__label">Місць:</span>
            <span className="buses-item__value">{bus.seats}</span>
          </p>
          <p className="buses-item__detail">
            <span className="buses-item__label">Клас:</span>
            <span className="buses-item__class">{bus.class}</span>
          </p>
        </div>
      </div>
      <div className="buses-item__action">
        <button
          type="button"
          onClick={onAdd}
          className={`buses-item__btn ${isSelected ? "buses-item__btn--selected" : ""}`}
        >
          {isSelected ? "✓ Вибрано" : "Вибрати"}
        </button>
      </div>
    </div>
  );
}

export default BusesItem;
