import React, { useEffect, useState } from "react";
import Header from "../Header";
import CurrencyList from "../CurrencyList";
import Loader from "../../containers/Loader";
import "./style.css";

const restCountriesUrl = "http://restcountries.eu/rest/v2/all";
const exchangeUrl =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

function CurrencyInfo(id, currencyName, rate, cc, date, countryInfo) {
  this.id = id;
  this.currency = currencyName;
  this.rate = rate;
  this.cc = cc;
  this.date = date;
  this.useInCountries = countryInfo;
}

const App = () => {
  const [countries, setCountries] = useState([]);
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);

  const currencyData = exchange
    .map(
      el =>
        new CurrencyInfo(
          el.r030,
          el.txt,
          el.rate,
          el.cc,
          el.exchangedate,
          countries.filter(elem => elem.currencies[0].code === el.cc)
        )
    )
    .filter(el => el.useInCountries.length > 0);

  useEffect(() => {
    fetch(restCountriesUrl)
      .then(res => res.json())
      .then(res => {
        setCountries(res);
      });
    fetch(exchangeUrl)
      .then(res => res.json())
      .then(res => {
        setExchange(res);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container">
      <Header header={"Currency inspector"} />
      {loading ? <Loader /> : <CurrencyList currencyArray={currencyData} />}
    </div>
  );
};

export default App;
