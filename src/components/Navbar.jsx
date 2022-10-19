import React from "react";

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
    return <nav id="navbar">   
      <ul>
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
      </ul>
    </nav>
}

export default Navbar;