"use client"
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" text-white ">
      {/* Header Content */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="text-2xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Services</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
        <button
            className="relative  text-white font-semibold py-3 px-8  bg-gradient-to-r from-[#BC96F5] via-[#824FAD] to-[#4639BC] hover:from-[#6F26FF] hover:to-[#BC96F5] transition-all duration-500"
            style={{
              clipPath: "polygon(15% 20%, 96% 22%, 94% 57%, 83% 85%, 5% 80%, 7% 45%)",
              boxShadow: "0 0 0 4px #5D22FF", // Simulated border with box-shadow
            }}
          >
          Sell Your Coin
          </button>
        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-blue-700 text-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            ✖️
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-10">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Services</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
