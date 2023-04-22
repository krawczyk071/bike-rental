import React, { useEffect, useState } from "react";
import Card from "./Card";
import { allFilter } from "../utils/data";
import { getFire } from "../utils/firebase";
import Loader from "./Loader";

const types = [
  { value: "", display: "All" },
  { value: "Cruiser", display: "Cruiser" },
  { value: "Road", display: "Road" },
  { value: "Electric", display: "Electric" },
];
const types1 = [
  "Tricycles",
  "Cruiser",
  "Hybrid",
  "Road",
  "Mountain",
  "Electric",
];

const Rent = () => {
  const [filter, setFilter] = useState({ value: "", display: "All" });
  const [allBikes, SetAllBikes] = useState({ data: [], loading: true });
  useEffect(() => {
    getFire().then((data) => SetAllBikes({ data, loading: false }));
  }, []);
  if (allBikes.loading) {
    return <Loader />;
  }
  console.log(33, allBikes);
  return (
    <div className="rent" id="ride">
      <h3>Experience the city on two wheels with our bike rentals.</h3>
      <h1>Discover more, own less: rent a bike today!</h1>
      <div className="rent__filter">
        {types.map((t) => {
          return (
            <div className="rent__badge" onClick={() => setFilter(t)}>
              {t.display}
            </div>
          );
        })}
      </div>
      <div className="rent__cards">
        {allBikes.data
          .filter((a) => a.filter.subtype.includes(filter.value))
          .map((a) => (
            <Card item={a} />
          ))}
      </div>
      {/* {types.map((t) => {
        return (
          <div className="rent__cards">
            {allFilter
              .filter((a) => a.filter.subtype.includes(t))
              .map((a) => (
                <Card item={a} />
              ))}
          </div>
        );
      })} */}
    </div>
  );
};

export default Rent;
