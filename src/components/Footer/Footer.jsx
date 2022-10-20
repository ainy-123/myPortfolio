import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import Feedback from "../Feedback/feedback";
import "./Footer.css";

function Footer(){
    return (
        <div id="footer">
            <Feedback />
            <ContactMe />
        </div>
    );
}

export default Footer;