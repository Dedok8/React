import { TravelContext } from "@/context/TravelContext";
import { TravelDataContext } from "@/context/TravelDataContext";
import { TRAVEL_TYPE_ACTION } from "@/provider/TRAVEL_TYPE";
import { useContext } from "react";
import "@/scss/selectedPage.scss";

function SelectedPage() {
  const { state, dispatch } = useContext(TravelContext);
  const { buses, hotels } = useContext(TravelDataContext);

  const selectedBuses = buses.filter((bus) => state.buses.includes(bus.id));
  const selectedHotels = hotels.filter((hotel) =>
    state.hotels.includes(hotel.id)
  );

  const handleRemoveBus = (busId) => {
    dispatch({
      type: TRAVEL_TYPE_ACTION.TOGGLE_BUS,
      payload: busId,
    });
  };

  const handleRemoveHotel = (hotelId) => {
    dispatch({
      type: TRAVEL_TYPE_ACTION.TOGGLE_HOTEL,
      payload: hotelId,
    });
  };

  const totalBusCost = selectedBuses.reduce(
    (prevBus, bus) => prevBus + bus.price,
    0
  );

  const totalHotelCost = selectedHotels.reduce(
    (prevHotel, hotel) => prevHotel + hotel.price,
    0
  );

  const totalCost = totalBusCost + totalHotelCost;
  return (
    <div className="selected-page">
      <div className="selected-page__header">
        <h1 className="selected-page__title">Ваш вибір</h1>
        <div className="selected-page__summary">
          <div className="selected-page__summary-item">
            <span className="selected-page__summary-label">Автобусів:</span>
            <span className="selected-page__summary-value">
              {selectedBuses.length}
            </span>
          </div>
          <div className="selected-page__summary-item">
            <span className="selected-page__summary-label">Готелів:</span>
            <span className="selected-page__summary-value">
              {selectedHotels.length}
            </span>
          </div>
          <div className="selected-page__summary-item selected-page__summary-item--total">
            <span className="selected-page__summary-label">Загальна ціна:</span>
            <span className="selected-page__summary-value">{totalCost}₴</span>
          </div>
        </div>
      </div>

      <section className="selected-page__section">
        <h2 className="selected-page__section-title">
          🚌 Вибрані автобуси ({selectedBuses.length})
        </h2>
        {selectedBuses.length > 0 ? (
          <div className="selected-page__list">
            {selectedBuses.map((bus) => (
              <div key={bus.id} className="selected-card selected-card--bus">
                <div className="selected-card__icon">🚌</div>
                <div className="selected-card__content">
                  <h3 className="selected-card__name">{bus.name}</h3>
                  <div className="selected-card__details">
                    <p className="selected-card__detail">
                      <strong>Маршрут:</strong> {bus.route}
                    </p>
                    <p className="selected-card__detail">
                      <strong>Час:</strong> {bus.time}
                    </p>
                    <p className="selected-card__detail">
                      <strong>Місць:</strong> {bus.seats}
                    </p>
                    <p className="selected-card__detail">
                      <strong>Клас:</strong> {bus.class}
                    </p>
                  </div>
                  <div className="selected-card__price">{bus.price}₴</div>
                </div>
                <button
                  className="selected-card__remove"
                  onClick={() => handleRemoveBus(bus.id)}
                  title="Видалити"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="selected-page__empty">Автобуси не вибрані</p>
        )}
      </section>

      <section className="selected-page__section">
        <h2 className="selected-page__section-title">
          🏨 Вибрані готелі ({selectedHotels.length})
        </h2>
        {selectedHotels.length > 0 ? (
          <div className="selected-page__list">
            {selectedHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="selected-card selected-card--hotel"
              >
                <div className="selected-card__icon">🏨</div>
                <div className="selected-card__content">
                  <h3 className="selected-card__name">{hotel.name}</h3>
                  <div className="selected-card__details">
                    <p className="selected-card__detail">
                      <strong>Місто:</strong> {hotel.city}
                    </p>
                    <p className="selected-card__detail">
                      <strong>Зірок:</strong> {"⭐".repeat(hotel.stars)}
                    </p>
                    <p className="selected-card__detail">
                      <strong>Зручності:</strong> {hotel.features}
                    </p>
                  </div>
                  <div className="selected-card__price">{hotel.price}₴</div>
                </div>
                <button
                  className="selected-card__remove"
                  onClick={() => handleRemoveHotel(hotel.id)}
                  title="Видалити"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="selected-page__empty">Готелі не вибрані</p>
        )}
      </section>

      {(selectedBuses.length > 0 || selectedHotels.length > 0) && (
        <div className="selected-page__actions">
          <button className="selected-page__book-btn">
            Забронювати подорож ({totalCost}₴)
          </button>
        </div>
      )}
    </div>
  );
}

export default SelectedPage;
