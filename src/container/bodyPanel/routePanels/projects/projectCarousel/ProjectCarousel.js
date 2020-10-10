import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core';
import Project from './project/Project';
import './ProjectCarousel.css'
 
export default function ProjectCarousel(props)
{
    return (
            <Paper variant="outlined" className="projectCarousel">
                <Carousel navButtonsAlwaysVisible = {true} animation="slide" autoPlay={false}
                    navButtonsAlwaysInvisible= {false} fullHeightHover ={false}> 
                    {
                        props.projects.map( (item, i) => <Project key={i} image={item.image} description={item.description} 
                                            title={item.title} tags={item.tags} handleSkillChange={props.handleSkillChange}/> )
                    }
                </Carousel>
            </Paper>
    )
}