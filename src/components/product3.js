
import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";
import { addTocart } from "../cart/cartManagement";

import "../styles/product.css"

const Productitem =(x)=>{
 

  let [Products, setProducts] = useState("");

  const fetchData = async () => {
      try {

          const data = await axios.get(" https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bcategories.slug:snacks%3Bstatus:publish")
          console.log(data);
          setProducts(data.data.data.slice(0,10))
      } catch (error) {
          console.log(error);
      }



  }
  useEffect(() => {
      fetchData()
  }, [])
  console.log(Products)
  return(
    <div>
      

      <div className="parent2">
       <h2 style={{marginLeft:"9rem"}}>Snacks & Munchies</h2>
        <h4 style={{marginRight:"9.3rem"}}>See All</h4>
 
       </div>
    

     <div className="items">
 
            {Products && Products.map(e => (
                   
                    <div className="thumbimg">



                      <div className="imggs">
                      <img  className="imagescontainer" src={e.image.original} />
                        </div>
                        <div className='italic'><i>8 mins</i></div>
                       <div > <p className="imgname">{e.name}</p></div>
                       <div className="btncontainer"><p>${e.price}</p>
                       <button className='button' onClick={() => x.setCart(addTocart(e,x.cart))}>ADD</button>
                       </div>

                     
                    </div>
                

            ))}

        </div>
        </div>
  )

}


export default Productitem;
















