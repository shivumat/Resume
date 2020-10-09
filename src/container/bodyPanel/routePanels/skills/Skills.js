import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Skill from './skill/Skill';
import skills from '../../../../static/data/skills'
import './Skills.css';

export default function Skills()
{
    return (
        <Fade in={true} timeout = {1000}>
            <div className="skills">
                <div className="skillsHeader">
                    Skills
                </div>
                <Grid container spacing={2}>
                    {skills.map((skill, i) => <Skill skill={skill} key={i}/>)}
                </Grid>
            </div>
        </Fade>
    )
}
 