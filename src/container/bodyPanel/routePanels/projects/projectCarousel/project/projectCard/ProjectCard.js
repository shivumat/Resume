import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './ProjectCard.css'

export default function ProjectCard(props) {

  return (
    <Card className="projectCard">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={props.image}
          title="Contemplative Reptile"
        />
    </Card>
  );
}