import React from 'react';
import "../styles/banner.css";

const Banner = ()=> {
  return (
    <div>

 
    <div className='flex'>
        <div className='one'>
            <div className='imgmain'><img className='imgg' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/assets/web/blinkit-promises/10_minute_delivery.png'/>
            </div>
           <div style={{display:"flex",justifyContent:"center",fontWeight:"bold"}}><p >Superfast Delivery</p></div>
            
           <div className='p1'> <p>Get your order delivered to your doorstep at the earliest </p>
           <p>from dark stores near you.</p>
           </div>
           
        </div>


        <div className='two'>
            <div className='imgmain'><img className='imgg' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/assets/web/blinkit-promises/Best_Prices_Offers.png'/>
            </div>
           <div style={{display:"flex",justifyContent:"center",fontWeight:"bold"}}><p >Superfast Delivery</p></div>
            <div className='p1'>
                
            <p>Best price destination with offers directly from the manufacturers.</p>
           
            </div>
        </div>


        <div className='three'>
            <div className='imgmain'><img className='imgg' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/assets/web/blinkit-promises/Wide_Assortment.png'/>
            </div>
           <div style={{display:"flex",justifyContent:"center",fontWeight:"bold"}}><p >Superfast Delivery</p></div>
            <div className='p1'>
            <p>Choose from 5000+ products across food, personal care, household & other categories</p>
           
            </div>
        </div>

    </div>

 <p className='blinkpara'>“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
   <p className='p'></p>
    </div>
  )
}

export default Banner;