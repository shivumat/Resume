import React from 'react';
import './SideBar.css';
import Link from '@material-ui/core/Link'
import Navigation from './navigation/Navigation';
import Logo from './logo/Logo';

export default function SideBar(props) {

  return (
    <div className="sideBar">
      <Link href="/" ><Logo/></Link>
      <Navigation handleChange={props.handleChange} handleSkillChange={props.handleSkillChange}/>
    </div>
  );
}
