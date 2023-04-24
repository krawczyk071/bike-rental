import React, { useContext } from "react";
import { fbLogin } from "../utils/firebase";
import { useState } from "react";
import UserStatus from "./UserStatus";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ user: "", pwd: "" });
  const [alert, setAlert] = useState("");
  const { currentUser, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fbLogin(formData.user, formData.pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
      })
      .catch((err) => {
        setAlert(err.message);
        // console.log(err);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      {alert && <div className="alert">{alert}</div>}
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          name="user"
          value={formData.user}
          placeholder="username"
          onChange={formChange}
        />
        <input
          type="text"
          name="pwd"
          value={formData.pwd}
          placeholder="pass"
          onChange={formChange}
        />
        <button type="submit">Login</button>
      </form>
      {/* <UserStatus /> */}
    </div>
  );
};

export default Login;
