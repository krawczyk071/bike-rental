import React from "react";
import Card from "./Card";
import { allFilter } from "../utils/data";

const Rent = () => {
  return (
    <div className="rent">
      <h3>Experience the city on two wheels with our bike rentals.</h3>
      <h1>Discover more, own less: rent a bike today!</h1>
      <div className="rent__cards">
        {allFilter.map((a) => (
          <Card item={a} />
        ))}
      </div>
    </div>
  );
};

export default Rent;
