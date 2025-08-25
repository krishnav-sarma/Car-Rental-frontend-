import React from "react";
import Nav from "./Nav";
import bg from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Navbar */}
      <Nav />

      {/* Hero Content */}
      <div className="flex flex-col items-center md:items-start justify-center h-full text-white font-kregan px-6 md:px-16 lg:px-32 text-center md:text-left mt-20  md:mt-[90px]">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-snug mb-4 max-w-3xl">
          Drive Your Dream, Anytime, Anywhere.
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
          Choose from a wide range of cars — luxury, comfort, and budget-friendly rides, all at your fingertips.
        </p>

        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg transition cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
