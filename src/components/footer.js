import React from 'react'
import "../styles/footer.css"

 const Footer = () => {
  return (
    <div className='footer'>

  

    <div >
    <h3>Useful Links</h3>
        <div style={{color:"grey"}}>
   
    <p>About</p>
    <p>Careers</p>
    <p>Blog</p>
    <p>Press</p>
    <p>Lead</p>
    <p>Value</p>
    </div>
    </div>

    <div style={{color:"grey",marginTop:"3rem"}}>
        <p>Privacy</p>
        <p>Terms</p>
        <p>FAQ</p>
        <p>Security</p>
        <p>Moblie</p>
        <p>Contact</p>
        <p></p>
 </div>


 <div style={{color:"grey",marginTop:"3rem"}}>
    <p>Partner</p>
    <p>Express</p>
    <p>Seller</p>
    <p>Spotlight</p>
    <p>Warehouse</p>
    <p>Deliver</p>
   
 </div>

    <div>
        <h3>Categories <span style={{color:"green"}}>see all</span></h3>
        <div style={{color:"grey"}}>
    <p>vegetables & fruits</p>
    <p>Munchies</p>
    <p>Instant & Frozen Food</p>
    <p>Bakery & Biscuits</p>
    <p>Atta, Rice & Dal</p>
    <p>Sauces & Spreads</p>
    <p>Paan Corner</p>
    <p>Baby Care</p>
    <p>Cleaning Essentials</p>

    <p>Personal Care</p></div>
    </div>

    <div style={{color:"grey",marginTop:"3rem"}}>
    <p>Dairy & Breakfast</p>
    <p>Cold Drinks & Juices</p>
    <p>Tea, Coffee & Health Drinks</p>
    <p>Sweet Tooth</p>
    <p>Dry Fruits, Masala & Oil</p>
    <p>Chicken, Meat & Fish</p>
    <p>Organic & Premium</p>
    <p>Pharma & Wellness</p>
    <p>Home & Office</p>
    <p>Pet Care</p>

    </div>
  

  <div>
    <h3>Festive Season</h3>
    <div style={{color:"grey"}}>
    <p>Navratri</p>
    <p>Dusshera</p>
    <p>Diwali</p>
    <p>Durga Puja</p>
    </div>
  </div>


   </div>


  )
}

export  default Footer;