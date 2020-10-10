import React from 'react';
import './Bio.css';
import InfoComponent from './infoComponent/InfoComponent';
import Summary from './summary/Summary';
import DownloadResume from './downloadResume/DownloadResume'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import infoList from '../../../../../static/data/infoList';

export default function Bio() {

  return (
    <div className="bio">
      <div className="content">
        <span className = "bioHeader">BIO</span>
        <Divider className="headerLine"/>
        <Grid container spacing={2}>
          <Grid className='info' item={true} xs={6} sm={12} md={12} lg={12} xl={12}>
            {infoList.map((info,i)=><InfoComponent key={i} label = {info.label} data = {info.data}/>)}
          </Grid>
          <Grid className='summaryPanel' item={true} xs={5} sm={12} md={12} lg={12} xl={12}>
            <Summary/>
          </Grid>
        </Grid>
        <DownloadResume/>
      </div>
    </div>
  );
}


