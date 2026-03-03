import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const navigate=useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-[400px]">
      <div className="p-8 shadow-2xl flex flex-col items-center py-4 bg-white/5">
        <h1 className="text-2xl py-4">thanks for your order</h1>
        <button onClick={()=>navigate("/product")} className="bg-gradient-to-br from-red-500 to-purple-500 h-fit py-2 px-4 rounded-xl text-white hover:from-red-700 hover:to-purple-700">
          countinue shopping
        </button>
      </div>
    </div>
  );
}

export default Checkout;
