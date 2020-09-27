import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SideBar from '../bodyPanel/sideBar/SideBar';
import TopAppBar from '../bodyPanel/sideBar/TopAppBar';
import RoutePanels from '../bodyPanel/routePanels/RoutePanels'

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
      <TopAppBar/>
      <Grid container className={classes.root}>
        <Grid item sm={3} md={2} lg={2} xl={2}>
          <SideBar/>
        </Grid>
        <Grid item xs={12} sm={9} md={10} lg={10} xl={10}>
            <RoutePanels/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
