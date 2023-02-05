import React from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../Assets/images/busLogo.jpg'
import "./Header1.css";


const Header1 = () => {
    const navigate = useNavigate();

    const logoButtonHandler = () =>{
        navigate( "/CustomerHome" )
    }
    const userButtonHandler = () =>{
        navigate( "/bookings" )
    }
    return (<div>
        
        <header className="header1">
            <span className="logo1">
                <img src={logo} alt="" onClick={logoButtonHandler}/>
            </span>
            <span className="icon1" onClick={userButtonHandler}>
                <i className="ri-user-line"></i>
                <span> UserName</span>
            </span>
        </header>
    </div> );
};

export default Header1;