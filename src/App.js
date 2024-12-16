import './App.css';
import React, { Component } from 'react'
import Menus from './Component/Menus/Menus';
import {Container, Row, Col} from 'react-bootstrap';
import RightSide from './Component/RightSide/RightSide';
import LeftSide from './Component/LeftSide/LeftSide';

export default class App extends Component {
  render() {
    return (
      <>
        <Menus/>
        <Container>
          <Row className='d-flex align-items-center flex-wrap'>
            <Col xs={12} sm={6}>
              <LeftSide/>
            </Col>
            <Col xs={12} sm={6}>
              <RightSide />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}