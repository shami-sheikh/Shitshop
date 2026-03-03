import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./contexts/DataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import axios from "axios";
import CategoryProduct from "./pages/CategoryProduct";
import Footer from "./pages/Footer";
import Checkout from "./pages/Checkout";
import SingleProduct from "./components/SingleProduct";
function App() {
  const { TotalProduct } = useContext(DataContext);
  const [address, setaddress] = useState(null);
  const GetLocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      // console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      // console.log(data.address);
      
      try {
        const { data } = await axios.get(url);
        setaddress(data.address);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    TotalProduct();
    GetLocation();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:category" element={<CategoryProduct />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart address={address} />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
