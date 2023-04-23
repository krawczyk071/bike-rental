import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <div className="user">
        <nav className="user__nav">
          <NavLink className="user__nav__link" to="." end>
            login
          </NavLink>
          <NavLink className="user__nav__link" to="signup">
            signup
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
