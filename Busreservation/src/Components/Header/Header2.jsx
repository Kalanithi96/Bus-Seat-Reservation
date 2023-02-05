import React from "react";
import { Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

import logo from "../../Assets/images/busLogo.jpg";
import "./Header2.css";

const Header2 = () => {
  const navigate = useNavigate();

  const logoButtonHandler = () => {
    navigate("/adminHome");
  };
  return (
    <div>
      <header className="header">
        <Row>
          <div className="logo">
            <img src={logo} alt="" onClick={logoButtonHandler} />
          </div>
        </Row>
      </header>
    </div>
  );
};

export default Header2;
