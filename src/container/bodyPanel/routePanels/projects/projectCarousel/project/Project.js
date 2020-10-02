import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './projectCard/ProjectCard';
import ProjectDescription from './projectDescription/ProjectDescription';

export default function Project(props) {

  return (
    <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <ProjectCard  {...props}/>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ProjectDescription  {...props}/>
        </Grid>
    </Grid> 
  );
}