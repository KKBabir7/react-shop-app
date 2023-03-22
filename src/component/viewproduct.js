import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Pdata from '../data.js/pdata'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactStars from "react-rating-stars-component";

import UncontrolledExample from '../component/tabs';
import Freeshepping  from '../component/freeshepping';
const Viewproduct=({addvcart,sevCart,setWarning,setItemsToster})=>{

   const location=useLocation()
   console.log(location) 
    const thisProduct = Pdata.find(prod => prod.id === location.state.id)
	 
const productDetailsCart =(thisProduct)=>{
    
	sevCart([...addvcart,thisProduct])
	 console.log(addvcart)

	 const ItemsExist = addvcart.find(item => item.id === thisProduct.id)
	 if (ItemsExist) {
		sevCart(
			addvcart.map(item =>
		   item.id === thisProduct.id
			 ? { ...ItemsExist }
			 : item
		 ) 
	);
	  setWarning(true)
	  setItemsToster(false)
	 } else {
		sevCart([...addvcart, { 
			...thisProduct  // <-- Change here
		  }]);
	   
		   setItemsToster(true)
		   setWarning(false)
	   
	   
	 }
}
  return (
    <>
       <Container fluid>
		    <Container>
			    <Row>
				    <Col md={7} className="slidesse">
					<Carousel showArrows={true} >
                <div>
                    <img src={location.state.image} />
                    
                </div>
                <div>
                    <img src={location.state.img1} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={location.state.img2} />
                   
                </div>
                <div>
                    <img src={location.state.img3} />
                   
                </div>
                
            </Carousel>
					</Col>
					<Col md={5} className="t-m">
						<div className='t-caption'>
					        <h1>{location.state.title}</h1>
					    </div>
						
						<div className="viewproduct-ratting">
                                   <ReactStars size={20} value={location.state.rate}   edit={false}  activeColor='rgb(76, 217, 116)' />
								   <div className='count'>
									  <p>{location.state.count}<span> Ratting</span></p> 
								   </div>
                                </div>
					    <hr></hr>
						<div className='viewtaka'>
							<h2><span id="prices">{location.state.price} Taka</span></h2>
							<p style={{color:'rgb(76, 217, 116)'}}>You save: 91 (63%)</p>
							<p>(Inclusive of all taxes)</p>
						</div>
                        <hr></hr>
						<div className='viweofferdiscount'>
                            <h5>Offers and Discounts</h5>
							<p>No Cost EMI on Credit Card</p>
							<p>No Cost EMI on Credit Card</p>
						</div>
						   <button className='btn btn-primary addviewcard' onClick={()=>{
						  productDetailsCart(thisProduct)
						}}
							
						   >Add To Cart</button>
					    
						
						
						
					</Col>
			    </Row>
				<br></br><br></br><br></br>
				<Row>
					<Col>
					<div className='navstabs'>
                        <UncontrolledExample des={location.state.description}  />
                    </div>
					</Col>
				</Row>
				<br></br><br></br>
				<Freeshepping />
				<br></br><br></br>
		    </Container>
	    </Container>
    </>
  )
}
export default Viewproduct