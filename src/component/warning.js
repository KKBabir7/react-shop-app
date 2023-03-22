// import React from 'react'

// const  Warning=({warning,setWarning})=> {
   
//   return (
//     <>
//         {  warning && 
//        <div
//        className={`warning ${warning ? 'alert-shown' : 'alert-hidden'}`} 
//      >
//             <div className='missing' >
//                 Items Already Add Cart
//             </div>    
//          </div>
//         }
//     </>
    
       
  
//   )
// }
// export default Warning



import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Warning({warning,setWarning}) {
  

  return (
    <Row className='warning'>
      <Col xs={6}>
        <Toast onClose={() => setWarning(false)} show={warning} delay={3000} autohide>
          <Toast.Header >       
          </Toast.Header>
          <Toast.Body>This Items Already Add!</Toast.Body>
        </Toast>
      </Col>
     
    </Row>
  );
}

export default Warning;