import React, { useEffect, useState } from "react";
import Header from "../Header";
import CurrencyList from "../CurrencyList";
import Loader from "../../containers/Loader";
import "./style.css";
import { fetchExchangeArr, fetchCountryArr } from "../../services/fetchData";

const App = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const countryArray = await fetchCountryArr();
    const exchangeArray = await fetchExchangeArr();

    const currencyData = [];
    exchangeArray.forEach(el =>
      countryArray.forEach(elem =>
        elem.currencies[0].code === el.cc
          ? currencyData.push({ ...elem, ...el })
          : null
      )
    );
    setCurrencyData(currencyData);
    setLoading(false);
  }, []);

  return (
    <div className="container">
      <Header header={"Currency inspector"} />
      {loading ? <Loader /> : <CurrencyList currencyArray={currencyData} />}
    </div>
  );
};

export default App;
