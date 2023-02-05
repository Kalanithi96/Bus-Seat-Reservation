import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Components/logo/logo.component";
import "./CustomerRegister.styles.css";
const CustomerRegister = () => {
  const navigate = useNavigate();

  const adminButtonHandler = () => {
    navigate("/adminLogin");
  };
  const customerButtonHandler = () => {
    navigate("/customerLogin");
  };

  return (
    <div>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="customer-register-form-container">
        <form className="customer-register-form">
          <input
            type="text"
            placeholder="Username"
            className="customer-register-input"
          ></input>
          <input
            type="number"
            placeholder="Phone Number"
            className="customer-register-input"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="customer-register-input"
          ></input>
          <button type="submit" className="general-button">
            Submit
          </button>
        </form>

        <div className="customer-register-button-container">
          <button onClick={adminButtonHandler} className="general-button">
            Admin?
          </button>
          <button onClick={customerButtonHandler} className="general-button">
            Existing user?
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegister;
