import { useState, useEffect } from "react";
import ConverterSelector from "./ConvertorSelector";
import { convectorList } from "../../data/convertorVal";
import { getCurrentDateForRequest } from "./utils/utils";

function ConvertorMain() {
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currencyCode}&date=${getCurrentDateForRequest()}&json`;
    async function fetchDataUrl(url) {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(url);
        const data = await res.json();
        setRate(data[0]?.rate);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataUrl(url);
  }, [currencyCode]);

  function onSelect(currencyCode) {
    setCurrencyCode(currencyCode);
  }

  const grn = rate * amount;

  let content;
  if (isLoading) content = <div>...Is Loading</div>;
  else if (error) content = <div>Error</div>;
  else {
    content = <div>Сума у гривнях: {grn}</div>;
  }
  return (
    <>
      <ConverterSelector convectorList={convectorList} onSelect={onSelect} />
      <label>
        <input
          type="number"
          placeholder="введіть кол-во валюти"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </label>
      {content}
    </>
  );
}

export default ConvertorMain;
