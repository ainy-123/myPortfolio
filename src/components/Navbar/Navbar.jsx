import React from "react";
import "./Navbar.css";

function Navbar(){
    return <div id="navbar">
      <div className="row">  
          <div className="col-md-2 home-btn"><a href="#home">Home</a></div>
          <div className="col-md-8 dropdown-content">
            <a href="#quotes">Today's Quote</a>
            <a href="#aboutMe">AboutMe</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#ContactMe">Contact</a></div>
          <div className="col-md-2 dropdown"><a  className="dropbtn">
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
          </a></div>
        
        </div>
    </div>
}

export default Navbar;