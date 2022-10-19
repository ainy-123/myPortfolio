import React from "react";

function ProjectCard(props)
{
return (<div className="project-card">
<div className="project-card-inner">
<div className="project-card-front">
<img src={props.projectImage} alt="Avatar"/>
    <p style={{padding:'5px'}}>{props.projectName}</p>
</div>
<div className="project-card-back">
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <a href={props.link}><button>Visit</button></a>
</div>
</div>
</div>);
}

export default ProjectCard;