import React from "react";
import { useNavigate } from "react-router-dom";

function Breadcome({ title }) {
  const navigate = useNavigate();
  return (
   <div className="flex md:mt-10 md:pb-10 max-w-6xl md:mx-auto font-semibold px-4">
  <div className="flex gap-2 items-center flex-wrap">
    <span onClick={() => navigate("/")} className="cursor-pointer hover:text-red-500 transition-colors">
      home /
    </span>
    <span onClick={() => navigate("/product")} className="cursor-pointer hover:text-red-500 transition-colors">
      product /
    </span>
    <span className="text-red-400 truncate max-w-[150px] md:max-w-full">
      {title}
    </span>
  </div>
</div>
  );
}

export default Breadcome;
