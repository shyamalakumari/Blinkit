export const addTocart = (product,cart) => {
    if(cart.items.length) {
        cart.totalPrice +=product.price;
        cart.totalQuantity +=1;  
     const checkProd = cart.items.filter(e =>e._id === product._id)

     if (checkProd.length) {
        
        cart.items = cart.items.map(e =>{
            if(e.product._id === product._id) {
                return{
                    ...e,
                    quantity:e.quantity+1
                }
               
            }
            else{
                return e;
            }
        })
     } else {
        cart.items.push({
            product,
            quantity:1
        });
      
     }
    }
     else  { cart.items.push({
            product,
            quantity:1
        });
        cart.totalPrice = product.price;
        cart.totalQuantity=1;
    }
    console.log(cart);
    return cart;
}





