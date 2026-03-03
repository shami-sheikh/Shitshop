import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";
import { ShoppingBag, Truck, CreditCard, Lock, CheckCircle } from "lucide-react";

function Checkout() {
  const { cartitems, setcartitems } = useContext(CartContext);
  const { user } = useUser();
  const navigate = useNavigate();
  const [step, setstep] = useState(1); // 1=delivery, 2=payment, 3=success
  const [loading, setloading] = useState(false);

  const [delivery, setdelivery] = useState({
    name: user?.fullName || "",
    email: user?.emailAddresses[0]?.emailAddress || "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    phone: "",
  });

  const [payment, setpayment] = useState({
    cardname: "",
    cardnumber: "",
    expiry: "",
    cvv: "",
  });

  const handledelivery = (e) => {
    const { name, value } = e.target;
    setdelivery((prev) => ({ ...prev, [name]: value }));
  };

  const handlepayment = (e) => {
    const { name, value } = e.target;
    setpayment((prev) => ({ ...prev, [name]: value }));
  };

  // format card number with spaces
  const formatcard = (value) => {
    return value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim().slice(0, 19);
  };

  // format expiry MM/YY
  const formatexpiry = (value) => {
    return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2").slice(0, 5);
  };

  const total = cartitems
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  const grandtotal = (parseFloat(total) + 5).toFixed(2);

  const submitdelivery = (e) => {
    e.preventDefault();
    const { name, email, address, city, state, postcode, country, phone } = delivery;
    if (!name || !email || !address || !city || !state || !postcode || !country || !phone) {
      toast.error("Please fill in all delivery fields");
      return;
    }
    setstep(2);
    window.scrollTo(0, 0);
  };

  const submitpayment = async (e) => {
    e.preventDefault();
    const { cardname, cardnumber, expiry, cvv } = payment;
    if (!cardname || !cardnumber || !expiry || !cvv) {
      toast.error("Please fill in all payment fields");
      return;
    }
    setloading(true);
    // simulate payment processing
    await new Promise((res) => setTimeout(res, 2000));
    setloading(false);
    setstep(3);
    setcartitems([]);
    window.scrollTo(0, 0);
  };

  // input class reuse
  const inputclass = "w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all";
  const labelclass = "block text-white/70 text-sm mb-1";

  if (step === 3) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] max-w-6xl mx-auto mt-10 px-4">
        <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-12 flex flex-col items-center text-center">
          <CheckCircle className="text-green-500 w-20 h-20 mb-4" />
          <h1 className="text-4xl font-bold text-white mb-2">Order Placed!</h1>
          <p className="text-gray-400 mb-6">Thank you {delivery.name}, your order has been confirmed.</p>
          <p className="text-red-500 font-bold text-2xl mb-8">Total Paid: ${grandtotal}</p>
          <button
            onClick={() => navigate("/product")}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-bold transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden max-w-6xl mx-auto pb-10 mt-10 px-4">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[150px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[150px] z-0 pointer-events-none" />

      <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8 relative z-10"
        style={{ textShadow: "0 0 40px rgba(255,0,60,0.3)" }}>
        Check<span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">out</span>
      </h1>

      {/* Step indicator */}
      <div className="flex items-center gap-4 mb-10 relative z-10">
        {["Delivery", "Payment"].map((label, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step === i + 1 ? "bg-red-500 text-white" : step > i + 1 ? "bg-green-500 text-white" : "bg-white/10 text-gray-400"}`}>
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span className={step === i + 1 ? "text-white font-bold" : "text-gray-500"}>{label}</span>
            </div>
            {i === 0 && <div className="flex-1 h-[1px] bg-white/10" />}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Left - forms */}
        <div className="md:col-span-2">

          {/* Step 1 - Delivery */}
          {step === 1 && (
            <form onSubmit={submitdelivery} className="bg-[#0a0b14] border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="text-red-500" />
                <h2 className="text-2xl font-bold text-white">Delivery Info</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelclass}>Full Name</label>
                  <input name="name" value={delivery.name} onChange={handledelivery} placeholder="John Doe" className={inputclass} />
                </div>
                <div>
                  <label className={labelclass}>Email</label>
                  <input name="email" value={delivery.email} onChange={handledelivery} placeholder="john@email.com" className={inputclass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelclass}>Address</label>
                  <input name="address" value={delivery.address} onChange={handledelivery} placeholder="123 Street Name" className={inputclass} />
                </div>
                <div>
                  <label className={labelclass}>City</label>
                  <input name="city" value={delivery.city} onChange={handledelivery} placeholder="New York" className={inputclass} />
                </div>
                <div>
                  <label className={labelclass}>State</label>
                  <input name="state" value={delivery.state} onChange={handledelivery} placeholder="NY" className={inputclass} />
                </div>
                <div>
                  <label className={labelclass}>Post Code</label>
                  <input name="postcode" value={delivery.postcode} onChange={handledelivery} placeholder="10001" className={inputclass} />
                </div>
                <div>
                  <label className={labelclass}>Country</label>
                  <input name="country" value={delivery.country} onChange={handledelivery} placeholder="United States" className={inputclass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelclass}>Phone</label>
                  <input name="phone" value={delivery.phone} onChange={handledelivery} placeholder="+1 234 567 890" className={inputclass} />
                </div>
              </div>
              <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-all active:scale-95 mt-4">
                Continue to Payment →
              </button>
            </form>
          )}

          {/* Step 2 - Payment */}
          {step === 2 && (
            <form onSubmit={submitpayment} className="bg-[#0a0b14] border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="text-red-500" />
                <h2 className="text-2xl font-bold text-white">Payment</h2>
              </div>
              <div className="flex gap-2 mb-4">
                {["VISA", "MC", "AMEX"].map((card) => (
                  <span key={card} className="bg-white/5 border border-white/10 px-3 py-1 rounded text-xs text-gray-400 font-mono">{card}</span>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <label className={labelclass}>Name on Card</label>
                  <input name="cardname" value={payment.cardname} onChange={handlepayment} placeholder="John Doe" className={inputclass} />
                </div>
                <div>
                  <label className={labelclass}>Card Number</label>
                  <input
                    name="cardnumber"
                    value={payment.cardnumber}
                    onChange={(e) => setpayment((prev) => ({ ...prev, cardnumber: formatcard(e.target.value) }))}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className={inputclass + " font-mono tracking-widest"}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelclass}>Expiry Date</label>
                    <input
                      name="expiry"
                      value={payment.expiry}
                      onChange={(e) => setpayment((prev) => ({ ...prev, expiry: formatexpiry(e.target.value) }))}
                      placeholder="MM/YY"
                      maxLength={5}
                      className={inputclass + " font-mono"}
                    />
                  </div>
                  <div>
                    <label className={labelclass}>CVV</label>
                    <input
                      name="cvv"
                      value={payment.cvv}
                      onChange={(e) => setpayment((prev) => ({ ...prev, cvv: e.target.value.replace(/\D/g, "").slice(0, 3) }))}
                      placeholder="123"
                      maxLength={3}
                      className={inputclass + " font-mono"}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                <Lock size={14} /> <span>Your payment info is encrypted and secure</span>
              </div>
              <div className="flex gap-3 mt-4">
                <button type="button" onClick={() => setstep(1)} className="w-1/3 border border-white/10 text-white font-bold py-3 rounded-xl hover:bg-white/5 transition-all">
                  ← Back
                </button>
                <button type="submit" disabled={loading} className={`w-2/3 font-bold py-3 rounded-xl transition-all active:scale-95 text-white ${loading ? "bg-gray-600" : "bg-red-500 hover:bg-red-600"}`}>
                  {loading ? "Processing..." : `Pay $${grandtotal}`}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right - Order Summary */}
        <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-6 h-fit sticky top-4">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="text-red-500" />
            <h2 className="text-xl font-bold text-white">Order Summary</h2>
          </div>
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
            {cartitems.map((item, i) => (
              <div key={i} className="flex gap-3 items-center border-b border-white/5 pb-3">
                <img src={item.images?.[0]} className="w-12 h-12 object-contain rounded-lg bg-white/5" />
                <div className="flex-1">
                  <p className="text-white text-sm truncate">{item.title}</p>
                  <p className="text-gray-500 text-xs">x{item.quantity || 1}</p>
                </div>
                <p className="text-red-500 font-bold text-sm">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span><span>${total}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Delivery</span><span className="text-green-400">Free</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Handling</span><span>$5.00</span>
            </div>
            <div className="flex justify-between text-white font-bold text-lg border-t border-white/10 pt-3 mt-2">
              <span>Grand Total</span><span className="text-red-500">${grandtotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;