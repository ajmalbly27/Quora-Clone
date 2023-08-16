import React from "react";
import './Footer.css';

const Footer = () => {

    return(
        <div className="footer-container">
            <div className="footer-contactus-wrapper">
                <span>In case of any concern,&nbsp;</span>
                <span>Contact Us</span>
            </div>
            <div className="footer-copyright-wrapper">
                &copy; 2021 www.quora.com. All rights reserved.
            </div>
        </div>
    )
}
export default Footer;