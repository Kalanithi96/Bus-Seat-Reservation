import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Components/logo/logo.component.jsx";
import "./userTypes.styles.css";
const UserType = () => {
  const navigate = useNavigate();

  const customerButtonHandler = () => {
    navigate("/customerLogin");
  };
  const adminButtonHandler = () => {
    navigate("/adminLogin");
  };
  return (
    <div>
      <div className="user-type-container">
        <div className="background-sheet"></div>
        <div className="logo-container">
          <Logo />
        </div>

        <div className="user-type-button-container">
          <button onClick={customerButtonHandler} className="user-type-button">
            Customer Login
          </button>
          <button onClick={adminButtonHandler} className="user-type-button">
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserType;
