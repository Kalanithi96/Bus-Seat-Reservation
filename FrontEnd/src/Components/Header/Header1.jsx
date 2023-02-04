import React from "react";
import { Row} from 'reactstrap'
import { useNavigate } from "react-router-dom";

import logo from '../../Assets/images/busLogo.jpg'
import "./Header1.css";


const Header1 = () => {
    const navigate = useNavigate();

    const logoButtonHandler = () =>{
        navigate( "/home" )
    }
    return (<div>
        
        <header className="header">
                <Row>
                    <div className="logo">
                            <img src={logo} alt="" onClick={logoButtonHandler}/>
                    </div>
                </Row>
        </header>
    </div> );
};

export default Header1;