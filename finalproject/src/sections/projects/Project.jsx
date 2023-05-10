import React from "react";
import "./project.css";
import { FaGithub } from "react-icons/fa";

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
              <strong>Features:</strong>
            </p>
            <ul>
              {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
              ))}
            </ul>
            {/* <p>
              Technologies used: {project.technologies.join(', ')}
            </p> */}
            <p>
              <strong>Technologies used:</strong> {' '}
              {project.technologies.map((tech, index) => (
                <span key={index} className="technology">{tech}{index < project.technologies.length - 1 ? ', ' : ''}</span>
              ))}
            </p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="github-link">
              <FaGithub />View Repository
            </a>
            <p>
              <strong>Guide:</strong> {project.guide}
            </p>
            <p className="challenge">
              <strong>Challenges Faced/Overcome:</strong> {project.challenge}
            </p>
            {/* Add other links here */}
          </div>
        </div>
      );
};

export default Project;