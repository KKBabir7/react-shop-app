import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Emptycart from '../component/emptycart'
const Fev=({fev,additem,setfev})=> {
  const navigate =useNavigate()
  const handeldelete=(id)=>{
    const deleteitms=fev.filter((items)=>items.id !==id )     
    setfev(deleteitms)  
  }
const [errorfev,seterrorfev]=useState(false)
const errorfeveroti=()=>{
    if(fev==''){
       seterrorfev(true)
    }
    else{
      seterrorfev(false)
    }
}
useEffect(()=>{
  errorfeveroti()
})

  return (
       <>
      
       <Container>
           <Row className='fevsection'>
            {
              fev &&  fev.map((items,index)=>{
                const {id,title,price,image}=items
                return (
                  <Col md={3} sm={4} xs={6} className="my-2 d-flex " key={id} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} />
                          <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            {price} <span>Taka</span>
                            </Card.Text>
                              <Button className="w-icon"  onClick={()=>additem(items)}>Add Cart</Button>
                              <Button className="croxremove" onClick={()=>handeldelete(id)}><AiOutlineClose /></Button>
                          </Card.Body>
                        </Card>
                  </Col>
                )
                
              })
              
            }
              
           </Row>
       </Container>
       {
         errorfev &&  <Emptycart navigate={navigate} errorfev={errorfev}/>
      }
       </>
  )
}
export default Fev