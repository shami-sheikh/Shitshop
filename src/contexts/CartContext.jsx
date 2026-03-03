import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
export const CartContext=createContext()
export const CartProvider=({children})=>{
    const [cartitems,setcartitems]=useState(()=>{
       const savecart = localStorage.getItem("cartitems");
       if(!savecart) return []
   try {
    const parsed = JSON.parse(savecart);
    return Array.isArray(parsed)
      ? parsed.filter((item) => item != null)
      : [];
  } catch (e) {
    console.warn("corrupt cart in localStorage, resetting", e);
    return [];
  }
    })
    // save in a localstoreage
    useEffect(()=>{
    localStorage.setItem("cartitems",JSON.stringify(cartitems))
    },[cartitems])
    const addtocart=(product)=>{
        const itemcart=cartitems.find((item)=>item.id===product.id)
        if(itemcart){
           const updatecart = cartitems.map(item =>
  item.id === product.id
    ? { ...item, quantity: item.quantity + 1 }
    : item
);
            setcartitems(updatecart)
        }else{
            setcartitems([...cartitems,{...product,quantity:1}])
        }
        toast.success("item added to your cart")
        // console.log(cartitems);
        
    } 
return <CartContext.Provider value={{ cartitems, addtocart,setcartitems }}>
  {children}
</CartContext.Provider>
}