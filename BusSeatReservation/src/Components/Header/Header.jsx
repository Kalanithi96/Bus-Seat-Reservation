import React from "react";
import { Row} from 'reactstrap'
import { useNavigate } from "react-router-dom";

import logo from '../../Assets/images/busLogo.jpg'
import "./Header.css";


const Header = () => {
    const navigate = useNavigate();

    const logoButtonHandler = () =>{
        navigate( "/" )
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

export default Header;