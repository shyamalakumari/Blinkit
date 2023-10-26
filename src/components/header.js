import React from 'react'
import "../styles/header.css";
import {Link} from "react-router-dom";
 import { SearchOutlined,ShoppingCartOutlined } from '@ant-design/icons';
const  Header=()=> {
  
  return (
    <div>
    <div className='main'>
     <div className='img'>
    <img src='https://blinkit.com/9f644712ea8611916099.png'/>
     </div>
     
     <div style={{fontWeight:"bold",marginTop:"2.5rem",fontSize:"20px"}}>Delivery in 8 Minutes</div>
     <div className='inpdiv'><input className='input' type="text" placeholder="search"/><SearchOutlined className='icon'/></div>
     <div className='login' ><Link to ="/login" className='link'>Login</Link></div>
     <div className='login'><Link to ="/register" className='link'>Register </Link> </div>
     <div className='cart'><ShoppingCartOutlined style={{fontSize:"25px"}}/><Link to="/Cart" className='cartlink'>My Cart</Link>  </div>
   

    </div>
    <div>
      <div className='img1'><img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg'/></div>
    </div>
    
    </div>
  )
}


export default Header;