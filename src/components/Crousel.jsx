import React, { useContext, useEffect, useState } from "react";
import { Zap } from "lucide-react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { DataContext } from "../contexts/DataContext";
import { CartContext } from "../contexts/CartContext";
import loading from "../assets/src_assets_Loading4.webm"
import SuggestCategory from "./SuggestCategory";
import MidBanner from "./MidBanner"
import { useNavigate } from "react-router-dom";
function Crousel() {
  const { products } = useContext(DataContext);
 const Navigate=useNavigate()
  const {addtocart} = useContext(CartContext)
  const [currentindex, setcurrentindex] = useState(0);
  // ✅ useEffect BEFORE the if check
  useEffect(() => {
    if (!products) return; // guard inside
    const interval = setInterval(() => {
      setcurrentindex((prev) => (prev + 1) % products.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [products]);

  // ✅ if check AFTER all hooks
  if (!products) return <div className="text-white">Loading...</div>;

  const next = () => setcurrentindex((prev) => (prev + 1) % products.length);
  const prev = () =>
    setcurrentindex((prev) => (prev - 1 + products.length) % products.length);
  const product = products[currentindex];
  // console.log(product);

  return (
    <div className=" w-full   font-serif bg-[#060610] text-gray-500">
      {/* Top border - full width at the very top */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      {/* Main nav */}
      <div className="flex items-center w-full justify-between lg:px-8 md:px-6 px-4 ">
        <div className="py-4 flex justify-between    w-full">
          <a
            href="/"
            className="text-xl text-white font-serif flex items-center gap-2"
          >
            <Zap
              className="text-red-200 bg-red-600 p-1 rounded-full animate-spin duration-300"
              size={20}
            />
            <h1 className="font-bold text-gray-400">
              S<span>hitShop</span> store
            </h1>
          </a>
        </div>
        {/* slider */}
        <div className="flex gap-2">
          <button
            className="border p-1 border-gray-700 bg-black"
            onClick={next}
          >
            <FaArrowRight />
          </button>
          <button
            className="border p-1 border-gray-800 bg-black"
            onClick={prev}
          >
            <FaArrowLeft />
          </button>
        </div>
      </div>
      {/* main header section */}
      {/* for destop  */}
     {
       products.length > 0 ? (
             <div className="flex flex-col w-full items-center justify-center  px-4 md:px-6 lg:px-8 pt-5">
        <div className="max-w-5xl mx-auto w-full flex flex-col px-4 mt-6">
          <p className="text-xs uppercase tracking-[0.3em] text-red-500 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-red-500 inline-block" />{" "}
            {product.category}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 w-full gap-8 items-center">
            <div className="flex flex-col px-4 ">
              <h1 className="py-2 font-bold text-gray-300 text-2xl md:text-4xl line-clamp-2">
                {product.title}
              </h1>
              <p className="text-gray-500 py-4 line-clamp-3 text-sm leading-relaxed">
                {product.description}
              </p>
              {/* price */}
              <div className="flex flex-col ">
                <p className="mt-3 ">price</p>
                <p className="text-3xl text-red-500 font-bold">
                  ${product.price}
                </p>
              </div>
                <button onClick={()=>addtocart(product)} className="items-center flex mt-4 bg-red-500 w-36 py-2 px-4 rounded-xl hover:bg-red-600 transition-all duration-200 text-white">add to cart</button>
                <div className='flex gap-2 mt-6'>
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setcurrentindex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === currentindex ? 'bg-red-500' : 'bg-gray-700'}`}
            />
          ))}
        </div>
            </div>
          
            <div className="relative ">
              <img
              onClick={()=>Navigate(`/product/${product.id}`)}
                src={product.images[0]}
                alt={product.title}
                className="w-full h-72 md:h-96 object-contain scale-90 rounded-2xl bg-white/5 p-6 border drop-shadow-[0_0_25px_rgba(255,0,60,0.4)] hover:scale-95 border-white/10"
              />{" "}
            </div>
          </div>
        </div>
      </div>
        ):
       <div className="flex items-center justify-center text-4xl h-[500px]">
            <video autoPlay loop muted src={loading}></video>
        </div>
     }
     <SuggestCategory/>
     <MidBanner/>

    </div>
  );
}

export default Crousel;
