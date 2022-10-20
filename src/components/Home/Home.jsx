import React from "react";
import styles from "./Home.css";


function Home(){
    return (
        <div id="home">
            <p id="myself">I'm</p>
            <h1 id="name">Ainy Kumari</h1>
            <img src=
            "https://avatars.githubusercontent.com/u/61025442?s=400&u=c453cb5379500ddbebd7561d57fb1fd13f3272aa&v=4" id="mypic" alt="Myself"/> 
            <br />
            <div id="intro">
            <div className="fixed"><h1>I am</h1></div>
            <ul className="typing">
                <li><span>a quick Learner.</span></li>
                <li><span>a web Developer.</span></li>
                <li><span>an amateur Artist.</span></li>
                <li><span>a software Engineer.</span></li>
                <li><span>a proud Indian.</span></li>
            </ul>
            </div>
        </div>

    );
}

export default Home;