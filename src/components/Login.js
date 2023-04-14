import React from "react";
import { fbLogin } from "../utils/firebase";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ user: "", pwd: "" });
  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fbLogin(formData.user, formData.pwd);
  };
  return (
    <div>
      <h1>Login</h1>
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
    </div>
  );
};

export default Login;