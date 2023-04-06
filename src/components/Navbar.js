import React from "react";

const Navbar = () => {
  return (
    <div class="header">
      <nav class="navbar layout-lg">
        <div class="navbar__logo">
          BikeRental <i class="fa-solid fa-bicycle"></i>
        </div>
        <ul class="navbar__list">
          <li class="navbar__item hov-animate">
            <a href="#">Home</a>
          </li>
          <li class="navbar__item hov-animate">Ride</li>
          <li class="navbar__item">Services</li>
          <li class="navbar__item">About</li>
          <li class="navbar__item">Reviews</li>
        </ul>
        <button class="btn btn__primary shadow-sm">Push</button>
      </nav>
    </div>
  );
};

export default Navbar;
