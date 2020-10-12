import React from 'react';
import ProjectCarousel from './projectCarousel/ProjectCarousel';
import Fade from '@material-ui/core/Fade';
import './Projects.css';
import projectList from '../../../../static/data/projects';
 
export default function Projects(props)
{
    const {skill} = props;

    function getProjectsForSkill(string){
        return projectList.filter(project => project.tags.includes(string));
    }

    const projects = (skill !== "") ? getProjectsForSkill(skill) : projectList;
    
    function getStringNormalCase(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        
        <Fade in={true} timeout = {1500}>
            <div className="projects">
                {(projects !== undefined && projects.length !== 0) ? 
                <div className="projectsPanel">
                    <div className="projectsHeader">
                        Projects  
                        <span>{(skill !== "") ? (" In " + getStringNormalCase(skill)) : ""}</span>
                    </div>
                    <div className="projectsCarouselPanel">
                        <ProjectCarousel handleSkillChange={props.handleSkillChange} projects={projects}/>
                    </div>
                </div> :
                <div id="notfound">
                    <div class="notfound">
                        <div class="notfound-404">
                            <h1>Oops!</h1>
                            <h2>Some Error Happened</h2>
                        </div>
                        <a href="/Projects">Please Go Back To All Projects</a>
                    </div>
                </div>}            
            </div>
        </Fade>
    )
}
 