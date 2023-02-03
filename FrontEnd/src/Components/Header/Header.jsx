import React from "react";
import { Container, Row, Button} from 'reactstrap'


import logo from '../../Assets/images/busLogo.jpg'
import "./Header.css";


const Header = () => {
    return <header className="header">
        <Container>
            <Row>
                <div className="logo">
                        <img src={logo} alt="" />
                </div>
            </Row>
        </Container>
    </header>
};

export default Header;