import BusesItem from "./BusesItem";
import "@/scss/busesList.scss";

function BusesList({ busesList, selectedCount }) {
  return (
    <div className="buses-list">
      <div className="buses-list__header">
        <h2 className="buses-list__title">Виберіть автобуси</h2>
        <p className="buses-list__counter">
          Вибрано автобусів:
          <span className="buses-list__count">{selectedCount}</span>
        </p>
      </div>
      <div className="buses-list__container">
        {busesList && busesList.length ? (
          busesList.map((bus) => <BusesItem key={bus.id} bus={bus} />)
        ) : (
          <h2 className="buses-list__empty">Автобусів немає</h2>
        )}
      </div>
    </div>
  );
}

export default BusesList;
