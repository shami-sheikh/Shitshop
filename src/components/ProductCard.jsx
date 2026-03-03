import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import {ShoppingCart} from "lucide-react"
import { CartContext } from "../contexts/CartContext";
function ProductCard({products}) {
    const {addtocart}=useContext(CartContext)
    const navigate=useNavigate()
 return (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {!products || products.length === 0 ? (
      <div className="flex justify-center items-center h-[400px] col-span-full">
        no data found
      </div>
    ) : (
    products.filter(item => item !== null && item !== undefined).map((item, index) => (
      <div
        key={index}
        className="relative bg-[#0f1220] border mt-5 border-gray-700 cursor-pointer p-2 h-max rounded-2xl shadow-2xl hover:scale-95 transition-all"
      >
        <img
          onClick={()=>navigate(`/product/${item.id}`)}
          src={item.images[0]}  
          className="w-full object-cover rounded-xl drop-shadow-[0_0_20px_rgba(255,0,60,0.2)] "
        />
       <div className="bg-red-500/10 absolute top-2 border border-red-500/30 rounded-full px-3 py-1 backdrop-blur-sm">
            <span className="text-red-400 text-[10px] font-mono uppercase tracking-widest">
              {item.category}
            </span>
          </div>
       <div className="bg-black absolute top-2 right-2 border border-red-500/30 rounded-full px-3 py-1 backdrop-blur-sm">
            <span className="text-yellow-400 text-[10px] font-mono uppercase tracking-widest">
              ⭐{item.rating}
            </span>
          </div>
          {/* title */}
          <div className="flex flex-col px-3 ">
            <h1 className=" md:text-sm  text-xl  text-gray-400 ">{item.title}</h1>
            <p className="py-2 text-sm">price</p>
            <h2 className="text-2xl mt-1 text-red-500 font-bold">{item.price}</h2>
            <div className="py-3">
              <button onClick={()=>addtocart(item)} className="bg-red-500 flex gap-2 px-4 mt-2 py-2 rounded-xl text-white active:scale-90"><ShoppingCart /> add to cart</button>
            </div>
          </div>
      </div>
    ))
    )}
  </div>
);
}

export default ProductCard;
