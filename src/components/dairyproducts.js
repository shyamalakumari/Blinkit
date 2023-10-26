// import React, { useState, useEffect } from "react";

// import "../styles/dairyproducts.css"
// const Dairy= () => {

//     const images = document.querySelectorAll(".img")
//     let scroll = 0;

//     const prev = () => {
//         if (scroll >= 0) {
//             scroll = 100
//             images.forEach((e) => {

//                 e.style.transform += `translateX(${"-" + scroll + "%"})  `

//             })

//         }

//     }

//     const next = () => {

//         if (scroll >= 0) {
//             scroll = 100
//             images.forEach((e) => {

//                 e.style.transform += `translateX(${scroll + "%"})  `

//             })

//         }
//     }

//     return (

//         <div>
           
//             <div className="carousel">

//                 <div onClick={prev} className="leftArrow"> {"<"} </div>
//                 <div className="content">
//                     <marquee>

//                     <img className="imgcaro" style={{width:"200px",height:"200px"}}  src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F311%2Fegg_cavanagh.jpg&w=1080&q=75" />

//                     <img className="imgcaro"  style={{width:"200px",height:"200px"}} src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F313%2Fegg_freshlay_golden_yolks.jpg&w=1080&q=75" />

//                     <img className="imgcaro" style={{width:"200px",height:"200px"}} src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F315%2Fegg_happy_egg_organic.jpg&w=1080&q=75" />

//                     <img className="imgcaro" style={{width:"200px",height:"200px"}}  src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F315%2Fegg_happy_egg_organic.jpg&w=1920&q=75" />
//                     <img className="imgcaro"  src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F310%2Fbutter_whole_earth.jpg&w=1920&q=75" />
//                     <img className="imgcaro"  src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F325%2Fyogourt_astro_bio_best.jpg&w=1920&q=75" />
//                     <img className="imgcaro"  src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F325%2Fyogourt_astro_bio_best.jpg&w=1920&q=75" />
//                      <img className="imgcaro"  src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F372%2Fteeccino_herbal_coffee_alternative_almond_amaretto.jpg&w=1920&q=75" />
//                     <img className="imgcaro"  src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F380%2Ftropicana_orange_no_pulp.jpg&w=1920&q=75" /> */}
//                     </marquee>
                    
//                     { {
//                         images.map((e)=>{
//                             return(
                               
//                                     <img src={e.url} />
                                                            
//                                 )
//                         })
//                     }
//                 </div>


//                 <div onClick={next} className="rightArrow"> {">"} </div>
//             </div>




//         </div>

//     )


// }

// export default Dairy;















import axios from 'axios';
import React,{ useState,useEffect } from "react";
// import "../styles/chocolates.css";
import { addTocart } from "../cart/cartManagement";

const Dairyproducts= (x) => {



    let [Products, setProducts] = useState("");

    const fetchData = async () => {
        try {
  
            const data = await axios.get("https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bcategories.slug:breakfast%3Bstatus:publish")
            console.log(data);
            setProducts(data.data.data.slice(7,12))
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
         <h2 style={{marginLeft:"9rem"}}>Dairy Bread & Eggs</h2>
          <h4 style={{marginRight:"9.3rem"}}>See All</h4>
   
         </div>
      
  
       <div className="chocolatess">
   
              {Products && Products.map(e => (
                     
                      <div className="choco">
  
  
       <div className='chocoimg'>
          <img className='imgchoco' src={e.image.thumbnail} />
          </div>              
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



export default Dairyproducts;