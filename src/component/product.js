import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import { BsFillBagDashFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


import Useproductdata from '../data.js/productdata'
import Data from '../data.js/pdata'


const Productlist=({additem,disable,addfev,heartcolor})=>{

    // const [data,isloading,error]=Useproductdata()
    // const loadmsg=<p>Data loading</p>
    // const errormsg=error && <p>{error.message}</p>
   const [data,setData]=useState(Data)
   const [datac,setDatac]=useState(Data)
   const aalfilter=()=>{
    setData(datac)
   }
   const mensfilter=(catgo)=>{
       const measns=datac.filter((cv,ind)=>{
            return cv.category==catgo
       })
       setData(measns)
       
   }
   const womensfilter=(catgo)=>{
    const womeasns=datac.filter((cv,ind)=>{
         return cv.category==catgo
    })
    setData(womeasns)  
   }
   const electronics=(catgo)=>{
    const electronics=datac.filter((cv,ind)=>{
         return cv.category==catgo
    })
    setData(electronics)
    
    }
    const monitor=(catgo)=>{
        const monitor=datac.filter((cv,ind)=>{
             return cv.category==catgo
        })
        setData(monitor)
        
        }



  const plh=()=>{
    const min =data.sort((a, b) => a.price-b.price)
    const pricelth=data.filter((cv,ind)=>{
        return cv.price==min[ind].price
   })
   setData(pricelth)
  }
  const phf=()=>{
    const max =data.sort((a, b) => a.price-b.price)
    const maxprice=data.filter((cv,ind)=>{
        return cv.price==max[ind].price
   })
  
   setData(maxprice.reverse())
  }


const torated=()=>{
    const toprate =data.sort((a, b) => a.rating.count-b.rating.count)
    const topratestart=data.filter((cv,ind)=>{
        return cv.rating.count==toprate[ind].rating.count
   })
   setData(topratestart.reverse())
}
const latest=()=>{
    const latestproduct = data.slice(0,2)
    setData(latestproduct)
} 

// const [pricess, setPrice ] = useState(0);
// const [maxprice,seMaxprice]=useState(1000)
// const [minprice,setMinprice]=useState(0)
// const handleInput = (e)=>{
//     setPrice(e.target.value );
//     const pricerangr=data.filter((cv,ind)=>{
//         return cv.price<pricess
//    })
//     setData(pricerangr)
//   }
const [visiable,usevisiable]=useState(4)
const showmoreitems=()=>{
    usevisiable(visiable+4)
}


const [searchQuery, setSearchQuery] = useState("");
const [maxPrice, setMaxPrice] = useState(15000);;


const filteredData = data.filter((item) => {
    const titleMatches = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const priceInRange = item.price <= maxPrice;
    return titleMatches && priceInRange;
  });
 



  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setShowSidebar(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    return(
       <>
     
         <Container fluid>
             <Row> 
                <button onClick={toggleSidebar} className='Filterpro'>Filter Product</button>
             
                <Col md={3} className={`sidebar ${showSidebar ? 'show-sidebarproductfilter' : 'hide-sidebarproductfilter'}`}>
                   
                   <div className="shortproductdes">
                      <div className="fixeddrip">
                      <input
                            type="text"
                            placeholder="Search Product"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='searchfilterproduct'
                        />
                        <div className="shortname">
                            <h3>Category</h3>
                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                    <ToggleButton id="tbg-radio-1" value={1} onClick={()=>{
                                            aalfilter() 
                                            
                                        }}>
                                        All Shop 
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-2" value={2} onClick={()=>{
                                            mensfilter('men') 
                                        }}>
                                         Men's Clothing
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-3" value={3} onClick={()=>{
                                            womensfilter('women') 
                                        }}>
                                        Women's Clothing
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-4" value={4} onClick={()=>{
                                            electronics('electronics') 
                                        }}>
                                        Electronics
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-5" value={5} onClick={()=>{
                                            monitor('monitor') 
                                        }}>
                                        Monitor
                                    </ToggleButton>
                                </ToggleButtonGroup>
                        </div>
                        <br></br>
                        <div className="shortname">
                            <h3>Short By</h3>
                                <ToggleButtonGroup type="radio" name="optionssort" defaultValue={6}>
                                    <ToggleButton id="tbg-radio-6" value={6} onClick={()=>{
                                          latest() 
                                            
                                        }}>
                                      Recent Latest
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-7" value={7} onClick={()=>{
                                            // featured() 
                                        }}>
                                         Featured
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-8" value={8} onClick={()=>{
                                           torated() 
                                        }}>
                                        Top Rated
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-9" value={9} onClick={()=>{
                                            plh() 
                                        }}>
                                        Price(Lowest First)
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-10" value={10} onClick={()=>{
                                             phf() 
                                        }}>
                                       Price(Highest First)
                                    </ToggleButton>
                                </ToggleButtonGroup>
                        </div>
                        <br></br>
                        <div className="shortname">
                            <h3>Price Short</h3>
                            <div className="range-slider size-slider">
                                <div class="rangeinput">
                                    <input
                                    step="1"
                                    type="range"
                                    min="0"
                                    max="15000"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                </div>
                               <p className="takamaxprice"> <span>Taka</span> <span>{maxPrice}</span></p>
                           </div>
                        </div>
                      </div>
                    </div>
                  
                </Col>
                <Col md={9}>
                    <Row>    
                    {
                        filteredData && filteredData.slice(0,visiable).map((items)=>{   
                                const {id,title,price,description,image,rating:{rate,count},sliderImage:{img1,img2,img3}}=items
                                return (
                                    <Col className="my-2" lg={3} md={4} sm={4} xs={6} key={id}>
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={image} alt=""/>
                                            <div className="icon"  onClick={()=>addfev(items)
                                            }>
                                                <BsHeart style={{color:heartcolor}} className="heart"/>
                                            </div>
                                            
                                            <div className="under">
                                                <Button className="quick-view"><Link to={`/product/${items.id}`} className="quick-view" state={{title,price,id,image,img1,img2,img3,rate,count,description}} >+ Quick View</Link></Button>
                                                <Button className="w-icon"  onClick={()=>additem(items)}><BsFillBagDashFill className="iconbag"/></Button>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                        
                                                <h5>{title}</h5>
                                            
                                            <div className="product-price">
                                            {price}&nbsp;<p style={{color:'rgba(0,0,0,0.3)',fontSize:'15px',fontWeight:'bold',display:'inline-block'}}>Taka</p>
                                            </div>
                                        </div>
                                        <div className="product-ratting">
                                        <ReactStars size={20} value={rate} background={'rgba(5,55,0,1)' } edit={false}  activeColor='rgb(76, 217, 116)' />
                                        
                                        </div>
                                    </div>
                                </Col>
                                )
                        
                        })
                    

                        }
                    </Row>
                    <br></br>
                    <center><button onClick={showmoreitems} className="btn btn-primary btn-block loadmorelode" >Load More</button></center>
                </Col>
             </Row>

          
         </Container>
       
       <section>
              </section>
       </>
    )
}
export default Productlist