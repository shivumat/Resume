import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './ProjectDescription.css'

export default function ProjectDescription(props) {

  return (
    <Card className="projectDescription">
        <CardContent>
          <Typography gutterBottom variant="h7" component="h3">
            {props.title}
          </Typography>
          <Typography className="description" color="textSecondary" component="p">
            {props.tags.map( (item, i) => <Link key={i} href={'/Projects/'+item}>#{item} </Link> )}
          </Typography>
          <Typography className="description" variant="body2" color="textSecondary" component="div">
            {props.description}
          </Typography>
        </CardContent>
    </Card>
  );
}