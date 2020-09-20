import React from 'react';
import './About.css';
import Divider from '@material-ui/core/Divider';

export default function About() {

  return (
    <div className="about">
      <div className="content">
        <div className="header">
          ABOUT
          <Divider className="headerLine"/>
        </div>
        <Divider className="navigationDivider"/>
        <Divider className="navigationDivider"/>
        <Divider className="navigationDivider"/>
        <Divider className="navigationDivider"/>
        <Divider className="navigationDivider"/>
        <Divider className="navigationDivider"/>
        <Divider className="navigationDivider"/>
      </div>
    </div>
  );
}

