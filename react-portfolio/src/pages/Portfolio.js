import React from "react";
import ProjectItem from "../components/ProjectItem";
import {ProjectList} from "../helpers/ProjectList";
import "../styles/Portfolio.css";

function Portfolio() {
    return (
        <div className="projects">
            <h1>My Portfolio</h1>
            <div className="projectList">
                {ProjectList.map((project) => {
                    return <ProjectItem name={project.name} image={project.image} url={project.url} />;
                })}

            </div>
        </div>
    );
}

export default Portfolio;