import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FaRegTrashAlt, FaShoppingBag } from "react-icons/fa";
import empty from "../assets/empty.png";
import { useNavigate } from "react-router-dom";
import { Truck } from "lucide-react";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";
function Cart({ address }) {

 
  
  const { cartitems, setcartitems } = useContext(CartContext);
  const navigate = useNavigate();
  const removeitem = (index) => {
    const update = cartitems.filter((_, i) => i !== index);
    setcartitems(update);
    toast.success(`${cartitems[index].category} removed`);
  };
  const increse = (index) => {
    const update = cartitems.map((item, i) =>
      i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
    );
    setcartitems(update);
    setcartitems(update);
    toast.success(`${cartitems[index].title} increased`);
  };
  const decrease = (index) => {
    const update = cartitems.map((item, i) =>
      i === index
        ? {
            ...item,
            quantity: (item.quantity || 1) > 1 ? (item.quantity || 1) - 1 : 1,
          }
        : item,
    );

    setcartitems(update);
    if (cartitems[index].quantity > 1) {
      toast.success(`${cartitems[index].title} decresed`);
    } else {
      toast.error("Minimum quantity reached");
    }
  };
  const total = cartitems
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);
    const {user}=useUser()
  return (
    <div className="mx-auto max-w-6xl pb-10 mt-10 py-3 h-fit flex flex-col">
      {cartitems.length > 0 ? (
        <div className="flex flex-col  w-full ">
          <div className="flex justify-between px-4 ">
            <div className="flex flex-col space-y-3">
              <h1
                className="text-4xl md:text-5xl font-black text-white md:ml-0 ml-5 uppercase tracking-tight"
                style={{ textShadow: "0 0 40px rgba(255,0,60,0.3)" }}
              >
                My
                <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent py-2">
                  Cart
                </span>
              </h1>
              <h1 className="font-semibold">
                {cartitems.length} items in your cart
              </h1>
            </div>
            <button
              onClick={() => setcartitems([])}
              className="bg-gradient-to-br from-red-500 to-purple-500 h-fit py-2 px-4 rounded-xl text-white hover:from-red-700 hover:to-purple-700"
            >
              empty cart
            </button>
          </div>
          {/* main products details */}
          <div className="flex items-center flex-col ">
            {cartitems.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" mt-10 shadow-2xl bg-[#0a0b14] border border-white/5 hover:border-red-500/20 w-full rounded-2xl mb-4 p-5 transition-all duration-300"
                >
                  <div className="flex justify-between px-4">
                    <div className="flex gap-4">
                      <div className="bg-white/5 rounded-lg hover:scale-90 transition-all duration-200">
                        <img
                          src={item.images[0]}
                          className="h-36 w-36  "
                          alt=""
                        />
                      </div>
                      {/* one product details */}
                      <div className="flex flex-col space-y-2">
                        <div className="bg-red-500/10 self-start border border-red-500/30 rounded-full px-3 py-1 backdrop-blur-sm">
                          <span className="text-red-400 text-[10px] font-mono uppercase tracking-widest">
                            {item.category}
                          </span>
                        </div>
                        <h1 className="text-xl text-white">{item.title}</h1>
                        <h1 className="text-red-500 text-xl font-bold">
                          ${item.price}
                        </h1>
                      </div>
                    </div>
                    <FaRegTrashAlt onClick={() => removeitem(index)} />
                  </div>
                  <div className="flex text-xl justify-between mt-5 px-4 border-t py-3 border-gray-500/10 border-gray-500 ">
                    <h1 className="flex items-center font-bold ">Quentity</h1>
                    <div className="flex space-x-3 bg-red-500 py-2 cursor-pointer px-3 rounded-lg text-white">
                      <button onClick={() => decrease(index)}>-</button>
                      <span> {item.quantity || 1}</span>
                      <button onClick={() => increse(index)}>+</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* user deliver info and total price */}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5 md:gap-8 px-4 mt-8 space-y-3  ">
            {/* adress */}
            <form className="flex shadow-xl flex-col bg-[#0a0b14] border border-white/5 outline-none w-full p-5  ">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-3">
                delivery Info
              </h1>
              <div className="mt-3">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="enter your name"
                 value={user?.fullName||""}
                  className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                />
              </div>
              <div className="py-3">
                <label htmlFor="/">Address</label>
                <input
                  type="text"
                  value={address?.county||""}
                  placeholder="enter your address"
                  className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <div>
                  <label htmlFor="/">state</label>
                  <input
                    type="text"
                    
                    value={address?.state || ""}
                    placeholder="enter your state"
                    className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="/">post code</label>
                  <input
                    type="text"
                    placeholder="post code"
                    value={address?.postcode||""}
                    className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="/">country</label>
                  <input
                    type="text"
                    placeholder="your country"
                    value={address?.country||""}
                    className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="/">phone</label>
                  <input
                    type="number"
                    max={10}
                    min={1}
                    placeholder="your phone"
                    className="w-full  bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                  />
                </div>
              </div>
            </form>
            <div className="w-full flex flex-col">
              <h1 className="text-4xl font-bold text-white ">Bill Details</h1>
              <div className="flex justify-between gap-2 mt-5 ">
                <span className="flex gap-2 items-center">
                  <FaShoppingBag />
                  total items
                </span>
                <span className="text-red-500 font-bold text-xl">
                  ${parseFloat(total).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between gap-2 mt-5 ">
                <span className=" flex gap-2 items-center">
                  <Truck />
                  Delivery charge
                </span>
                <p className="text-red-500 font-serif ">
                  $<span className="text-gray-400 line-through">$25</span>{" "}
                  <span>Free</span>
                </p>
              </div>
              <div className="flex justify-between gap-2 mt-5 ">
                <span className="flex gap-2 items-center">
                  <FaShoppingBag />
                  Handling charge
                </span>
                <span className="text-red-500 font-bold text-xl">$5</span>
              </div>
              <div className="flex justify-between gap-2 mt-5 ">
                <span className="flex gap-2 items-center">Grand Total</span>
                <span className="text-red-500 font-bold text-xl">
                  ${(parseFloat(total) + 5).toFixed(2)}
                </span>
              </div>
              {/* promocode */}
              <div className="flex flex-col mt-5 gap-3 ">
<h1 className="text-2xl font-bold text-white">Apply Promocode</h1>
<div className="mt-5 flex">
  <input type="text" className="w-full border border-white/5 bg-[#0a0b14] rounded-r-none py-2 px-4 rounded-xl outline-none focus:border-red-500/50 transition-all duration-200" />
<button className="bg-black  px-4 py-3 border-white/5 focus:border-red-500/50 rounded-xl rounded-l-none">Apply</button>
</div>
<button onClick={()=>navigate("/checkout")} className="mt-3 w-full bg-red-500 hover:bg-red-600 text-center text-white rounded-xl py-4 px-3">Proceed to check out </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[400px]">
          <h1 className="text-red-500 text-center text-2xl font-bold">
            oh no! your cart is empty{" "}
          </h1>
          <img src={empty} className="w-[300px]" alt="" />
          <button
            className="bg-gradient-to-br from-red-500 to-purple-500 h-fit py-2 px-4 rounded-xl text-white hover:from-red-700 hover:to-purple-700"
            onClick={() => navigate("/product")}
          >
            continue shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
