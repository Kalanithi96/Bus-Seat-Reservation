import React from "react";

import {Link} from 'react-router-dom';
import "./Footer.css";


const Footer = () => {
    return <footer className="footer">
        <div className="foot">
            <span className="footer-heading">
                <h5 > <span  className="footer-heading" >Contact:</span> </h5>
            </span>
            <span>
                <div>
                    <i className="ri-map-pin-line"></i>
                    <h6 className = "footer-heading">Address:</h6>
                </div>
                <div>
                    <p>Peelamedu, Coimbatore</p>
                </div>
            </span>
            <span>
                <div>
                <i className="ri-mail-line"></i>
                <h6 className="footer-heading">Email:</h6>
                </div>
                <div>
                    <p>admin@bus.com</p>
                </div>
            </span>
            <span>
                <div>
                <i className="ri-phone-line"></i>
                <h6 className="footer-heading">Phone Number:</h6>
                </div>
                <div>
                    <p>9876543210</p>
                </div>
            </span>
        
            <span className="footer-links-container">
                <span>
                    <Link  to="#"><i className="ri-youtube-line"></i></Link>
                </span>
                <span>
                    <Link to="#"><i className="ri-facebook-fill"></i></Link>
                </span>
                <span>
                    <Link to="#"><i className="ri-instagram-line"></i></Link>
                </span>
                <span>
                    <Link to="#"><i className="ri-github-fill"></i></Link>
                </span>                            
            </span>
        </div>
    </footer>
};

export default Footer;