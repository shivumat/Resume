import React from 'react';
import './About.css';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

export default function About() {


  const getAge = (d1) => {
    var d2 = new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

  const infoList = [
    {
      label : 'Name',
      data  : 'Shivank Mathur'
    },
    {
      label : 'Email',
      data  : 'shivumat@gmail.com'
    },
    {
      label : 'Phone',
      data  : '+91-810-798-9650'
    },
    {
      label : 'Date Of Birth',
      data  : 'July 19 1995'
    },
    {
      label : 'Age',
      data  : getAge(new Date('07/19/1995'))
    },
    {
      label : 'Nationality',
      data  : 'Indian'
    },
  ]


  return (
    <div className="about">
      <div className="content">
        <span className = "aboutHeader">ABOUT</span>
        <Divider className="headerLine"/>
        <Grid container spacing={2}>
          <Grid className='info' item={true} xs={6} sm={12} md={12} lg={12} xl={12}>
            {infoList.map((info,i)=><InfoComponent key={i} label = {info.label} data = {info.data}/>)}
          </Grid>
          <Grid item={true} xs={6} sm={12} md={12} lg={12} xl={12}>
            <span className = "aboutSummary">SUMMARY</span>
            <Divider className="summaryLine"/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function InfoComponent(props){
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

