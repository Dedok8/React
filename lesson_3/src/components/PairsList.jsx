import { useState } from "react";

function PairsList() {
  const boysList = ["Іван", "Петро", "Олег", "Михайло"];
  const girlsList = ["Марія", "Олена", "Катя", "Наталя"];

  const [boys, setBoys] = useState(boysList);
  const [girls, setGirls] = useState(girlsList);
  const [selectBoys, setSelectBoys] = useState("");
  const [selectGirls, setSelectGirls] = useState("");
  const [pairs, setPairs] = useState([]);

  const addPair = () => {
    if (!selectBoys || !selectGirls) return;

    setPairs([...pairs, { boy: selectBoys, girl: selectGirls }]);
    setGirls(girls.filter((girl) => girl !== selectGirls));
    setBoys(boys.filter((boy) => boy !== selectBoys));
    setSelectBoys("");
    setSelectGirls("");
  };

  const removePair = (index) => {
    const pair = pairs[index];
    setPairs(pairs.filter((_, i) => i !== index));
    setGirls([...girls, pair.girl]);
    setBoys([...boys, pair.boy]);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
        <div>
          <ul style={{ padding: 0 }}>
            {boys.map((boy) => (
              <li
                key={boy}
                onClick={() => setSelectBoys(boy)}
                disabled={boys.length === 0}
                style={{
                  fontWeight: selectBoys === boy ? "bold" : "normal",
                  cursor: "pointer",
                  listStyle: "none",
                }}
              >
                {boy}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul style={{ padding: 0 }}>
            {girls.map((girl) => (
              <li
                key={girl}
                onClick={() => setSelectGirls(girl)}
                disabled={girls.length === 0}
                style={{
                  fontWeight: selectGirls === girl ? "bold" : "normal",
                  cursor: "pointer",
                  listStyle: "none",
                }}
              >
                {girl}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={addPair} disabled={!selectBoys || !selectGirls}>
        Сформувати пару
      </button>
      <div>
        <ul>
          {pairs.map((pair, index) => (
            <li key={index} style={{ listStyle: "none" }}>
              {pair.boy} + {pair.girl}
              <button onClick={() => removePair(index)}>Видалити пару</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PairsList;
