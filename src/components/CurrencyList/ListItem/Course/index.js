import React from "react";

const Course = ({ el }) =>
  el.rate > 1 ? (
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
  );

export default Course;
