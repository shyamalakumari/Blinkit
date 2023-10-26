import React from 'react';
// import "../styles/cart.css";
export default function Cart({cart}) {
  return (
    <>
    <h3> Your Cart</h3>
    <div id='cartContainer'>
       
    {cart.items.length && cart.items.map(e => {
        return (
            <div className='cart'>

                <img style={{width:"180px"}} src={e.images[0].url}/>
                <p>{e.title}</p>
                <p>${e.price}</p>
            </div>
        )
    })}
    </div>
    </>
  )
}






