import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Productlist from '../component/product'
import Img from '../allimage/img'
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Freeshepping from '../component/freeshepping';
import Homedata from '../data.js/homedata'
const Homepage=()=>{
const [homedata,setHomedata]=useState(Homedata)

     return(
        <>
        <Container fluid className='homepage'>
            <Carousel>
               <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={Img[6]}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <p>Exmple.com</p>
                  <h1>Your Shopping</h1>
                  <h5>Lorem Ipsum is simply dummy text ofthe printing and  <br></br>typesetting industry. Lorem Ipsum has been the industry's <br></br>standard dummy text ever since the 1500s, when an unknown </h5>
                  <Button><NavLink to='/product'>Go Shop</NavLink> </Button>
               </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={Img[7]}
                  alt="Second slide"
               />

               <Carousel.Caption>
               <p>Exmple.com</p>
                  <h1>Your Shopping</h1>
                  <h5>Lorem Ipsum is simply dummy text ofthe printing and  <br></br>typesetting industry. Lorem Ipsum has been the industry's <br></br>standard dummy text ever since the 1500s, when an unknown </h5>
                  <Button><NavLink to='/product'>Go Shop</NavLink> </Button>
               </Carousel.Caption>
               </Carousel.Item>
              
            </Carousel>
        </Container>  
         <br></br><br></br>
         <Freeshepping />
         <br></br><br></br>
         <Container className='imgproduct'>
             <Row>
               {
                  homedata && homedata.map((htems)=>{
                     const {id,image}=htems
                     return <Col md={4} sm={6} xs={6} className='my-3' key={id}>
                     <Card >
                        <Card.Img variant="top" src={image} />
                     </Card>       
                  </Col>
                  })
               }
               
               
               <Col md={4} sm={6} xs={6} className='my-3'>
                  <div className='productviewr'>
                        <NavLink to='/product'>
                            Browser All<br></br>
                            Product...
                        </NavLink>
                  </div>     
               </Col>
             </Row>
         </Container>
         <br></br><br></br> <br></br>
         <Container>
           <Row className='help-contact'>
					<Col md={3} sm={4} xs={12} >
						<div className="thumbnail">	
							<img className="img-responsive help-img" src={Img[8]} alt="..."/>
							<div className="caption">
								<h3>0% APR finance options</h3>
								<h5>On orders over £300</h5>
								<p><a href="#" className="btn btn-default" role="button">See options</a></p>
							</div>
						</div>
					</Col>
					<Col md={3} sm={4} xs={12} >
						<div className="thumbnail">	
							<img className="img-responsive help-img" src={Img[9]} alt="..." />
							<div className="caption">
								<h3>Free delivery</h3>
								<h5>Minimium order £100</h5>
								<p><a href="#" className="btn btn-default" role="button">Learn more</a></p>
							</div>
						</div>
					</Col>
					<Col md={3} sm={4} xs={12} >
						<div className="thumbnail">	
							<img className="img-responsive help-img" src={Img[10]} alt="..." />
							<div className="caption">
								<h3>Want to try it out in store?</h3>
								<h5>Find your nearest store.</h5>
								<p><a href="#" className="btn btn-default" role="button">Find your store.</a></p>
							</div>
						</div>
					</Col>
					<Col md={3} sm={4} xs={12} >
						<div className="thumbnail">	
							<img className="img-responsive help-img" src={Img[11]} alt="..." />
							<div className="caption">
								<h3>Need help?</h3>
								<h5>We are here to help.</h5>
								<p><a href="#" className="btn btn-default" role="button">Contact us</a></p>
							</div>
						</div>
					</Col>
				</Row>
        </Container>
        <Container>
            <section className="newslatter">
               <Row>
                  <center style={{paddingLeft:'10x',paddingright:'10px'}}>
                        <h2 className="news-title">Newsletter Signup</h2>
                        <p className="news-title-p">By subscribing to our newsletter you agree to our Terms &amp; Conditions &amp; Cookie Policy.</p>
                  </center><br/>
                     <Col md={3}>
                     </Col>
                     <Col md={6}> 
                        <InputGroup className="mb-3">
                           <Form.Control
                              placeholder="Recipient's username"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                           />
                            <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
                        </InputGroup>  
                        <br/>
                     </Col>
                     <Col md={3}>
                     </Col>
               </Row>
            </section>
        </Container>
        </>
     )
}
export default Homepage