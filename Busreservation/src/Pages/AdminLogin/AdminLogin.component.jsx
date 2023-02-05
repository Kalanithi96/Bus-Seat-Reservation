import React from "react";
import Logo from "../../Components/logo/logo.component";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.styles.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const customerButtonHandler = () => {
    navigate("/customerLogin");
  };

  return (
    <div>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="admin-login-form-container">
        <form className="admin-login-form">
          <input
            type="text"
            placeholder="Username"
            className="admin-login-input"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="admin-login-input"
          ></input>
          <button type="submit" className="general-button">
            Submit
          </button>
        </form>

        <div className="admin-login-button-container">
          <button onClick={customerButtonHandler} className="general-button">
            Cutomer?
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
