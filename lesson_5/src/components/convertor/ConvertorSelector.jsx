import { useEffect, useState } from "react";

function ConvertorSelector({ convectorList, onSelect }) {
  const [currentCurrencyCode, setCurrentCurrencyCode] = useState(
    () => convectorList[0]?.code
  );

  useEffect(() => {
    onSelect(currentCurrencyCode);
  }, [currentCurrencyCode, onSelect]);

  const handleVal = (e) => {
    setCurrentCurrencyCode(e.target.value);
  };

  return (
    <>
      <div>
        <select value={currentCurrencyCode} onChange={handleVal}>
          <option value="">Виберіть валюту</option>
          {convectorList.map((correctEl) => (
            <option key={correctEl.code} value={correctEl.code}>
              {correctEl.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default ConvertorSelector;
