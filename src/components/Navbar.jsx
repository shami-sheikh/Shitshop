import React, { useContext, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin, ChevronDown, ShoppingCart, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Navbar({ address }) {
  const {cartitems}=useContext(CartContext)
  const [openmenu, setopenmenu] = useState(false);
  const [openlocation, setopenlocation] = useState(false);
  return (
    <>
      {openmenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden "
          onClick={() => setopenmenu(false)}
        ></div>
      )}

      <div className="bg-[#060610] text-white w-full shadow-2xl py-4 font-serif">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}</style>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          {/* Mobile */}
          <div className="flex justify-between items-center md:hidden w-full py-1">
            {/* Logo */}
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

            {/* Right Icons */}
            <div className="flex items-center gap-5">
              {/* Location */}
              <MapPin
                className="text-red-500 h-5 w-5 cursor-pointer"
                onClick={() => setopenlocation(!openlocation)}
              />

              {/* Cart */}
              <Link to="/cart" className="relative">
                <ShoppingCart className="text-red-500 h-5 w-5 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-[#060610]">
                 {cartitems.length}
                </span>
              </Link>

              {/* Menu Button */}
              <button
                onClick={() => setopenmenu(true)}
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div
            className={`fixed md:hidden top-0 right-0 h-[1000px] w-64 z-50 shadow-xl transform transition-transform duration-300 bg-[#060610] ${openmenu ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="mt-6 px-4 text-gray-500 flex justify-between items-center py-4 border-red-500 border-b">
              <h1 className=" text-2xl ">menu</h1>
              <X
                className="text-2xl cursor-pointer"
                onClick={() => setopenmenu(false)}
              />
            </div>
            {/*items  */}
            <div className="flex md:hidden flex-col   mt-6">
              <ul className="flex  space-y-4 px-5 text-xl font-bold  flex-col">
                {["/", "/product", "/about", "/contact", "/cart"].map(
                  (path, i) => (
                    <NavLink
                      key={path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-white  "
                          : "text-gray-400 hover:text-white transition-colors"
                      }
                      to={path}
                    >
                      <li>
                        {["Home", "Product", "About", "Contact", "Cart"][i]}
                      </li>
                    </NavLink>
                  ),
                )}
              </ul>
              <div className="mt-12 px-1 py-2  items-center flex   text-white bottom-0">
                <div className="border border-gray-500 flex text-2xl p-2 gap-4">
                  <SignedOut>
                    <div className="flex gap-2 items-center">
                      <SignInButton mode="modal">
                        <button className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                          Sign In
                        </button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <button className="text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors px-3 py-1.5 rounded-md">
                          Sign Up
                        </button>
                      </SignUpButton>
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                  <h1>accounts</h1>
                </div>
              </div>
            </div>
          </div>
          {openlocation && (
            <div className="flex flex-col md:hidden absolute   top-14 mt-5 z-40 w-full px-4  bg-[#0e0e1a]">
              <h2 className="text-white font-semibold mb-2  text-center text-xl py-2 border-b border-red-500">
                Your Location
              </h2>
              <X
                onClick={() => setopenlocation(false)}
                className="absolute right-8 text-gray-500 cursor-pointer"
              />
            <div className="flex flex-col">
               {
              address ? (
                <div className="flex flex-col ">
                  <h1>{address.city||address.town||address.village||""}</h1>
                  <h1>{address.postcode||""}</h1>
               <h1>   {address.state||""}</h1>
                </div>
              ):(
                <div className="text-sm text-gray-500 animate-pulse">locating...</div>
              )
             }
            </div>
            </div>
          )}
          {/* Desktop Left */}
          <div className="md:flex gap-8 items-center hidden py-2">
            <a href="">
              <h1
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
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
            <div className="flex items-center gap-1 text-gray-400">
              <div>
                <MapPin className="text-red-500 h-4 w-4" />
              </div>

              {address ? (
                <div className="text-xs animate-pulse">
                  {address.city || address.town || address.village||""},{" "}
                  {address.state}
                </div>
              ) : (
                <div className="animate-pulse text-xs">Locating...</div>
              )}
              <ChevronDown
                className={`h-4 w-4 cursor-pointer transition-transform duration-300 ${openlocation ? "rotate-180" : ""}`}
                onClick={() => setopenlocation(!openlocation)}
              />
            </div>
          </div>
          {openlocation && (
  <div className="md:block hidden absolute items-center top-14 mt-5 z-40 w-72 bg-[#0e0e1a]">
    <h2 className="text-white font-semibold mb-2 text-center text-xl py-2 border-b border-red-500">
      Your Location
    </h2>
    <X
      onClick={() => setopenlocation(false)}
      className="absolute right-3 text-gray-500 cursor-pointer"
    />
    <div className="mt-4 flex flex-col px-4 mb-3">
      {address ? (
        <>
          <h1 className="text-sm text-gray-500 font-serif font-semibold">
            {address.city || address.town || address.village || ""}
          </h1>
          <h1 className="text-sm text-gray-500 font-serif font-semibold">
            {address.postcode || ""}
          </h1>
          <h1 className="text-sm text-gray-500 font-serif font-semibold">
            {address.state || ""}
          </h1>
          <h1 className="text-sm text-gray-500 font-serif font-semibold">
            {address.country || ""}
          </h1>
        </>
      ) : (
        <div className="text-sm text-gray-500 animate-pulse py-2">Locating...</div>
      )}
    </div>
  </div>
)}
          {/* Desktop Right */}
          <div className="md:flex hidden gap-8 items-center">
            <ul className="flex space-x-6 font-semibold text-xl">
              {["/", "/product", "/about", "/contact", "/cart"].map(
                (path, i) => (
                  <NavLink
                    key={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white border-b-2 border-red-500"
                        : "text-gray-400 hover:text-white transition-colors"
                    }
                    to={path}
                  >
                    <li>
                      {["Home", "Products", "About", "Contact", "Cart"][i]}
                    </li>
                  </NavLink>
                ),
              )}
            </ul>

            <div className="flex gap-6 items-center">
              <Link  to="/cart" className="relative">
                <ShoppingCart className="text-red-500 h-7 w-7 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
               {cartitems.length}
                </span>
              </Link>

              <SignedOut>
                <div className="flex gap-2 items-center">
                  <SignInButton mode="modal">
                    <button className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors px-3 py-1.5 rounded-md">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
