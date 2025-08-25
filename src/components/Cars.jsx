import React from "react";
import bugatti from "../assets/bugatti.png";

const Cars = () => {
  return (
    <div className="bg-[#00060a] w-full flex flex-col items-center justify-center py-16 px-6">
      {/* Title */}
      <h1 className="text-white font-kregan text-4xl sm:text-6xl md:text-8xl lg:text-[96px] mb-10 text-center">
        Cars
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#111] rounded-2xl p-6 shadow-lg hover:scale-105 transition"
            >
              <img
                className="w-full h-48 object-contain mb-4"
                src={bugatti}
                alt="car"
              />
              <button className="bg-[#2f383f] hover:bg-[#384249] text-white px-6 py-3 rounded-full transition cursor-pointer">
                Book Now
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cars;
