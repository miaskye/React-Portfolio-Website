import React from 'react';
import ProjectItem from './ProjectItem';
// import NewProj from "../assets/new-project-cs.jpg"
// import ProjectCs from "../assets/Project-coming-soon.jpg"
import { ProjectList } from "../helpers/ProjectList";


import "../styles/Project.css"

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} key={index} name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects
