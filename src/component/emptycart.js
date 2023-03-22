import React from 'react'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import Img from '../allimage/img' 


const  Emptycart=({navigate,errorfev})=>{
  return (
      <>
         <Container fluid className="shopping-empty" >
                     <Container>
                        <Row>
                              <Col md={12}>
                                    <h3 style={{color:'#122b40'}}>{errorfev?<p>Your Favorite (0)</p> :<p>Your cart (0)</p>}</h3>
                                    <Row className="shopping-cart">
                                       <Col md={12}>
                                          <center>
                                             <img src={Img[0]}/>
                                          <h1>{errorfev ?<p>You have no Favorite items</p> :<p>You have no items in your cart</p>}</h1>
                                          <Button onClick={()=>{
                                             navigate('/')
                                          }} type="button" className="btn btn-primary btn-lg">Shop Now</Button>
                                          </center>
                                       </Col>
                                 </Row>
                                 </Col>						
                        </Row>
                     </Container>
                  </Container>
      </>
  )
}
export default Emptycart