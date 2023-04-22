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
    color: "Red",
  };

  if (bike.loading) {
    return <Loader />;
  }
  return (
    <>
      <nav className="detail-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Detail {id}
        </NavLink>
        <NavLink
          to="morephotos"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          morephotos
        </NavLink>
      </nav>
      <Outlet context={bike.data} />
    </>
  );
};

export default Details;
