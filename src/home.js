import axios from "axios";
import { useEffect, useState } from "react";

import Header from "./components/header";
import Order from "./components/ordernow";
import Products from "./components/products";

import ProductCard from "./components/productscard";
import Productitem from "./components/product3";
import Snacks from "./components/snacks";
import Chocolates from "./components/chocolates";
import Dairyproducts from "./components/dairyproducts";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Footer2 from "./components/footer2";
import Footer3 from "./components/footer3";
import Footer4 from "./components/footer4";

// import Main from "./components/cart";



function Home() {

  const [products,setProducts] = useState([]);
  const [cart,setCart]= useState({
    items: [],
    totalQuantity:0,
    totalPrice:0
  })

  const fetchData = async() => {
    const resp = await axios.get("http://localhost:3000/products/all");
    setProducts(resp.data);
  }
  useEffect(()=>{
  fetchData()
  },[])

  const addTocart = ()=> {
    
  }









  return (
    <div className="App">
   <Header/>
   {/* <MultipleItems/> */}
   <Order/>
   <Products/>
    <ProductCard  products={products} cart={cart} setCart={setCart}/>
   <Productitem  products={products} cart={cart} setCart={setCart}/>
   <Snacks products={products} cart={cart} setCart={setCart}/>
   <Chocolates products={products} cart={cart} setCart={setCart}/>
   <Dairyproducts products={products} cart={cart} setCart={setCart}/>
   <Banner/>
   <Footer/>
   <Footer2/>
   <Footer3/>
   <Footer4/> 

  {/* <Main/> */}

   </div>
  );
}

export default Home;
