
import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";
import "../styles/productcard.css"
import { addTocart } from "../cart/cartManagement";


const ProductCard =(x)=>{
 

  let [ProductData, setProductData] = useState("");

  const fetchData = async () => {
      try {

          const data = await axios.get(" https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789925/React%20Class/N.%20Divya%20Jyothi/products_fqdjci.json")
          console.log(data);
          setProductData(data.data.slice(0,15))
      } catch (error) {
          console.log(error);
      }



  }
  useEffect(() => {
      fetchData()
  }, [])
  console.log(ProductData)
  return(
    <div>
       <div className="parent">
       <h2 style={{marginLeft:"9rem"}}>fruits & powders</h2>
        <h4 style={{marginRight:"9.3rem"}}>See All</h4>
 
       </div>
     <div className="container">
       
            {ProductData && ProductData.map(e => (
                   
                    <div className="dairy">



                      <div className="images">
                      <img  className="imgsurl" src={e.images[0].url} />
                        </div>
                        <div className='italic'><i>8 mins</i></div>
                       <div> <p className="title">{e.title}</p></div>
                       <div className="pricecontainer">
                        <p>${e.price}</p>
                        <button className='btn' onClick={() => x.setCart(addTocart(e,x.cart))}>ADD</button>
                       </div>
                       
                    </div>
                

            ))}
   </div>
        </div>
      
  )

}


export default ProductCard;
















