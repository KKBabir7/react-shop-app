
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Itoser({itemstoster,setItemsToster}) {
  

  return (
    <Row className='warning'>
      <Col xs={6}>
        <Toast onClose={() => setItemsToster(false)} show={itemstoster} delay={3000} autohide>
          <Toast.Header >       
          </Toast.Header>
          <Toast.Body>Items Added!</Toast.Body>
        </Toast>
      </Col>
     
    </Row>
  );
}

export default Itoser;