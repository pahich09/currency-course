import React from "react";

const Flag = ({ el }) => (
  <div className="flag">{<img src={el.flag} alt={"country"} />}</div>
);
export default Flag;
