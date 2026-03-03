import axios from "axios";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import loading from "../assets/src_assets_Loading4.webm"
function CategoryProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const category = params.category;
  const [searchData, setSearchData] = useState([]);
  const getCategory = async () => {
    const url = `https://dummyjson.com/products/category/${category}`;
    try {
      const res = await axios.get(url);
      const data = res.data;
      // dummyjson returns { products: [...] }
      setSearchData(Array.isArray(data.products) ? data.products : []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
    window.scroll(0, 0);
  }, [category]);
  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto  pb-0 mt-10">
          <button
            onClick={() => navigate("/")}
            className="flex px-3 py-2 bg-white/5 rounded-lg mt-5  active:scale-75"
          >
            <ChevronLeft /> back
          </button>
          <div className="mx-auto bg-black  mt-10 ">
            {searchData.map((item, index) => {
              return <ProductList key={index} item={item} />;
            })}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video src={loading} autoPlay loop muted className=" object-cover"></video>
        </div>
      )}
    </div>
  );
}

export default CategoryProduct;
//  <div className=' '>

//     </div>
