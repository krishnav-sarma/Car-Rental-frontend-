import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00060a] text-white py-10 px-20  ">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Krishnav . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
