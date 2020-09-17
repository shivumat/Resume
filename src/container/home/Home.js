import React from 'react';
import './Home.css'
import Grid from '@material-ui/core/Grid';
import TitlePanel from '../titlePanel/TitlePanel';
import About from '../about/About';

export default function Home() {

  return (
      <Grid container className="home">
        <Grid className={"homeTitle"} item xs={12} sm={8} md={9} lg={9} xl={9}>
          <TitlePanel />
        </Grid>
        <Grid className={"homeAbout"} item xs={12} sm={4} md={3} lg={3} xl={3}>
          <About />
        </Grid>
      </Grid>
  );
}
