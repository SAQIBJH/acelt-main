// components/MdfMarvels.js
import React from "react";

const MdfMarvels = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-5 py-12 min-h-[300px]">
      <div className="md:max-w-[60%] text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-black">
          <span className="block">MDF</span>
          <span className="block">Marvels</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-6">
          Explore our range of trendsetting MDF panels, blending style and durability to redefine modern interiors.
        </p>
      </div>
      <div className="text-7xl md:text-8xl font-bold text-gray-400 opacity-50 mt-8 md:mt-0">
        01
      </div>
    </div>
  );
};

export default MdfMarvels;