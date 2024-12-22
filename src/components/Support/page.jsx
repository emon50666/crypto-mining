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
        <section className="relative pt-28 grid-flow-row  grid lg:grid-cols-2 md:grid-cols-2   px-4 py-10 md:px-8 ">
            {/* Background Gradient */}
            <div className="relative z-10   ">
                
            </div>
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(to right, #0B0B0F, #211C32, #110E1B, #211C35)',
                }}
            ></div>

            {/* Overlay Image */}
            <div data-aos="zoom-in" className="absolute inset-0 z-0 ">
                <Image
                    src="/suport.png" // Overlay image
                    alt="Overlay Background"
                    width={800}
                    height={200}
                    priority
                    className="opacity-60  max-h-[700px]  " 
                />
            </div>

            {/* Content */}
            <div data-aos="zoom-in-up" className=" z-10    mt-10 lg:bottom-28 md:bottom-28 xl:bottom-28 2xl:bottom-28   relative   text-center lg:text-left  text-[#ffe6fe]">

               <div className=''>
               <h1 className='text-lg text-start lg:text-3xl  text-[#e3dcffa1] '> 
               Need Assistance? We're Here to Help!</h1>
                
               </div>
                <p className=" text-[13px] lg:text-[18px] text-[#e3dcffb8] pt-2 lg:pt-5 text-start "   ><span className="before:content-['1'] pt-3 flex before:p-3 before:w-4 before:h-4 before:bg-[#52316dc1] before:text-white before:font-bold before:flex before:items-center before:justify-center before:rounded-full  before:mr-3"> 24/7 Customer Assistance: Reach out anytime, day or night.</span>
                <span className="before:content-['2']  pt-3 flex before:p-3 before:w-4 before:h-4 before:bg-[#52316dc1] before:text-white before:font-bold before:flex before:items-center before:justify-center before:rounded-full  before:mr-3"> Expert Guidance: Get answers from our crypto-savvy support team.</span>

                   <span className="before:content-['3'] pt-3 flex before:p-3 before:w-4 before:h-4 before:bg-[#52316dc1] before:text-white before:font-bold before:flex before:items-center before:justify-center before:rounded-full  before:mr-3">Quick Resolutions: Fast and reliable solutions to your queries.</span>
                   <span className="before:content-['4'] pt-3 flex before:p-3 before:w-4 before:h-4 before:bg-[#52316dc1] before:text-white before:font-bold before:flex before:items-center before:justify-center before:rounded-full  before:mr-3">User-Centric Support: Your satisfaction is our top priority.</span>
                   <span className="before:content-['5'] pt-3 flex before:p-3 before:w-4 before:h-4 before:bg-[#52316dc1] before:text-white before:font-bold before:flex before:items-center before:justify-center before:rounded-full  before:mr-3">Secure Communication: Ensuring your data and concerns remain private.</span>
                   <span className="before:content-['6'] pt-3 flex before:p-3 before:w-4 before:h-4 before:bg-[#52316dc1] before:text-white before:font-bold before:flex before:items-center before:justify-center before:rounded-full  before:mr-3">Stay confident with Crypto Flow—we’re here to keep your journey smooth and stress-free!</span>
                </p>
                <button
            className="  text-white flex  lg:justify-start  font-semibold py-5 ml-1  px-8 
            bg-gradient-to-r 
             from-[#824FAD] via-[#4639BC] to-[#BC96F5] hover:from-[#6F26FF] 
             hover:to-[#BC96F5] transition-all duration-500"
            style={{
              clipPath: "polygon(15% 20%, 96% 22%, 96% 57%, 83% 85%, 5% 80%, 7% 45%)",
              boxShadow: "0 0 0 4px #5D22FF", // Simulated border with box-shadow
            }}
          >
          Get Started
          </button>

            </div>
            {/* Right Image */}

        </section>
    );
}
