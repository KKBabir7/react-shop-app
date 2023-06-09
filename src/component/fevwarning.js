
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Fewarning({fwarning,setFwarning}) {
  

  return (
    <Row className='warning'>
      <Col xs={6}>
        <Toast onClose={() => setFwarning(false)} show={fwarning} delay={3000} autohide>
          <Toast.Header >       
          </Toast.Header>
          <Toast.Body>Already Add Favorite List!</Toast.Body>
        </Toast>
      </Col>
     
    </Row>
  );
}

export default Fewarning;