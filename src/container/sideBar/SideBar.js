import React from 'react';
import './SideBar.css';
import Navigation from '../navigation/Navigation';
import Logo from '../logo/Logo';

export default function SideBar() {

  return (
    <div className="sideBar">
      <Logo/>
      <Navigation/>
    </div>
  );
}
