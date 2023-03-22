import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Fadwar({itemfv,setitemsfv}) {
  

  return (
    <Row className='warning'>
      <Col xs={6}>
        <Toast onClose={() => setitemsfv(false)} show={itemfv} delay={3000} autohide>
          <Toast.Header >       
          </Toast.Header>
          <Toast.Body>Items Add Fev List!</Toast.Body>
        </Toast>
      </Col>
     
    </Row>
  );
}

export default Fadwar;