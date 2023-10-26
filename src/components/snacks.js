import axios from 'axios';
import React,{ useState,useEffect } from "react";
import "../styles/snacks.css";
import { addTocart } from "../cart/cartManagement";

const Snacks = (x) => {



    let [Products, setProducts] = useState("");

    const fetchData = async () => {
        try {
  
            const data = await axios.get("https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:bakery%3Bstatus:publish")
            console.log(data);
            setProducts(data.data.data)
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
         <h2 style={{marginLeft:"9rem"}}>Cold Drinks & Juices</h2>
          <h4 style={{marginRight:"9.3rem"}}>See All</h4>
   
         </div>
      
  
       <div className="item">
   
              {Products && Products.map(e => (
                     
                      <div className="drinks">
  
  
  
          <img style={{ width: "200px", height: "200px" }} src={e.image.thumbnail} />
                        
                       <div className='italic'><i>8 mins</i></div>
                         <div > <p className='title'>{e.name}</p></div>
                         <div className="btncontainer"><p>${e.price}</p>
                         <button className='button' onClick={() => x.setCart(addTocart(e,x.cart))}>ADD</button>
                         </div>
  
                       
                      </div>
                  
  
              ))}
  
          </div>
          </div>
    )

}



export default Snacks;