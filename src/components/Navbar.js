import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar layout-lg">
        <div className="navbar__logo">
          BikeRental <i className="fa-solid fa-bicycle"></i>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item hov-animate">
            <a href="#">Home</a>
          </li>
          <li className="navbar__item hov-animate">Ride</li>
          <li className="navbar__item">Services</li>
          <li className="navbar__item">About</li>
          <li className="navbar__item">Reviews</li>
        </ul>
        <button className="btn btn__primary shadow-sm">Push</button>
      </nav>
    </div>
  );
};

export default Navbar;
