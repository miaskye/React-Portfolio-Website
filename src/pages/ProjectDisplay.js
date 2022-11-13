import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub'
import "../styles/ProjectDisplay.css"


const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    
    return (
        <div className="project">
            <h1>{id}</h1>
            <h1>{project.name}</h1>
            <img alt="hello world" src={project.image} />
            
            <GitHubIcon />
        </div>
    )
}

export default ProjectDisplay
