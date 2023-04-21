import React from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import UserStatus from "../components/UserStatus";

const User = () => {
  return (
    <div>
      <Signup />
      <Login />
      <UserStatus />
    </div>
  );
};

export default User;
