import React from "react";
import styles from "./Navbar.css";

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollDown < 400 || document.documentElement.scrollDown < 400) {
//     document.getElementById("navbar").style.top = "0";
//     document.getElementById("navbar").style.backgroundColor = "rgb(190, 138, 238)";

//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
// }


function Navbar(){
    return <div className="navbar">
      <div className="row">  
          <div className="col-md-4 home-btn"><a href="#home">Home</a></div>
          <div className="col-md-4 dropdown-content">
            <a href="#quotes">Today's Quote</a>
            <a href="#aboutMe">AboutMe</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#ContactMe">Contact</a></div>
          <div className="col-md-4 dropdown"><a  className="dropbtn">
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
          </a></div>
        
        </div>
    </div>
    
      {/* <ul>
        <li><a href="#home">Home</a></li>
        <li className="dropdown" >
          <a  className="dropbtn">
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
          </a>
          <div className="dropdown-content">
            <a href="#quotes">Today's Quote</a>
            <a href="#aboutMe">AboutMe</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#ContactMe">Contact</a>
          </div>
        </li>
      </ul> */}
}

export default Navbar;