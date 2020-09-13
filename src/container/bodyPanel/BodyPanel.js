import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import SideBar from '../sideBar/SideBar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
}));

export default function BodyPanel() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Hidden xsDown>
        <Grid item sm={3} md={2} lg={2} xl={2}>
          <SideBar/>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        Hello
      </Grid>
      <Grid item xs={12} sm={3} md={4} lg={4} xl={4}>
        Bye
      </Grid>
    </Grid>
  );
}
