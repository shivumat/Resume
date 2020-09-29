import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core';
import Image from 'react-bootstrap/Image'
import './ProjectCarousel.css';
import projectList from '../../../../../static/data/projects'
 
export default function ProjectCarousel()
{
    return (
        <div className="projectCarousel">
            <Paper elevation={3} variant="outlined">
            <Carousel navButtonsAlwaysVisible = {true} navButtonsAlwaysInvisible = {false} animation="slide" autoPlay={false}> 
                {
                    projectList.map( (item, i) => <Item key={i} image={item.image} description={item.description} /> )
                }
            </Carousel>
            </Paper>
        </div>
    )
}
 
function Item(props)
{
    return (
        <React.Fragment>
            <Image className="projectImage" src={props.image} rounded/>
            <p>{props.description}</p>
        </React.Fragment>
    )
}