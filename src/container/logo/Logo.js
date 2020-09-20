import React from 'react';
import './Logo.css';
import logo from '../../static/images/logo.png'
import Image from 'react-bootstrap/Image'

export default function Logo() {

  return (
            <Image className="logo" src={logo} rounded/>
  );
}
