import React from "react";
import Card from "./Card";
import { allFilter } from "../utils/data";

const types = [
  "Tricycles",
  "Cruiser",
  "Hybrid",
  "Road",
  "Mountain",
  "Electric",
];

const Rent = () => {
  return (
    <div className="rent" id="ride">
      <h3>Experience the city on two wheels with our bike rentals.</h3>
      <h1>Discover more, own less: rent a bike today!</h1>
      {types.map((t) => {
        return (
          <div className="rent__cards">
            {allFilter
              .filter((a) => a.filter.subtype.includes(t))
              .map((a) => (
                <Card item={a} />
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default Rent;
