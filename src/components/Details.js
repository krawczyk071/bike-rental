import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { editBike, editUser, getOne } from "../utils/firebase";
import Loader from "./Loader";
import { AuthContext } from "../context/AuthContext";

const Details = () => {
  const { currentUser } = useContext(AuthContext);
  const [wait, SetWait] = useState(false);

  const { id } = useParams();
  const [bike, SetBike] = useState({ data: [], loading: true });
  useEffect(() => {
    getOne("main", id).then((data) => SetBike({ data, loading: false }));
  }, []);

  const navigate = useNavigate();
  async function handleRent() {
    SetWait(true);
    const oldUser = await getOne("users", currentUser.uid);
    console.log(oldUser.bikes.length);
    if (oldUser.bikes.length >= 2) {
      return navigate("/order", {
        state: {
          msg: `Sorry cant rent the bike. Maximum nuber of bikes rented(2) exceeded.`,
        },
      });
    }
    const newBike = { ...bike.data, status: "rented" };
    // SetBike({ data: newBike, loading: false });
    const newUser = { ...oldUser, bikes: [...oldUser.bikes, newBike] };
    //update firebase
    await editBike(newBike);
    await editUser(newUser);
    console.log(oldUser);
    navigate("/order", {
      state: { msg: `You've just rented bike : ${newBike.id}` },
    });
  }
  // console.log(424, bike);

  // const activeStyles = {
  //   fontWeight: "bold",
  //   textDecoration: "underline",
  //   color: "#6f42c1",
  // };

  if (bike.loading) {
    return <Loader />;
  }
  return (
    <div className="details layout-lg">
      <nav className="details__nav">
        <NavLink
          to="."
          end
          // style={({ isActive }) => (isActive ? activeStyles : null)}
          className="details__nav__link"
        >
          General Info
        </NavLink>
        <NavLink
          to="moreinfo"
          // style={({ isActive }) => (isActive ? activeStyles : null)}
          className="details__nav__link"
        >
          More details
        </NavLink>
        <NavLink to="price" className="details__nav__link">
          Pricing
        </NavLink>
        {bike.data.status === "ready" ? (
          <div className="details__nav__rent" onClick={handleRent}>
            {wait ? "Processing..." : "Rent this Bike"}
          </div>
        ) : (
          <div className="details__nav__rent">Not available</div>
        )}
      </nav>
      <Outlet context={bike.data} />
    </div>
  );
};

export default Details;
