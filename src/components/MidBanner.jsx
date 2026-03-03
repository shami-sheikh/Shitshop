import React from 'react'
import banner from "../assets/banner1.jpg"
import { useNavigate } from 'react-router-dom'
import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react'
function MidBanner() {
  const navigate = useNavigate()
  const features = [
  { icon: <Truck size={32} />, title: "Free Shipping", desc: "On orders over $100" },
  { icon: <ShieldCheck size={32} />, title: "Secure Payment", desc: "100% secure transactions" },
  { icon: <RotateCcw size={32} />, title: "Easy Returns", desc: "30 day return policy" },
  { icon: <Headphones size={32} />, title: "24/7 Support", desc: "Dedicated support team" },
]

  return (
  <>

  <div className='bg-[#060610] md:py-12 font-serif'>
<div className="relative max-w-7xl mx-auto md:rounded-2xl bg-cover h-[600px] flex items-center justify-center"
        style={{
           backgroundImage: `url(${banner})`,
          position: `center`,
          backgroundAttachment: "fixed",
          
        }}>
<div className='px-6 text-center text-gray-400'>
<h1 className='text-4xl md:text-6xl font-bold '>Next-Gen Electronics at Your Fingertips</h1>
<h1 className='py-3 text-white font-serif text-xl '>Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</h1>
<button className='uppercase bg-red-500 hover:bg-red-600 rounded-xl px-4 py-2 text-white' onClick={()=>navigate("/product")}>shop now</button>
</div>
</div>
<div className='mt-5 md:mt-10 grid font-serif grid-cols-2 md:grid-cols-4 gap-4 px-4 border border-gray-800 rounded-lg py-4'>
  {features.map((item, i) => (
    <div key={i} className='flex gap-3 items-center px-4 py-3 border border-gray-800 rounded-lg hover:border-red-500 transition-colors'>
      <div className='text-red-500 shrink-0'>{item.icon}</div>
      <div className='flex flex-col'>
        <h1 className='text-sm font-semibold text-white'>{item.title}</h1>
        <p className='text-xs text-gray-500'>{item.desc}</p>
      </div>
    </div>
  ))}
</div>
  </div>
  </>
  )
}

export default MidBanner