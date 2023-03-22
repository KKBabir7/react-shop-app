import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Img from '../allimage/img'
const Footer=()=> {
  return (
   <>
    		<section className="footer">
		    <Container fluid>
			    <Row>
			        <Col md={3} sm={3} xs={12}  className="left-logo">
				       <img style={{width:'200px'}} src={Img[1]}/><br/>
						
                            <ul className='socail-icon'>
                                <li><a href='#'><FaFacebookF /></a></li>
                                <li><a href='#'><FaGooglePlusG /></a></li>
                                <li><a href='#'><FaTwitter /></a></li>
                            </ul>
                        
                        
					</Col>
					<Col md={3} sm={3} xs={12}  className="s-link">
				       
						    <p>E-COMMERCE</p>
						    <ul>
							    <li><a href="#"><i class="fa fa-angle-right"></i>
								 Como funciona
								</a></li>
							    <li><a href="#"><i class="fa fa-angle-right"></i>
								 Soluções
								</a></li>
							    <li><a href="#"><i class="fa fa-angle-right"></i>
								 Mapa dos Pontos
								</a></li> 
							</ul>
						
					</Col>
					<Col md={3} sm={3} xs={12}  className="s-link">
				     
						    <p>PONTO DE RETIRADA</p>
						    <ul>
							    <li><a href="#"><i class="fa fa-angle-right"></i>
								 Quero ser um ponto
								</a></li>
							    <li><a href="#"><i class="fa fa-angle-right"></i>
								 Benefícios
								</a></li>
							    <li><a href="#"><i class="fa fa-angle-right"></i>
								Requisitos
								</a></li> 
								<li><a href="#"><i class="fa fa-angle-right"></i>
								Acessar o sistema
								</a></li> 
							</ul>
						
					</Col>
					<Col md={3} sm={3} xs={12}  className="s-link">
				        
						    <p>SOBRE NÓS</p>
						    <ul>
							    <li><a href="#"><i class="fa fa-angle-right"></i>
								SOBRE NÓS
								</a></li>
							    <li><a href="#"><i class="fa fa-angle-right"></i>
								Blog
								</a></li>
							    <li><a href="#"><i class="fa fa-angle-right"></i>
								Imprensa
								</a></li> 
								<li><a href="#"><i class="fa fa-angle-right"></i>
								TrabalheAki
								</a></li>
								<li><a href="#"><i class="fa fa-angle-right"></i>
								Política de Privacidade

								</a></li> 
							</ul>
						
					</Col>
				</Row>
			</Container>
		</section>
   </>
  )
}
export default Footer