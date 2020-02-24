import React from "react";

const Country = ({ el }) => (
  <div className="country">{el.useInCountries[0].name}</div>
);
export default Country;
