import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import './About.css';

export default function Skills()
{
    return (
        <Fade in={true} timeout = {1000}>
            <div className="about">
                <div className="aboutHeader">
                    About
                </div>
            </div>
        </Fade>
    )
}
 