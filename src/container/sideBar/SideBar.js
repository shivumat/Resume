import React from 'react';
import './SideBar.css';
import logo from '../../static/images/logo.png'
import Navigation from '../navigation/Navigation';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function SideBar() {

  return (
    <div className="sideBar">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image className="logo" src={logo} rounded />
          </Col>
        </Row>
      </Container>
      <Navigation/>
    </div>
  );
}
