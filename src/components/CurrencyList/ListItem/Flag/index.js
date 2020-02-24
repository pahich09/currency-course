import React from "react";

const Flag = ({ el }) => (
  <div className="flag">
    {<img src={el.useInCountries[0].flag} alt={"country"} />}
  </div>
);
export default Flag;
