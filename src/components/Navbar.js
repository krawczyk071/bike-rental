import React from "react";
import { Link } from "react-router-dom";

const handleClickScroll = (elementId) => {
  const element = document.getElementById(elementId);
  console.log("el", element);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar layout-lg">
        <div className="navbar__logo">
          BikeRental <i className="fa-solid fa-bicycle"></i>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item hov-animate">
            <Link to="/">Home</Link>
          </li>
          <li
            className="navbar__item hov-animate"
            onClick={() => handleClickScroll("ride")}
          >
            Ride
          </li>
          <li
            className="navbar__item"
            onClick={() => handleClickScroll("services")}
          >
            Services
          </li>
          <li
            className="navbar__item"
            onClick={() => handleClickScroll("about")}
          >
            About
          </li>
          <li
            className="navbar__item"
            onClick={() => handleClickScroll("reviews")}
          >
            Reviews
          </li>
        </ul>
        <button className="btn btn__primary shadow-sm">Push</button>
      </nav>
    </div>
  );
};

export default Navbar;
