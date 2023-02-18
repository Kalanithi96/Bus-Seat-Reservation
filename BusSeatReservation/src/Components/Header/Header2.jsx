import React from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../Assets/images/busLogo.jpg'
import "./Header2.css";


const Header2 = () => {
    const navigate = useNavigate();

    const logoButtonHandler = () =>{
        navigate( "/adminHome" )
    }
    
    return (<div>
        
        <header className="header2">
            <span className="logo2">
                <img src={logo} alt="" onClick={logoButtonHandler}/>
            </span>
            <span className="icon2">
                <i className="ri-user-line"></i>
                <span> UserName</span>
            </span>
        </header>
    </div> );
};

export default Header2;