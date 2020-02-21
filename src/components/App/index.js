
import React, { useEffect, useState } from 'react';
import Header from '../Header';
import CurrencyList from '../CurrencyList';
import './style.css';

const restCountriesUrl = 'http://restcountries.eu/rest/v2/all';
const exchangeUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
function Country(name, flag) {
    this.name = name;
    this.flag = flag
}
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


    const currencyData = exchange
        .map(el => new CurrencyInfo(el.r030, el.txt, el.rate, el.cc, el.exchangedate, (countries
            .filter(elem => elem.currencies[0].code === el.cc))
            .map(element => new Country(element.name, element.flag))));

    // const currencyData = exchange
    //     .map(el => new CurrencyInfo(el.r030, el.txt, el.rate, el.cc, el.exchangedate, (countries
    //         .filter(elem => elem.currencies[0].code === el.cc))
    //         .map(element => new Country(element.name, element.flag))))
    //     .filter(el => el.useInCountries.length > 0);

    console.log(currencyData)

    useEffect(() => {
        fetch(restCountriesUrl)
            .then(res => res.json())
            .then(res => {
                setCountries(res)
            });
        fetch(exchangeUrl)
            .then(res => res.json())
            .then(res => {
                setExchange(res);
            }
            );
    }, []);
    return (
        <div className="container">
            <Header header={'Currency inspector'} />

            <CurrencyList currencyArray={currencyData} />
        </div>
    );
}

export default App;
