import React from 'react'
import { FacebookFilled,TwitterCircleFilled,InstagramFilled,LinkedinFilled } from '@ant-design/icons'; 

const Footer4 =()=> {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>

   <div>
   <p>© Blink Commerce Private Limited (formerly known as  </p>
   <p>Grofers India Private Limited), 2016-2023</p>
   </div>
   <p style={{fontWeight:"bold"}}> Download App</p>
   
  <div > 
  
 <img style={{width:"140px",height:"40px"}} src='https://blinkit.com/d61019073b700ca49d22.png'/>
    <img style={{width:"140px",height:"40px"}} src='https://blinkit.com/8ed033800ea38f24c4f0.png'/>
  </div>
  <div style={{fontSize:"32px"}}>
  <FacebookFilled />
  <TwitterCircleFilled />
  <InstagramFilled />
  <LinkedinFilled />
  </div>
    </div>
  )
}

export default Footer4;