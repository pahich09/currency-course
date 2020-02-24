import React from "react";
import ListItem from "./ListItem";
import "./style.css";

const CurrencyList = ({ currencyArray }) => (
  <ul>{<ListItem currencyArray={currencyArray} />}</ul>
);
export default CurrencyList;
