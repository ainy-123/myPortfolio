import React from "react";
import ProjectCard from "./ProjectCard";

function Projects(){
    return <div id="projects">
        <h1 style={{paddingBottom: "20px"}}>
            Personal Projects
        </h1>
        <ProjectCard projectName="Tic-Tac-Toe Game" projectImage="https://tse1.mm.bing.net/th?id=OIP.BT-EyIsAlL8HrVtTJvG-MwHaFu&pid=Api&P=0&w=199&h=154" title="Unbeatable AI driven Tic-Tac-Toe-Game" description="Visit the website and play with computer and with your friends as well😊." link="https://prasenjit07.github.io/Tic-Tac-Toe-Game/"/>
        <a href="https://drive.google.com/file/d/1UeGQI_20gsDVVa2SdabtT2c0_wQKh0jd/view?usp=sharing" ><button style={{padding : "10px", marginBottom: "20px" ,borderRadius:"10px"}}>Download My Resume</button></a>
    </div>
}

export default Projects;