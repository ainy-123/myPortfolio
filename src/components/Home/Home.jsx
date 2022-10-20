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
            <ul className="typing">
                <li><span>A Quick Learner.</span></li>
                <li><span>A Web Developer.</span></li>
                <li><span>An Amateur Artist.</span></li>
                <li><span>A Software Engineer.</span></li>
                <li><span>A Proud Indian.</span></li>
            </ul>
            </div>
        </div>

    );
}

export default Home;