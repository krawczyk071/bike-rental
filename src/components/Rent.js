import React from "react";
import Card from "./Card";
import { allFilter } from "../utils/data";

const Rent = () => {
  return (
    <div className="rent">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <div className="rent__cards">
        {allFilter.map((a) => (
          <Card item={a} />
        ))}
      </div>
    </div>
  );
};

export default Rent;
