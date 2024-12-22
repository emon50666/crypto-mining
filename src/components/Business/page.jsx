'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Business() {

    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Easing type
        once: true, // Whether animation should happen only once
      });
    }, []);
  
  return (
    <section className="relative flex flex-col-reverse lg:flex-row gap-4 justify-between px-4 py-10 md:px-8 lg:px-8">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, #0B0B0F, #211C32, #110E1B, #211C32)',
        }}
      ></div>

    

      {/* Content */}
      <div data-aos="fade-up-right" className=" z-10 
      text-start max-w-2xl text-[#ffe6fe]"> <h1 className="text-lg md:text-3xl font-semibold  capitalize mb-6"> Why Choose Crypto Flow </h1>
      <div className='flex gap-4'>
      <Image
          src="/image.png"
          alt="Right Side Image"
          width={100}
          height={100}
          className="  max-w-[30px] h-[30px]  "
          priority
        />
        <div className='text-start'>
       <h1 className='text-lg text-gray-100 '>Fortified Security Protocols</h1>
       <p className='text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2'>Your security is our topmost concern. We employ state-of-the-art security protocols, setting an industry standard to safeguard your assets and personal information.</p>
        </div>
      </div>
      <div className='flex gap-4'>
      <Image
          src="/image1.png"
          alt="Right Side Image"
          width={100}
          height={100}
          className="  max-w-[30px] h-[30px]  "
          priority
        />
     <div className='text-start'>
       <h1 className='text-lg text-gray-100 '>Performance-Driven Technology</h1>
       <p className='text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2'>Our platform harnesses cutting-edge technology, delivering unparalleled performance and ensuring you have the tools needed for a seamless trading experience.</p>
        </div>
      </div>
      <div className='flex gap-4'>
      <Image
          src="/image2.png"
          alt="Right Side Image"
          width={100}
          height={100}
          className="  max-w-[30px] h-[30px]  "
          priority
        />
         <div className='text-start'>
       <h1 className='text-lg text-gray-100 '>Responsive Customer Support</h1>
       <p className='text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2'>Experience unmatched support with our responsive customer service team. We're here to address your inquiries promptly, ensuring a smooth and hassle-free experience.</p>
        </div>
      </div>
      <div className='flex gap-4'>
      <Image
          src="/image3.png"
          alt="Right Side Image"
          width={100}
          height={100}
          className="  max-w-[30px] h-[30px]  "
          priority
        />
        <div className='text-start'>
       <h1 className='text-lg text-gray-100 '>Innovative Trading Features</h1>
       <p className='text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2'>Stay ahead of the market curve with innovative trading features. Our platform introduces tools that empower you to make informed decisions and optimize your investment strategy.</p>
        </div>
      </div>
      <div className='flex gap-4'>
      <Image
          src="/image4.png"
          alt="Right Side Image"
          width={100}
          height={100}
          className="  max-w-[30px] h-[30px]  "
          priority
        />
       <div className='text-start'>
       <h1 className='text-lg text-gray-100 '>Transparent Fee Structure</h1>
       <p className='text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2'>Say goodbye to hidden fees. Our transparent fee structure ensures you are fully informed about costs, allowing you to manage your investments with clarity and confidence.</p>
        </div>
      </div>
      </div>
      {/* Right Image */}
      <div data-aos="fade-up-left" className="relative z-10  hidden sm:hidden lg:block xl:block  w-full max-w-sm lg:max-w-md ">
        <Image
          src="/group.png"
          alt="Right Side Image"
          width={200}
          height={200}
          className="w-[300px] h-auto  "
          priority
        />
      </div>
    </section>
  );
}
