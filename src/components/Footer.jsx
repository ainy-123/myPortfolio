import React from "react";
import ContactMe from "./ContactMe";
import Feedback from "./feedback";

function Footer(){
    return (
        <div id="footer">
            <Feedback />
            <ContactMe />
        </div>
    );
}

export default Footer;