import React from "react";
import "./AboutMe.css";

function AboutMe(){
    return <div id="aboutMe">
        <h1 style={{color:"rgb(8, 8, 32)"}}>About Me</h1>
        <h2 style={{color:"blueviolet"}}>---who i am---</h2>
        <div id="description"><p>I am Ainy Kumari, hailing from Bihar and currently pursuing my B.Tech in Electronics engineering at IIT BHU. I have been an internee at Qualcomm. I have contributed to various projects under open source Program named GSSoC'21 and was recognised as one of the top performers. I believe, I am an Enthusiastic learner skilled in competitive programming, data structures, algorithms, web development and exploratory data analysis.
        </p>
        <br/>
        <p>
            I am currently doing an internship in a start-up named TradeX, which is online trading company and works on the principle of predicting future based on opinion exchange on current world events.
        </p></div>
    </div>
}

export default AboutMe;