import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <nav className="user-nav">
        <Link to="/user">Dashboard</Link>
        <Link to="/user/login">login</Link>
        <Link to="/user/signup">signup</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default UserLayout;
