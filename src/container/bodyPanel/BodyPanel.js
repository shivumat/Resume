import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import SideBar from '../sideBar/SideBar';
import TopAppBar from '../sideBar/TopAppBar';
import Home from '../home/Home'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
}));

export default function BodyPanel() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Hidden smUp>
          <TopAppBar/>
      </Hidden>
      <Grid container className={classes.root}>
        <Hidden xsDown>
          <Grid item sm={3} md={2} lg={2} xl={2}>
            <SideBar/>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} md={10} lg={10} xl={10}>
            <Home/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
