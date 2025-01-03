"use client"
import Image from "next/image";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" text-white ">
      {/* Header Content */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* <div className="text-xl  capitalize bg-[#12514C]/80 rounded-md px-2 shadow-sm text-
        [#FFFFFD] font-sans flex items-center gap-2 shadow-[#824FAD] "> <FaBitcoin className="text-[#BC96F5] text-2xl"/> crypto flow</div> */}

        <div className="flex  items-center font-bold text-lg text-[#f3e3ff] bg-[#13514D]/30">
          <Image
            src="/logo.png"
            alt="Right Side Image"
            width={100}
            height={9}
            className="  rounded-md w-[50px] lg:max-w-[50px] xl:max-w-[50px]  "
            priority
          />
          <h1>Crypto Flow</h1>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-normal text-[#e9cfff]">
          <a href="#about" className="hover:text-[#BC96F5] hover:underline cursor-pointer">About Us</a>
          <a href="#grow" className="hover:text-[#BC96F5] hover:underline cursor-pointer">Grow</a>
          <a href="#market" className="hover:text-[#BC96F5] hover:underline cursor-pointer">Markets</a>
          <a href="#service" className="hover:text-[#BC96F5] hover:underline cursor-pointer">Service</a>
          <a href="#support" className="hover:text-[#BC96F5] hover:underline cursor-pointer">Support</a>

        </ul>
        <button
          className="relative  hidden sm:hidden md:hidden lg:block xl:block animate-pulse hover:animate-none text-white font-semibold py-5 px-8  bg-gradient-to-r from-[#BC96F5] via-[#824FAD] to-[#4639BC] hover:from-[#6F26FF] hover:to-[#BC96F5] transition-all duration-100000"
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
          className="lg:hidden text-2xl cursor-pointer focus:outline-none"
        >
          {isMenuOpen ? <IoCloseOutline /> : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-gradient-to-r 
             from-[#0B0B0F] via-[#110E1B] to-[#211C32] text-white shadow-lg transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl cursor-pointer focus:outline-none">
            <IoCloseOutline />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 mt-10 font-normal text-[#e9cfff]">
          <a href="#about" className="hover:text-[#BC96F5] hover:underline cursor-pointer">About Us</a>
          <a href="#grow" className="hover:text-[#BC96F5] hover:underline cursor-pointer">Grow</a>
          <a href="#market" className="hover:text-[#BC96F5] hover:underline cursor-pointer">Markets</a>
          <a href="#service" className="hover:text-[#BC96F5] hover:underline cursor-pointer">Service</a>
          <a href="#support" className="hover:text-[#BC96F5] hover:underline cursor-pointer">Support</a>
        </ul>

      </div>
    </nav>
  );
};

export default Header;
