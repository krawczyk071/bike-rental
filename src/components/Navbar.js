import React from "react";
import { Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar layout-lg">
        <div className="navbar__logo">
          BikeRental <i className="fa-solid fa-bicycle"></i>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item hov-animate">
            <NavHashLink smooth to="/">
              Home
            </NavHashLink>
          </li>
          <li className="navbar__item hov-animate">
            <NavHashLink smooth to="/#ride">
              Ride
            </NavHashLink>
          </li>
          <li className="navbar__item hov-animate">
            <NavHashLink smooth to="/#services">
              Services
            </NavHashLink>
          </li>
          <li className="navbar__item hov-animate">
            <NavHashLink smooth to="/#about">
              About
            </NavHashLink>
          </li>
          <li className="navbar__item hov-animate">
            <NavHashLink smooth to="/#reviews">
              Reviews
            </NavHashLink>
          </li>
        </ul>
        <Link to="/user">
          <button className="btn btn__primary shadow-sm">User / Admin</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
