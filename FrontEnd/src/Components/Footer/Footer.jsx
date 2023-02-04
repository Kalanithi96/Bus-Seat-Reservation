import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

import {Link} from 'react-router-dom';
import "./Footer.css";


const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg="3">
                    <h5 className="footer__link-title">Contact</h5>
                    <ListGroup className="footer__quick-links">
                        <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                            <span>
                            <h6 className="mb-0 d-flex align-items-center gap-2" >
                                <span>
                                <i class="ri-map-pin-line"></i>
                                </span>
                                Address:
                            </h6>
                            <p className="mb-0">Peelamedu, Coimbatore</p>
                            </span>
                        </ListGroupItem>
                        <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">

                            <h6 className="mb-0 d-flex align-items-center gap-2" >
                                <span>
                                    <i class="ri-mail-line"></i>
                                </span>
                                Email:
                            </h6>

                            <p className="mb-0">admin@bus.com</p>

                        </ListGroupItem>
                        <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">

                            <h6 className="mb-0 d-flex align-items-center gap-2" >
                                <span>
                                    <i class="ri-phone-line"></i>
                                </span>
                                Phone:
                            </h6>

                            <p className="mb-0">987654321</p>

                        </ListGroupItem>
                        <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                            <div className="logo">
                                <div className="social__links d-flex align-items-center gap-4">
                                    <span>
                                        <Link to="#"><i class="ri-youtube-line"></i></Link>
                                    </span>
                                    <span>
                                        <Link to="#"><i class="ri-facebook-fill"></i></Link>
                                    </span>
                                    <span>
                                        <Link to="#"><i class="ri-instagram-line"></i></Link>
                                    </span>
                                    <span>
                                        <Link to="#"><i class="ri-github-fill"></i></Link>
                                    </span>
                                </div>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;