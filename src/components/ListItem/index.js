import React from "react";
import Flag from "../Flag";
import Country from "../Country";
import Currency from "../Currency";
import Course from "../Course";

import "./style.css";

const ListItem = ({ currencyArray }) =>
  currencyArray.map(el => (
    <li key={el.id} className="currency_card">
      <Flag el={el} />
      <Country el={el} />
      <Currency el={el} />
      <Course el={el} />
    </li>
  ));

export default ListItem;
