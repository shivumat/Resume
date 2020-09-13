import React from 'react';
import './Logo.css';
import logo from '../../static/images/logo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Logo(props) {

  return (
    <Container>
        <Row>
        <Col >
            <Image className="logo" src={logo} rounded onClick = {props.onclick}/>
        </Col>
        </Row>
    </Container>
  );
}
