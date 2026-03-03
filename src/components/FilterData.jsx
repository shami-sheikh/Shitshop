import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function FilterData({
  category,
  setcategory,
  brand,
  setbrand,
  search,
  setsearch,
  priceRange,
  setpriceRange,
}) {
  const { CategoryOnlyData, BrandOnlyData } = useContext(DataContext);
  const totalCategory = (e) => {
    const value = e.target.value;
    // if already selected, remove it — else add it
    setcategory((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value],
    );
  };
  const Totalbrand = (e) => {
    setbrand(e.target.value);
    console.log(brand);
  };
   const handleReset=()=>{
    setsearch('')
    setcategory([])
    setpriceRange([0,2999])
    setbrand('All')
  }
  return (
    <div className="py-5 mt-10 bg-red-500/10 w-full p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="md:w-1/4">
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Search products..."
            className="text-black w-full py-2 px-4 rounded-lg border border-red-500/30 outline-none focus:border-red-500"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col md:w-1/4">
          <h1 className="flex  font-bold text-white py-2 text-xl ">Category</h1>
          <div className="flex flex-col gap-2 uppercase">
            {CategoryOnlyData?.map((item, index) => {
              return (
                <div key={index} className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    onChange={totalCategory}
                    value={item}
                    checked={category.includes(item)}
                    id={`category-${index}`}
                    className="h-4 w-4 cursor-pointer"
                  />
                  <label
                    htmlFor={`category-${index}`}
                    className="text-sm uppercase cursor-pointer"
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {/* brand section */}
        <div className=" flex flex-col  md:w-1/4">
          <h1 className="flex  font-bold text-white  text-2xl py-3">brand</h1>
          <select
            onChange={Totalbrand}
            value={brand}
            className="w-full bg-[#0f1220] text-white border border-red-500/30 rounded-lg px-3 py-2 outline-none focus:border-red-500 cursor-pointer"
          >
            {BrandOnlyData?.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {" "}
                  {item}{" "}
                </option>
              );
            })}
          </select>
        </div>
        {/* price */}
        <div className="md:w-1/4 flex flex-col gap-3">
          <h1 className="flex  font-bold text-white  text-2xl py-3">price</h1>
          <input
             className="w-full accent-red-500"
            type="range"
            min={1}
            max={2999}
            value={priceRange[1]}
            onChange={(e) =>
              setpriceRange([priceRange[0], Number(e.target.value)])
            }
          />
          <div className="flex justify-between text-white">
            <span>$1</span>
            <span>${priceRange[1]}</span>
          </div>
          <button onClick={handleReset} className="w-full mt-3 bg-gradient-to-br from-red-500 to-purple-500 py-2 px-3 rounded-xl active:scale-90 text-white">Reset All</button>
        </div>
      </div>
    </div>
  );
}

export default FilterData;
