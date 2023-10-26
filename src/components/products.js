
import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";

import "../styles/products.css";


const Products =()=>{
 

  let [ProductsData, setProductsData] = useState("");

  const fetchData = async () => {
      try {

          const data = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668790059/React%20Class/Sreenivas/best_seller_vzl7xe.json")
          console.log(data);
          setProductsData(data.data.slice(0,14))
      } catch (error) {
          console.log(error);
      }



  }
  useEffect(() => {
      fetchData()
  }, [])
  console.log(ProductsData)
  return(
    
     <div className="products">

            {ProductsData && ProductsData.map(e => (
                   
                    <div className="fetchimg">



                      <div className="imgthumbmain">
                      <img  className="imgthumb" src={e.image.thumbnail} />
                        </div>

                       <div> <p className="name">{e.name}</p></div>
                     
                    </div>
                

            ))}

        </div>
      
  )

}


export default Products;
















