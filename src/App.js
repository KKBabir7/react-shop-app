import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Navigation from './component/nav'
import Homepage from './page/home';
import Productlist from './component/product'
import Cart from './page/cart'
import Warning  from './component/warning';
import Fewarning from './component/fevwarning'
import Itoser from './component/itoser'
import Fev from './page/fev';
import Fevaddw from './component/fevaddwar'
import Viewproduct from './component/viewproduct';
import Totalshoplist from './component/shipping'
import Footer  from './component/footer';
import Sign from './page/sign'
import Log from './page/log'
function App() {
 
  const [cart,seCart]=useState([])
  const [warning,setWarning]=useState(false)
  const [itemstoster,setItemsToster]=useState(false)
  const additem=(items)=>{ 
    // let itspresent=false
    seCart([...cart,items]) 
    const ItemsExist = cart.find(item => item.id === items.id)
    if (ItemsExist) {
      seCart(
        cart.map(item =>
          item.id === items.id
            ? { ...ItemsExist }
            : item
        )
        
      );
     setWarning(true)
     setItemsToster(false)
    } else {
      seCart([...cart, { 
        ...items  // <-- Change here
      }]);
      
          setItemsToster(true)
          setWarning(false)
      
      
    }
    // if(itspresent){
    //   setWarning(true)
    //   return
    // }
  // for(let i=0 ;i<many.length;i++){
  //   if(many[i]==many[i]){
  //       console.log(many[i])
  //   }
  //   if(!(many[i]==many[i])){
  //     console.log('nor')
  //   }
  // } 
 

}
const [fwarning,setFwarning]=useState(false)
const [itemfv,setitemsfv]=useState(false)
const [heartcolor, sethColors] = useState("");
const [fev,setfev]=useState('')
const addfev=(items)=>{
  setfev([...fev,items])
 
  const ItemsExist = fev.find(item => item.id === items.id)
  if (ItemsExist) {
    setfev(
      fev.map(item =>
        item.id === items.id
          ? { ...ItemsExist }
          : item
          
          )
          
        );
     
    setFwarning(true)
    setitemsfv(false)
  }
   else {
    setfev([...fev, { 
      ...items 
    }]);  
    sethColors('red')  
    setFwarning(false)
    setitemsfv(true)
  }
}
const [orjinalk,setorjinal]=useState(0)
const [discountprice,setdiscountprice]=useState(0)
const orginalprice=(carttotalprice,discountP)=>{
  setorjinal(carttotalprice)
  setdiscountprice(discountP)
}

const [logvalue,setLogvalue]=useState(null)
const clcvalue=(clcdata)=>{
  setLogvalue(clcdata)
  
}

  return (
   <>
   <BrowserRouter>
      <Navigation addproduct={cart.length}  addfevlength={fev.length} logvalue={logvalue}/>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/sign' element={<Sign />}></Route>
          <Route path='/log' element={<Log colectvalue={clcvalue}/>}></Route>
          <Route path='/product' element={<Productlist additem={additem} addfev={addfev} heartcolor={heartcolor}/>}></Route>
          <Route path='/product/:id' element={<Viewproduct addvcart={cart} sevCart={seCart} setWarning={setWarning} setItemsToster={setItemsToster}/>} />
          <Route path='/cart' element={<Cart addcart={cart} seCart={seCart}  gotoapss={orginalprice}/>} />
          <Route path='/fev' element={<Fev fev={fev} setfev={setfev} additem={additem}/>}></Route> 
          <Route path='/totalshoplist' element={<Totalshoplist gotoprice={orjinalk} gotodiscount={discountprice}/>}></Route>
      </Routes>
      <Warning warning={warning} setWarning={setWarning}/>
      <Itoser itemstoster={itemstoster} setItemsToster={setItemsToster}/>
      <Fewarning fwarning={fwarning}  setFwarning={setFwarning}/>
      <Fevaddw itemfv={itemfv} setitemsfv={setitemsfv}/>
      <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
