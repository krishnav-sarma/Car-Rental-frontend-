import React from "react";

const Nav = () => {
  return (
    <div className="z-[10000]">
      <nav className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-4 bg-transparent">
        <h1 className="font-kregan text-5xl md:text-7xl text-white mb-4 md:mb-0 md:text-black">
          Car <span className="text-amber-600">Rent</span>
        </h1>
        <ul className="flex flex-col md:flex-row gap-6 md:gap-12 text-lg md:text-xl font-kregan font-medium text-black md:text-white">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Cars</li>
          <li className="cursor-pointer">Contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
