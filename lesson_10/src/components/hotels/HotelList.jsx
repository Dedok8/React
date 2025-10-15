import HotelsItem from "./HotelsItem";
import "@/scss/hotelList.scss";

function HotelList({ hotelList, selectedCount }) {
  return (
    <div className="hotels-list">
      <div className="hotels-list__header">
        <h2 className="hotels-list__title">Виберіть готелі</h2>
        <p className="hotels-list__counter">
          Вибрано готелів:
          <span className="hotels-list__count">{selectedCount}</span>
        </p>
      </div>
      <div className="hotels-list__container">
        {hotelList && hotelList.length ? (
          hotelList.map((hotel) => <HotelsItem key={hotel.id} hotel={hotel} />)
        ) : (
          <h2 className="hotels-list__empty">Готелів немає</h2>
        )}
      </div>
    </div>
  );
}

export default HotelList;
