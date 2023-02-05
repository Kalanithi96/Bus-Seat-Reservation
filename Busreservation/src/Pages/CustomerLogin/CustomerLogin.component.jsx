import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Components/logo/logo.component";
import "./CustomerLogin.styles.css";
const CustomerLogin = () => {
  const navigate = useNavigate();

  const adminButtonHandler = () => {
    navigate("/adminLogin");
  };
  const custRegButtonHandler = () => {
    navigate("/customerRegister");
  };

  return (
    <div>
      <div className="logo-container">
        <Logo />
      </div>

      <div className="customer-login-form-container">
        <form className="customer-login-form">
          <input
            type="text"
            placeholder="Username"
            className="customer-login-input"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="customer-login-input"
          ></input>
          <button type="submit" className="general-button">
            Submit
          </button>
        </form>
        <div className="customer-login-button-container">
          <button onClick={adminButtonHandler} className="general-button">
            Admin?
          </button>
          <button onClick={custRegButtonHandler} className="general-button">
            Register for New user
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
