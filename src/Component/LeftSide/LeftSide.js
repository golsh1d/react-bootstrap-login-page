import React, { Component } from 'react'
import {Button , Form} from 'react-bootstrap';

export default class LeftSide extends Component {
  render() {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        <Button type="submit" style={{ backgroundColor : '#7360E2' , borderColor : '#7360E2' }}>
          Submit
        </Button>
      </Form>
    )
  }
}