import React from 'react';
import './SideBar.css';
import Link from '@material-ui/core/Link'
import Navigation from './navigation/Navigation';
import Logo from './logo/Logo';

export default function SideBar(props) {

  const takeToHome = () => {
    props.handleChange(0);
  }

  return (
    <div className="sideBar">
      <Link onClick={takeToHome}><Logo/></Link>
      <Navigation handleChange={props.handleChange} handleSkillChange={props.handleSkillChange}/>
    </div>
  );
}
