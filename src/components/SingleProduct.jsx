import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Breadcome from "./Breadcome";
import loading from "../assets/src_assets_Loading4.webm";
import { RotateCcw, Shield, Truck } from "lucide-react";

function SingleProduct() {
  const params = useParams();
  const { addtocart } = useContext(CartContext);
  const [singleproduct, setsingleproduct] = useState("");
  const navigate = useNavigate();

  const onlysingleproduct = async () => {
    const url = `https://dummyjson.com/products/${params.id}`;
    try {
      const res = await axios.get(url);
      setsingleproduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onlysingleproduct();
  }, []);

  return (
    // ✅ relative + overflow-hidden stops blobs from breaking navbar
    <div className="relative overflow-hidden mx-auto max-w-6xl pb-10 mt-10">
      
      {/* ✅ Blobs are now contained inside relative parent */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,60,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,60,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto mt-8">
        {singleproduct ? (
          <div className="relative z-10 px-4 md:px-6 pb-16 pt-6">
            <Breadcome title={singleproduct.title} />
            <div className="mx-auto max-w-6xl mt-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 bg-[#0a0b14] border border-white/5 rounded-2xl p-6 md:p-12">
                {/* Image */}
                <div className="relative p-8 w-full bg-white/5 border border-white/5 rounded-2xl h-[400px]">
                  <img
                    src={singleproduct.images[0]}
                    className="max-h-[350px] w-full object-contain drop-shadow-[0_0_30px_rgba(255,0,60,0.3)] mix-blend-lighten hover:scale-105 transition-all duration-500"
                    alt=""
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <div className="bg-red-500/5 border border-red-500/30 w-fit py-1 px-3 cursor-pointer rounded-full">
                    <span className="text-red-400 text-[10px] font-mono uppercase tracking-widest">
                      {singleproduct.category}
                    </span>
                  </div>

                  <h1 className="py-4 text-2xl font-bold text-white">
                    {singleproduct.title}
                  </h1>

                  {/* Discount & Warranty */}
                  <div className="flex gap-3 flex-wrap mb-4">
                    <span className="bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono px-3 py-1 rounded-full">
                      🏷️ {singleproduct.discountPercentage}% OFF
                    </span>
                    <span className="bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono px-3 py-1 rounded-full">
                      🛡️ {singleproduct.warrantyInformation}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm">Price</p>
                  <h1 className="text-2xl py-1 text-red-500 font-bold">
                    ${singleproduct.price}
                  </h1>

                  <p className="text-gray-400 text-sm py-3">Description</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {singleproduct.description}
                  </p>

                  {/* ✅ Fixed: addtocart on the button, wishlist on the heart */}
                  <div className="flex gap-3 items-center mt-5">
                    <button
                      onClick={() => addtocart(singleproduct)}
                      className="w-full py-3 px-4 rounded-xl bg-red-500 hover:bg-red-600 text-white active:scale-90 transition-all"
                    >
                      Add to Cart
                    </button>
                    <div className="bg-white/5 hover:bg-white/10 py-3 px-4 flex items-center rounded-xl cursor-pointer transition-all">
                      🤍
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 mt-5 border-t  border-white/5">
                  <div className="flex flex-col items-center  gap-2 ">
                    <div className="w-10 h-10 items-center justify-center flex bg-white/5 rounded-full">
                      <Truck size={20} className=" text-red-500" />
                    </div>
                    <h2 className="font-mono flex items-center justify-center md:ml-0 ml-5">
                      {" "}
                      free shipping
                    </h2>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 items-center justify-center flex bg-white/5 rounded-full">
                      <Shield size={20} className=" text-red-500" />
                    </div>
                    <h2 className="font-mono md:ml-0 ml-5">
                      {" "}
                      2 years warranty
                    </h2>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 items-center justify-center flex bg-white/5 rounded-full">
                      <RotateCcw size={20} className=" text-red-500" />
                    </div>
                    <h2 className="font-mono md:ml-0 ml-5"> easy return</h2>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center text-center w-full h-[200px]">
            <video loop muted autoPlay className="w-32 h-32">
              <source src={loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;