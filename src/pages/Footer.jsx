
import React from "react";
import { FaTwitter,FaInstagramSquare,FaFacebook  } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-[#101828] w-full px-4 h-fit py-4 md:py-10 md:px-10 font-serif  ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-8 ">
        {/* first */}
        <div className="flex flex-col pt-5">
          <a href="/">
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.9rem",
                letterSpacing: "0.05em",
                margin: 0,
                lineHeight: 1,
              }}
            >
              <span style={{ color: "#ffffff" }}>S</span>
              <span
                style={{
                  color: "#ef4444",
                  textShadow: "0 0 20px rgba(239,68,68,0.5)",
                }}
              >
                HITSHOP
              </span>
            </h1>
          </a>
          <div className="pt-2">
            
            <h3 className="font-semibold flex py-3">Powering Your World with the Best in Electronics.</h3>
            <p className="text-gray-300">123 Electronics St, Style City, NY 10001</p >
            <p  className="text-gray-300">Email: support@Zaptro.com</p>
            <p className="text-red-500">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="flex flex-col pt-5">
          <a href="/">
            <h1 className="text-2xl font-bold text-white ">
              Customer Service
            </h1>
          </a>
          <div className="pt-2 space-y-3">
            
            <h3 className=" flex text-gray-300">Contact Us.</h3>
            <p className="text-gray-300">Shipping & Returns</p >
            <p  className="text-gray-300">FAQs</p>
            <p className="text-gray-300">Order Tracking</p>
            <p className="text-gray-300">Size Guide</p>
          </div>
        </div>
        <div className="flex flex-col pt-5">
          <a href="/">
            <h1 className="font-bold text-3xl text-white"
              >
                Follow Us
            </h1>
          </a>
          <div className="pt-2 flex gap-3 text-xl text-white">
            
           <FaTwitter/>
           <FaInstagramSquare />
           <FaFacebook />
          </div>
        </div>
        <div className="flex flex-col pt-5">
          <a href="/">
            <h1 className="text-xl text-white font-bold"
              >
                Stay in the Loop
            </h1>
          </a>
          <div className="pt-2">
            
            <h3 className=" flex py-3 text-white">Subscribe to get special offers, free giveaways, and more</h3>
           <div className="w-full pt-2  flex ">
            <input type="text" placeholder="Your email " className="px-4 w-full py-3 rounded-xl rounded-r-none text-white" />
            <button className="bg-red-500 hover:bg-red-600 duration-200 transition-all text-white rounded-l-none rounded-xl  px-3 py-3">Subscribe</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
