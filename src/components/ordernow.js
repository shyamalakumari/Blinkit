import React, { Component } from "react";


import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Order=()=>  {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div  style={{marginLeft:"3rem"}}>
        <Slider {...settings}>
           <div>
          <img style={{width:"440px"}} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/winter_PC-masthead-WEB.png"/>
            </div>
          <div>
            <img  style={{width:"440px"}} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/Winter_FB-masthead-WEB.png"/>
          </div>
          <div>
          <img  style={{width:"440px"}} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-10/gifting-store-Banner-Web.jpg"/>
          </div>
          <div>
          <img  style={{width:"440px"}} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/Winter_HH-masthead-WEB.png"/>
          </div>
          <div>
          <img style={{width:"440px"}} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/Winter_FB-masthead-WEB.png"/>
          </div>
         
{/* <img src={e.image.thumbnail} /> */}

        </Slider>
      </div>


    );
  }


export default Order;