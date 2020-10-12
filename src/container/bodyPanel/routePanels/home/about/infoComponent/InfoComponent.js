import React from 'react';
import './InfoComponent.css';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


export default function InfoComponent(props){

    return (
        <React.Fragment>
        <div className="aboutInfo">
            <Grid container>
                <Grid item={true} xs={4} sm={4} md={4} lg={4} xl={4}>
                <span className = "aboutLabel">{props.label}</span>
                </Grid>
                <Grid item={true} xs={8} sm={8} md={8} lg={8} xl={8}>
                <span className = "aboutData">: {props.data}</span>
                </Grid>
            </Grid>
        </div>
        <Divider className="aboutDivider"/>
        </React.Fragment>
    );
}