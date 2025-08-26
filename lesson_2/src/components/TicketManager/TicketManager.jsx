// Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо
// 1) бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают
// 2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.

import { useState } from "react";

function TicketManager() {
  const [typeTicket, setTypeTicket] = useState("");
  const [brandy, setBrandy] = useState("");
  const [appetizer, setAppetizer] = useState("");

  const ticketHandler = (e) => {
    setTypeTicket(e.target.value);
    setBrandy("");
    setAppetizer("");
  };

  const drinkHandler = (e) => {
    setBrandy(e.target.value);
  };

  const getAppetizerHandler = (e) => {
    setAppetizer(e.target.value);
  };

  return (
    <div>
      <select value={typeTicket} onChange={ticketHandler}>
        <option value="">Виберіть клас</option>
        <option value="busines">Busines</option>
        <option value="econom">Econom</option>
      </select>

      {typeTicket === "busines" && (
        <select value={brandy} onChange={drinkHandler}>
          <option value="">Виберіть що подобається</option>
          <option value="newspaper">Газета</option>
          <option value="brandy">Коньяк</option>
        </select>
      )}

      {brandy === "brandy" && (
        <select value={appetizer} onChange={getAppetizerHandler}>
          <option value="">Закуску?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      )}

      {typeTicket === "econom" && (
        <select>
          <option value="">Що бажаєте?</option>
          <option value="beer">Пиво</option>
          <option value="cheaps">Чіпси</option>
        </select>
      )}
    </div>
  );
}

export default TicketManager;
