import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import loading from "../assets/src_assets_Loading4.webm";
import FilterData from "../components/FilterData";
import ProductCard from "../components/ProductCard";

function Product() {
  const [search, setsearch] = useState("");
  // use an array for selected categories; empty array = no restriction
  const [category, setcategory] = useState([]);
  const [brand, setbrand] = useState("All");
  const [priceRange, setpriceRange] = useState([0, 2999]);
  const [currentPage, setcurrentPage] = useState(1);

  const { products, TotalProduct } = useContext(DataContext);

  useEffect(() => {
    TotalProduct();
    window.scroll(0, 0);
  }, []);

  // build filtered list based on current controls
  const filter = products.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category.length === 0 || category.includes(item.category)) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  // reset to page 1 when filters change
  useEffect(() => {
    setcurrentPage(1);
  }, [search, category, brand, priceRange]); // ✅ Bug 3 fixed: priceRange not price

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filter.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalFilterProduct = filter.slice(startIndex, endIndex);

  return (
    <div className="max-w-6xl px-4 pb-10 mx-auto">
      {products.length > 0 ? (
        <div>
          <FilterData
            category={category}
            setcategory={setcategory}
            brand={brand}
            setbrand={setbrand}
            search={search}
            setsearch={setsearch}
            priceRange={priceRange}
            setpriceRange={setpriceRange}
          />

          <p className="text-gray-400 text-sm mt-4">
            Showing {totalFilterProduct.length} of {filter.length} products
          </p>

          <ProductCard products={totalFilterProduct} />

          {/* pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={() => setcurrentPage((prev) => Math.max(prev - 1, 1))} // ✅ Bug 2 fixed: bracket in right place
                disabled={currentPage === 1}
                className="px-6 py-2 bg-red-500 text-white rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-red-600 transition"
              >
                Prev
              </button>

              {/* page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setcurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-bold transition ${
                    currentPage === page
                      ? "bg-red-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setcurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-2 bg-red-500 text-white rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-red-600 transition"
              >
                Next
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[400px] w-full">
          <video src={loading} muted loop autoPlay />
        </div>
      )}
    </div>
  );
}

export default Product;