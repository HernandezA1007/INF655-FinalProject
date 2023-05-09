import React from "react";
import "./project.css";

const Project = ({ project }) => {
    return (
        <div className="project">
          <div className="project-images">
            <img src={project.mainImage} alt={`${project.title} Main`} />
            <div className="project-small-images">
              <img src={project.smallImage1} alt={`${project.title} Small 1`} />
              <img src={project.smallImage2} alt={`${project.title} Small 2`} />
            </div>
          </div>
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              Technologies used: {project.technologies.join(', ')}
            </p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
            {/* Add other links here */}
          </div>
        </div>
      );
};

export default Project;