import React, { useEffect, useState } from "react";

const CurrencyList = ({ currencyArray }) => {
  return (
    <ul>
      {currencyArray.map((el, i) => (
        <li key={el.id} className="currency_card">
          <div className="flag">{<img src={el.useInCountries[0].flag} />}</div>
          <div className="country">{el.useInCountries[0].name}</div>
          <div className="currency">{el.currency}</div>

          {el.rate > 1 ? (
            <div className="course">
              <b>{"1 " + el.cc}</b>
              <b>&#8645;</b>
              <b> {el.rate.toFixed(2) + "UAH"}</b>
              <span>{el.date}</span>
            </div>
          ) : (
            <div className="course">
              <b>{"100 " + el.cc}</b>
              <b>&#8645;</b>
              <b> {(el.rate * 100).toFixed(2) + "UAH"}</b>
              <span>{el.date}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
export default CurrencyList;
