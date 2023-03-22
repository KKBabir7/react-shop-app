import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Img from '../allimage/img'

const Freeshepping=()=>{
  return (
    <>
       	<Container className="free">
			<div className="benefit-items">
				<Row>
					<Col md={4}>
						<div className="single-benefit">
							<div className="sb-icon">
								<img style={{width:'40px',height:'30px'}} src={Img[2]} alt=""/>
							</div>
							<div className="sb-text">
								<h6>Free Shipping</h6>
								<p>For all order over 99$</p>
							</div>
						</div>
					</Col>
					<Col md={4}>
						<div class="single-benefit">
							<div class="sb-icon">
								<img style={{width:'40px',height:'35px'}} src={Img[3]} alt=""/>
							</div>
							<div class="sb-text">
								<h6>Delivery On Time</h6>
								<p>If good have prolems</p>
							</div>
						</div>
					</Col>
					<Col md={4}>
						<div className="single-benefit">
							<div className="sb-icon">
								<img style={{width:'40px',height:'30px'}} src={Img[5]} alt=""/>
							</div>
							<div className="sb-text">
								<h6>Secure Payment</h6>
								<p>100% secure payment</p>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
    </>
  )
}
export default Freeshepping