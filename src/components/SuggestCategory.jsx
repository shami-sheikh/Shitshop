import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

function SuggestCategory() {
  const { CategoryOnlyData } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="md:flex grid grid-cols-2 w-full  justify-center md:flex-wrap  gap-3 py-4 items-center">
      {CategoryOnlyData?.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(`/category/${item}`)}
          className="relative group px-5 py-2 rounded-full border border-red-500/30 
                     bg-red-500/10 text-white text-sm font-mono uppercase tracking-widest 
                     hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-500 
                     hover:border-transparent hover:scale-105 
                     transition-all duration-300 cursor-pointer backdrop-blur-sm"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default SuggestCategory;
