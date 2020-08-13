import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
// import DataArea from "./DataArea";

function Form1 () {
    return (
      <>
     <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="input" placeholder="Full Name" />
    
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    
    </Form.Row>    

    <Form.Group as={Col} controlId="message">
      <Form.Label>Message</Form.Label>
      <Form.Control type="text" style={{ height:"175px" }}/>
    </Form.Group>


  

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </>
      );
  };

export default Form1;
