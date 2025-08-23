import React from "react";
import Nav from "./Nav";
import bg from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div
      className="h-screen max-w-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Nav />

      <div className="flex flex-col items-start justify-center h-full text-white font-[Cormorant] px-10 mt-[140px]">
        <h1 className="text-5xl md:text-6xl font-medium mb-4 ">
          Drive Your Dream, Anytime, Anywhere.
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl ">
          Choose from a wide range of cars — luxury, comfort, and budget-friendly rides, all at your fingertips.
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full transition cursor-pointer">
          Book Now
        </button>
      </div>

    </div>
  );
};

export default Hero;
