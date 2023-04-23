import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { getOne } from "../utils/firebase";
import Loader from "./Loader";

const Details = () => {
  const { id } = useParams();
  const [bike, SetBike] = useState({ data: [], loading: true });
  useEffect(() => {
    getOne(id).then((data) => SetBike({ data, loading: false }));
  }, []);
  // console.log(424, bike);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#6f42c1",
  };

  if (bike.loading) {
    return <Loader />;
  }
  return (
    <div className="details layout-lg">
      <nav className="details__nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          General Info
        </NavLink>
        <NavLink
          to="moreinfo"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          More details
        </NavLink>
        <NavLink>Pricing</NavLink>
      </nav>
      <Outlet context={bike.data} />
    </div>
  );
};

export default Details;
