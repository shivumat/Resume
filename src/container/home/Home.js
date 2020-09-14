import React from 'react';
import { makeStyles } from '@material-ui/core/styles';  
import Grid from '@material-ui/core/Grid';
import TitlePanel from '../titlePanel/TitlePanel';

  
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
          <TitlePanel/>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <div></div>
        </Grid>
      </Grid>
  );
}
