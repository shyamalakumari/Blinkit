import Home from "./home";
import {Route,Routes} from "react-router-dom";
import Register from "./pages/register";
import Login from "../src/pages/login";
import Cart from "./pages/cart";

function App() {



  return (
   <div>
 <Routes>
  <Route path="/" element = {<Home/>}/>
  <Route path="/login" element = {<Login/>}/>
  <Route path="/register" element = {<Register/>}/>
  {/* <Route path='/Cart' element={<Cart cart ={cart} setCart={setCart}/>}/> */}

  
 </Routes>

   </div>
  );
}

export default App;
