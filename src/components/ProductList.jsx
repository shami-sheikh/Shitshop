import React, { useContext } from 'react'
import { CartContext } from "../contexts/CartContext"
function ProductList({item}) {
  const {addtocart}=useContext(CartContext)
  return (
    <div className="mt-4 space-y-4 rounded-lg font-serif pb-10">
  <div className="bg-white/10 grid grid-cols-1 md:grid-cols-2 gap-7 p-6 rounded-lg">
    <img src={item.thumbnail} alt={item.title} className="max-h-[250px] w-full object-contain drop-shadow-[0_0_30px_rgba(255,0,60,0.3)] mix-blend-lighten hover:scale-105 transition-all duration-500 " />
  <div>
     <h1 className="text-white font-bold ">{item.title}</h1>
 <h1 className='py-4 text-gray-500 '>{item.description}</h1>
<div className='flex gap-4'>
   <h1 className='text-red-500 font-bold text-2xl '>${item.price}</h1>
   <span className='font-bold text-gray-300'>({parseFloat(item.discountPercentage).toFixed(1)})%</span>
</div>
<h1 className='text-white py-4'>Free Delivery,<span className='text-gray-500' >Fri,18 April</span></h1>
<h1 className='text-white py-4'>or fastest delivery,<span className='text-gray-500' >tomorrow 17 April</span></h1>
<button onClick={()=>addtocart(item)} className="bg-red-600 w-full text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">add to cart</button>
  </div>
    </div>
    </div>
  )
}

export default ProductList