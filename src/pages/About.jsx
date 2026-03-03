import React from "react";
import { Award, HeadphonesIcon, MedalIcon, Shield, Sparkles, Truck, Zap } from "lucide-react";
import {Link} from "react-router-dom"
function About() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto bg-[#060610] relative overflow-hidden py-6">
      <div className="flex items-center justify-center gap-3 mb-6 mt-10">
        <div className="w-12 mt-10 h-[2px] bg-gradient-to-r from-transparent to-red-500"></div>
        <Zap
          className="animate-spin text-red-500"
          size={20}
          fill="currentColor"
        />
        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-red-500"></div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1
          className="text-2xl md:text-7xl font-black text-white mb-4 uppercase tracking-tight"
          style={{ textShadow: "0 0 60px rgba(255,0,60,0.4)" }}
        >
          About{" "}
          <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
            ShitShop
          </span>
        </h1>
        <h1 className=" py-2 text-gray-500 font-semibold text-xl">
          Your one-stop destination for cutting-edge electronics
        </h1>
      </div>
      {/* about section */}
      <div className="bg-[#0a0b14]  font-serif text-sm text-white  border md:mt-16 mt-8  border-white/5 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-red-500/20"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-500/20"></div>

        <p className="text-gray-300 text-lg leading-relaxed text-center relative z-10">
          Welcome to <span className="text-red-400 font-bold">ShitShop</span>,
          your one-stop destination for the latest and greatest in electronics.
          From cutting-edge gadgets to must-have accessories, we're here to
          power up your tech life with premium products and unbeatable service.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
         <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="text-red-500" size={24} />
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                At Zaptro, our mission is to make innovative technology accessible
                to everyone. We're passionate about connecting people with the
                tools and tech they need to thrive in a digital world — all at
                competitive prices and delivered with speed and care.
              </p>
            </div>
      <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="text-purple-500" size={24} />
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where technology elevates everyday life. At Zaptro, 
                we're committed to staying ahead of the curve, offering cutting-edge 
                solutions that are both practical and affordable.
              </p>
            </div>
      </div>
      <div className="bg-black items-center gap-4 font-serif text-sm text-white  border md:mt-16 mt-8  border-white/5 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500 ">
        <h1 className="flex items-center text-4xl font-bold text-center text-white">Why Choose Zaptro?</h1>
        <div className="grid grid-cols-1 mt-6 space-y-3 items-center gap-5 md:grid-cols-2 bg-white/5">
 {/* Feature 1 */}
              <div className="flex items-start mt-4  gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all group">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Premium Quality</h3>
                  <p className="text-gray-400 text-sm">Top-quality electronic products from trusted brands</p>
                </div>
              </div>
              {/* feature-2 */}
              <div className="flex  items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all group">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <HeadphonesIcon className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">24/7 Support</h3>
                  <p className="text-gray-400 text-sm">Reliable customer support, always ready to help</p>
                </div>
              </div>
              {/* feature-3 */}
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all group">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Truck className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Fast Shipping</h3>
                  <p className="text-gray-400 text-sm">Lightning-fast and secure delivery to your door</p>
                </div>
              </div> 
               {/* Feature 4 */}
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all group">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MedalIcon className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Easy Returns</h3>
                  <p className="text-gray-400 text-sm">Hassle-free returns and shopping experience</p>
                </div>
              </div>
        </div>
      </div>
           <div className="relative bg-gradient-to-br from-red-500/10 via-purple-500/10 to-red-500/10 rounded-2xl p-10 md:p-16 text-center border border-red-500/20 overflow-hidden group">
            {/* Animated border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight relative z-10">
              Join the Zaptro <span className="text-red-500">Family</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto relative z-10">
              Whether you're upgrading your setup or exploring the latest innovations, 
              Zaptro is your trusted partner in all things tech. Let's build the future together.
            </p>
          <Link to={"/products"}>
            <button  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-10 py-4 rounded-xl font-bold text-white uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-red-500/30 relative z-10">
              Start Shopping Now
            </button>
          </Link>
          </div>
    </div>
  );
}

export default About;
