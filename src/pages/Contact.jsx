import {
  Clock2,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  UserRound,
} from "lucide-react";
import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { toast } from "react-hot-toast";
function Contact() {
  // const { setloading, loading } = useContext(DataContext);
const [loading,setloading]=useState(false)
  const [inputfield, setinputfield] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleinputfield = (e) => {
    const { name, value } = e.target;
    setinputfield((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const { email, name, message } = inputfield;
    if (!email || !name || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setloading(true);
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "20cca644-fe79-4a84-86b0-1c7929de0cb2");
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
     const res = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: json,
}).then((res) => res.json());

console.log("Web3Forms Response:", res);
      if (res.success) {
        toast.success("Your message has been sent!");
        setinputfield({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setloading(false);
    }
  };
  return (
    <div className="flex flex-col max-w-6xl mx-auto pb-10 mt-10 ">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] z-0" />
      <div className="mx-auto flex flex-col  ">
        <h1 className=" text-4xl md:text-6xl font-bold text-center py-3 text-white">
          Get In <span> Touch</span>
        </h1>
        <h1 className="text-xl  text-gray-500 ">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </h1>
      </div>
      {/* contact section */}
      <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-4 lg:grid-cols-4 mx-auto mt-10 ">
        <div className="flex flex-col items-center px-4 py-4 h-64 pt-10  bg-black p-2 rounded-xl">
          <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Mail className="text-red-500" size={30} />
          </div>
          <h1 className="mt-3 text-xl text-white font-bold ">Email Us</h1>
          <p className="py-3  ">Drop us a line anytime</p>
          <p className="text-red-500 text-sm ">support@Zaptro.com</p>
        </div>
        {/* item-2 */}
        <div className="flex flex-col items-center px-4 py-4 h-64 pt-10  bg-black p-2 rounded-xl">
          <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Phone className="text-red-500" size={20} />
          </div>
          <h1 className="mt-3 text-xl text-white font-bold ">Call Us</h1>
          <p className="py-3  ">Mon-Fri 8AM-6PM</p>
          <p className="text-red-500 text-sm ">+9112345678910</p>
        </div>
        {/* 3 */}
        <div className="flex flex-col items-center px-4 py-4 h-64 pt-10  bg-black p-2 rounded-xl">
          <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <MapPin className="text-red-500" size={30} />
          </div>
          <h1 className="mt-3 text-xl text-white font-bold ">Visit Us</h1>
          <p className="py-3  ">Come say hello at our office</p>
          <p className="text-red-500 text-sm ">
            123 Tech Street, San Francisco
          </p>
        </div>
        {/* 4 */}
        <div className="flex flex-col items-center px-4 py-4 h-64 pt-10  bg-black p-2 rounded-xl">
          <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Clock2 className="text-red-500" size={30} />
          </div>
          <h1 className="mt-3 text-xl text-white font-bold ">Business Hours</h1>
          <p className="py-3 flex gap-3 md:gap-6 ">
            Monday - Friday <span className="text-red-500">8AM - 6PM</span>
          </p>
          <p className="text-red-500 text-sm ">support@Zaptro.com</p>
        </div>
      </div>
      {/* form */}
      <form
        onSubmit={onSubmit}
        className="bg-[#0a0b14] p-8 md:w-[70%] rounded-2xl mt-10 mx-auto space-y-4 "
      >
        <div className="flex flex-col mt-4 text-center ">
          <h1 className="py-3 text-5xl font-bold text-white">
            {" "}
            Send us a Message
          </h1>
          <p className="text-sm">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>
        {/* name */}
        <div className="flex flex-col ">
          <label className="block text-white/80 text-sm font-bold mb-2 uppercase tracking-wider">
            Your Name
          </label>
          <div className="relative">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-red-400 transition-colors"
              size={18}
            />
            <input
            value={inputfield.name}
              onChange={handleinputfield}
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder-white/30 focus:border-red-500/50 focus:bg-white/10 outline-none transition-all font-mono"
              required
            />
          </div>
        </div>
        {/* email */}
        <div className="py-4">
          <label className="block text-white/80 text-sm font-bold mb-2 uppercase tracking-wider">
            Your Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
            value={inputfield.email} onChange={handleinputfield} 
              required
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-white/5 rounded-xl px-12 py-4 text-white placeholder-white/30 focus:border-red-500/50 focus:bg-white/10 outline-none transition-all font-mono"
              autoComplete="off"
            />
          </div>
        </div>
        <div>
          <label className="block text-white/80 text-sm font-bold mb-2 uppercase tracking-wider">
            Message
          </label>
          <textarea
value={inputfield.message} onChange={handleinputfield} 
            required
            name="message"
            className="bg-white/5 w-full h-[200px] rounded-xl text-sm px-4 pt-4 placeholder-white/30 focus:border-red-500/50 focus:bg-white/10 outline-none transition-all font-mono"
            placeholder="Tell us more about your inquery..."
          />
        </div>
        <button disabled={loading}  className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-bold uppercase tracking-wider transition-all ${loading
          ? "bg-gray-500 text-white":"bg-red-500 "
        }
        
        `}>
          {" "}
          <Send /> Send Message
        </button>
      </form>
      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-transparent via-red-500/20 to-transparent h-[1px] mb-8"></div>
        <p className="text-white/60 font-mono text-sm">
          Need immediate assistance? Check out our{" "}
          <a
            href="#"
            className="text-red-400 hover:text-red-300 transition-colors font-bold"
          >
            FAQ section
          </a>{" "}
          or{" "}
          <a
            href="#"
            className="text-red-400 hover:text-red-300 transition-colors font-bold"
          >
            live chat
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
