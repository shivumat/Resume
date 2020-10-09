import React from 'react';
import './Home.css'
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import TitlePanel from './titlePanel/TitlePanel';
import About from '../home/about/About';

export default function Home() {

  return (
    <Fade in={true} timeout = {1000}>
      <Grid container className="home">
        <Grid className={"homeTitle"} item xs={12} sm={8} md={8} lg={8} xl={8}>
          <TitlePanel />
        </Grid>
        <Grid className={"homeAbout"} item xs={12} sm={4} md={4} lg={4} xl={4}>
          <About />
        </Grid>
      </Grid>
    </Fade>
  );
}
