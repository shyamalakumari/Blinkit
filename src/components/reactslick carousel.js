import React, { Component } from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])

    const fetchData = () => {

        fetch("https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=5&language=en&search=type.slug:grocery%3Bstatus:publish")
            .then(res => res.json())
            .then(response => setProduct(response.data))
            .catch(err => console.log(err))
    }


    useEffect(() => {

        fetchData()


    }, [])

    return (
      
        <div >
         
            <Slider {...settings}>
                <div >
                <div  style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto"}}>
                {product.map(e => {

                 return (
                <div >
                <div >
                <img style={{width:"200px"}}  src={e.image.original} />
                 </div>
                 </div>
            
                 )

                 })}

                    </div>
                </div>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );

}




export default Responsive;


