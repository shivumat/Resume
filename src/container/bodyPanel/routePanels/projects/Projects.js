import React from 'react';
import ProjectCarousel from './projectCarousel/ProjectCarousel';
import {useParams} from "react-router-dom";
import './Projects.css';
import projectList from '../../../../static/data/projects';
 
export default function Projects()
{
    const { skill } = useParams();

    function getProjectsForSkill(string){
        return projectList.filter(project => project.tags.includes(string));
    }

    const projects = (skill !== undefined) ? getProjectsForSkill(skill) : projectList;
    
    function getStringNormalCase(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="projects">
            <div className="projectsPanel">
                <div className="projectsHeader">
                    Projects  
                    <span>{(skill !== undefined) ? (" In " + getStringNormalCase(skill)) : ""}</span>
                </div>
                <div className="projectsCarouselPanel">
                    <ProjectCarousel projects={projects}/>
                </div>
            </div>
        </div>
    )
}
 