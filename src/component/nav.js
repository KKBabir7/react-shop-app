import React,{ useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";
import Img from '../allimage/img'
function Navigation({addproduct,addfevlength,logvalue}) { 
  const [sticky, setSticky] = useState(false)
  const handleScroll = () => {
      setSticky(window.pageYOffset > 0);
    };
  React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const navDropdownTitle =()=>{
           return 'Account'
    } 

  
//     const [isloged,setIsloged]=useState(null)
    

// const hnj=()=>{
// setIsloged({logvalue:logvalue})
// }
// console.log(isloged)
// useEffect(()=>{
//   hnj()
// },[])
  return (
    <>
      <Navbar bg="light" fixed="top" expand="lg" className={sticky? 'isitsdone' : 'notitsdone'}>
        <Container fluid style={{background:'#fff'}}>
          <Navbar.Brand><NavLink to='/' ><img src={Img[1]} /> </NavLink></Navbar.Brand>
          <NavLink className={addproduct==0? 'carticonanimate' :'carticon'} id='displayscrysmall' to='/cart'><BsFillCartPlusFill color={addproduct==0?'#ff4436':'rgb(76, 217, 116)'} /><sup style={{color:addproduct==0?'red':'rgb(76, 217, 116)'}} >{addproduct}</sup></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <NavLink to='/' >Home</NavLink>
              <NavLink to='/' >Blog</NavLink>
              <NavLink to='/' >About</NavLink>
              <NavLink to='/sign' className='regbutton1'><BsFillPersonFill/> Sign in</NavLink>
              <NavLink to='/log' className='regbutton'><BsBoxArrowRight/> Log In</NavLink>
              {/* {
                isloged=='' ?  : <NavLink to='/log' className='regbutton'><BsBoxArrowRight/> Log Out</NavLink>
              } */}
              
              <NavDropdown title={navDropdownTitle()} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='namesection'>
                Hellow...<br></br>
                 {/* <span>{logvalue.email}</span>  */}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Order
              </NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/fev" style={{width:'100%',padding:'6px 0px 6px 0px',marginLeft:'0px',background:'none'}}>Favorite list <span style={{color:'#76BC42',fontWeight:'bold',fontSize:'18px'}}>( {addfevlength} )</span></NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Adress</NavDropdown.Item>
            </NavDropdown>
            <NavLink className={addproduct==0? 'carticonanimate' :'carticon'} id='displaycrek' to='/cart'><BsFillCartPlusFill color={addproduct==0?'#ff4436':'rgb(76, 217, 116)'} /><sup style={{color:addproduct==0?'red':'rgb(76, 217, 116)'}} >{addproduct}</sup></NavLink>
              {/* <NavLink to='/fev'>Fev<sup></sup></NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br><br></br><br></br><br></br>
    </>
    
  );
}

export default Navigation;