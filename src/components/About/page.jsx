'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing type
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section id="about" className="relative pt-28 grid-flow-row grid lg:grid-cols-2 md:grid-cols-2 px-4 py-10 md:px-8">
      {/* Left Side Content */}
      <div
         data-aos="fade-right" // AOS animation for the right side
        className="relative z-10 w-full max-w-sm lg:max-w-md"
      >
        <Image
          src="/mobile.png"
          alt="Left Side Image"
          width={300}
          height={100}
          className="lg:w-[400px] md:w-[300px] h-auto"
          priority
        />
      </div>

      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, #0B0B0F, #211C32, #110E1B, #211C35)',
        }}
      ></div>

      {/* Overlay Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/looper.png"
          alt="Overlay Background"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-70"
        />
      </div>

      {/* Right Side Content */}
      <div
        data-aos="fade-left" // AOS animation for the right side
        className="z-10 mt-10 lg:mt-0 text-center lg:text-left text-[#ffe6fe]"
      >
        <div>
          <h1 className="text-xl text-start lg:text-3xl text-[#e3dcffa1]">
            About Us - Crypto Flow
          </h1>
        </div>
        <p className="text-[13px] lg:text-[15px] text-[#e3dcffb8] pt-5 text-start">
          <span className="before:content-['1'] pt-3 flex before:p-3 before:w-4 before:h-4 before:bg-[#52316dc1] before:text-white before:font-bold before:flex before:items-center before:justify-center before:rounded-full before:mr-3">
            Welcome to Crypto Flow, your trusted partner in navigating the dynamic world of cryptocurrency. Founded with a vision to empower individuals and businesses, we aim to make digital finance accessible, transparent, and secure for everyone.
          </span>
          <span className="before:content-['2'] pt-3 flex before:p-3 before:w-4 before:h-4 before:bg-[#52316dc1] before:text-white before:font-bold before:flex before:items-center before:justify-center before:rounded-full before:mr-3">
            At Crypto Flow, we specialize in offering cutting-edge insights, tools, and resources to help you stay ahead in the ever-evolving crypto space. Whether you're a beginner exploring blockchain or an expert trader, our platform is designed to meet your needs with seamless functionality and user-friendly features.
          </span>
          <span className="before:content-['3'] pt-3 flex before:p-3 before:w-4 before:h-4 before:bg-[#52316dc1] before:text-white before:font-bold before:flex before:items-center before:justify-center before:rounded-full before:mr-3">
            We believe in fostering a community driven by innovation, education, and growth. By providing up-to-date market analysis, expert guidance, and a secure environment, we are committed to ensuring your journey in cryptocurrency is smooth and rewarding.
          </span>
        </p>

        {/* Button Section */}
        <div className="flex lg:justify-start mt-5">
          <button
            className="text-white font-semibold py-5 px-8 bg-gradient-to-r from-[#824FAD] via-[#4639BC] to-[#BC96F5] hover:from-[#6F26FF] hover:to-[#BC96F5] transition-all duration-500"
            style={{
              clipPath: 'polygon(15% 20%, 96% 22%, 96% 57%, 83% 85%, 5% 80%, 7% 45%)',
              boxShadow: '0 0 0 4px #5D22FF',
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
