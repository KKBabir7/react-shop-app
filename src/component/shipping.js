import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
const Shipping=({gotoprice,gotodiscount})=>{
    console.log(gotoprice)
  return (
       <>
           	<Container>
			    <Row className="all-payment">
				    <Col md={7} className="back form">
					    
						<h3 style={{color:'#1199fa',marginTop:'15px',marginBottom:'15px'}}>Enter your shipping address</h3>
						
                        <form>
                            <div className="form-group">
                                <label for="examplefirstname">Your Name</label>
                                <input type="text" className="form-control" id="InputFirstname" placeholder="Enter your first name..."/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="Inputemail" placeholder="Enter your email..."/>
                            </div>
                            <div className="form-group">
                                <label for="examplephone">Phone </label>
                                <input type="number" className="form-control" id="Inputphone" placeholder="Enter your phone number..." />
                            </div>
                            <div className="form-group">
                                <label for="exampleaddress1">Address line </label>
                                <input type="text" className="form-control" id="Inputaddress" placeholder="Enter your address..." />
                            </div>
                            <Row>
                                <Col md={4}>
                                    <form>
                                        <div className="form-group">
                                            <label for="examplestate">State</label>
                                            <input type="text" className="form-control" id="Inpustate" placeholder="Enter your state..."/>
                                        </div>
                                    </form>
                                </Col> 	
                                <Col md={4}>
                                    <form>
                                        <div className="form-group">
                                            <label for="examplezipcode">Zip Code</label>
                                            <input type="number" className="form-control" id="Inputzipcode" placeholder="Enter your zip code..."/>
                                        </div>
                                    </form>
                                </Col> 	
                                <Col md={4}>
                                    <label style={{color:'rgba(0,0,0,0.6)',fontWeight
                                :'500'}} for="examplecountry">Country</label>
                                    <Form.Select aria-label="Default select example">
                                    <option>Select Country</option>
                                    <option value="1">Bangladesh</option>
                                    <option value="2">India</option>
                                    <option value="3">Nepal</option>
                                    </Form.Select>
                                </Col> 		
                            </Row>
                            <button type="button" className="btn c-payment btn-primary btn-lg">Continue to Payment</button>
                        </form>
							
						
					</Col>
					<Col  md={5}>
                        <div className='all-total'>
                            <Row>
                                <Col md={6} sm={6} xs={6}>
                                    <h4 className="t-t">Subtotal</h4>
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                               <h4>{gotoprice} <span style={{opacity:'0.6',fontSize:'18px'}}>Taka</span></h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={6} xs={6}>
                                   <h4 className="t-t">Discount</h4>
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                               <h4>{gotodiscount} <span style={{opacity:'0.6',fontSize:'18px'}}>Taka</span></h4>
                                </Col>
                            </Row>
                            <Row>
                            <hr className="u-border"/>
                                <Col md={6} sm={6} xs={6}>
                                    <h4 className="t-t">Total</h4>
                                        <p>*Custom duties or taxes not included</p>
                                    
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                               <h4>{(gotoprice-gotodiscount).toFixed(2)} <span style={{opacity:'0.6',fontSize:'18px'}}>Taka</span></h4>
                                </Col>
                            </Row>
                        </div>
					</Col>    
			    </Row>
		    </Container>
	   
       </>
  )
}
export default  Shipping