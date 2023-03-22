import { useEffect, useState,useContext } from "react"
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';

import Emptycart from '../component/emptycart'


const Cart=({addcart,seCart,gotoapss})=>{
   const navigate =useNavigate()

 
   console.log(addcart)

 
   const handeldelete=(id)=>{
        const deleteitms=addcart.filter((items)=>items.id !==id )     
        seCart(deleteitms)  
   }
   const [originalP,setoriginalP]=useState(0)
   const [discountP,setDiscount]=useState(0)
   const [totalP,settotalP]=useState(0)
   const [error,setError]=useState(false)
   const allPrice=()=>{
      let ans=0
      addcart.map((items)=>{
         ans +=items.amount * items.price      
      })
      setoriginalP(Number(ans).toFixed(2))


      const discount =10;
      setDiscount(Number(originalP*discount/100 ).toFixed(2))
      settotalP(Number(originalP-discountP ).toFixed(2))

     if(originalP==0){
     setError(true)
     }
     else{
       setError('')
     }
   }
   useEffect(()=>{
      allPrice()
    }) 
   const [number, setNumber] = useState(false);
   const updateQuantity = (value, num) => {  
      if(value.amount<10 || num==-1){
         let ind=-1
         addcart.forEach((data,index) =>{
            if(data.id === value.id){
               ind=index
            }
         }) 
         const temparr=addcart
         temparr[ind].amount +=num
            if(temparr[ind].amount===0)
            temparr[ind].amount=1 
            temparr[ind].quprice= Number(value.price *value.amount ).toFixed(2)
            seCart([...temparr])
        }
      }


      gotoapss(originalP,discountP)
     return(
        <>
        <Container fluid className={error ? 'notshow': 'yesshow'}>
        
             <Container>
                <Row>
                    <Col md={7} className="allcartproduct">
                      <div className="leftsidecarthistory">
                           {
                           addcart && 
                           addcart.map((value,index)=>{
                              const {id,image,title,price,amount,quprice}=value
                              return  <Card  key={id} className='cart-product'>
                              <Card.Body>
                                    <Row>
                                       <Col md={2}>
                                          <div className="product-img">
                                             <img src={image} /> 
                                          </div>
                                       </Col>
                                       <Col md={8}>
                                        <div className="product-titleprice">
                                          <h4>{title}</h4> 
                                          <h3 className="product-price"><span>Price : </span>{price} Tk.</h3> 
                                          <p className="product-updateprice"><span>Quantity Price : </span>{quprice} Tk.</p>
                                          <ButtonGroup size="sm" className="btngroup">
                                                <Button onClick={()=>updateQuantity(value,+1)}>+</Button>
                                                <Button>{amount}</Button>
                                                <Button onClick={()=>updateQuantity(value,-1)}>-</Button>
                                          </ButtonGroup>
                                        </div>
                                         
                                       </Col>
                                       <Col md={2}>
                                       <Button className="croxremove" onClick={()=>handeldelete(id)}><AiOutlineClose /></Button>
                                       </Col>
                                    </Row> 
                                 </Card.Body>
                                
                           </Card>

                           })
                           }
                      </div>
                    </Col>
                    <Col md={5}>
                      <div className='totalhistory'>
                        <h3>Order's Product ( {addcart.length} Items )</h3>
                        <div className="dipcost">
                             <p>Original Price</p>
                             <h5>{originalP} Tk.</h5>
                        </div>
                        <div className="dipcost">
                             <p>Discount Price</p>
                             <h5>{discountP} Tk.</h5>
                        </div>
                        <div className="dipcost">
                             <p>Delivery</p>
                             <h5 style={{color:'red'}}>Free</h5>
                        </div>
                        <hr></hr>
                        <div className="dipcost">
                             <h3>Total Price</h3>
                             <h2>{totalP} Tk.</h2>
                        </div>
                        
                           <Button><NavLink to='/totalshoplist' >Checkout</NavLink></Button>
                           
                        </div>
                    </Col>
                </Row>
             </Container>
        </Container>
       
      
     
      {
         error &&  <Emptycart navigate={navigate}/>
      }
        </>
     )
}
export default Cart