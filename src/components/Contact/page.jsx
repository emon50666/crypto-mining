import Image from 'next/image';
import { FaFacebook, FaBitcoin } from "react-icons/fa";
import { SiBinance } from 'react-icons/si';

import { FaEthereum } from "react-icons/fa";
export default function ContactSection() {


    return (
        <section id='grow' className="relative pt-16 pb-10">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(to right, #0B0B0F, #211C32, #110E1B, #211C35)',
                }}
            ></div>

            {/* Overlay Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/contact.png"
                    alt="Overlay Background"
                    layout="fill"

                    priority
                    className="opacity-10 flex items-center justify-center"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 m-auto text-center text-[#ffe6fe]">
                <div className=" ">

                    <h2 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-2 font-semibold text-[#ffe6fe]">
                        Have questions or need assistance? <br />
                    </h2>
                    <p className="mb-6 text-[#e3dcffb8] px-1">Reach out to the Crypto Flow team for quick support. </p>
                </div>

                {/* Centered Table with Large Width */}
                <div className='flex justify-center text-start mx-auto gap-14 mt-9 '>
                    <div className="">
                        <h1 className="text-2xl pb-5 font-semibold  ">
                            Get In Touch
                        </h1>
                        <div className="justify-center mx-auto space-y-3">
                            <div className="flex items-center gap-2 mb-3">
                                <Image
                                    src="/cont3.png"
                                    alt="Phone Icon"
                                    width={100}
                                    height={100}
                                    className="max-w-[30px] h-[30px]"
                                    priority
                                />
                                <a href="tel:+4523762680" className="text-md text-[#e3dcffb8]">
                                    +4523762680
                                </a>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <Image
                                    src="/cont2.png"
                                    alt="Email Icon"
                                    width={100}
                                    height={100}
                                    className="max-w-[30px] h-[30px]"
                                    priority
                                />
                                <a href="mailto:info@cryptovision.com" className="text-md text-[#e3dcffb8]">
                                    info@cryptovision.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/cont1.png"
                                    alt="FAQ Icon"
                                    width={100}
                                    height={100}
                                    className="max-w-[30px] h-[30px]"
                                    priority
                                />
                                <span className="text-md text-[#e3dcffb8]">FAQs for Quick Help</span>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-4 text-3xl text-[#824FAD] ">
                            {/* Facebook */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="hover:text-blue-700" />
                            </a>

                            {/* Bitcoin */}
                            <a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer">
                                <FaBitcoin className="hover:text-[#a966e0] " />
                            </a>

                            {/* Binance */}
                            <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer">
                                <SiBinance className="hover:text-[#a966e0] " />
                            </a>

                            {/* Crypto (generic icon) */}
                            <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">
                                <FaEthereum className="hover:text-[#a966e0] " />
                            </a>
                        </div>
                    </div>

                    <div>
                        <form action="" className='text-start'>
                            <form>
                                {/* Name Field */}
                                <div className="mb-4 w-96 ">

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mt-1 block w-full px-4 py-2 outline-none border  border-[#4639BC] focus:outline-none hover:bg-[#824FAD]/10 bg-[#4639BC]/10 rounded-md shadow-sm  sm:text-sm"
                                        placeholder=" Your Name"
                                        required
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="mb-4 w-96">

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full px-4 py-2 outline-none border  border-[#4639BC] focus:outline-none hover:bg-[#824FAD]/10 bg-[#4639BC]/10 rounded-md shadow-sm  sm:text-sm"
                                        placeholder=" Your Email"
                                        required
                                    />
                                </div>

                                {/* Phone Number Field */}
                                <div className="mb-4 w-96">

                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="mt-1 block w-full px-4 py-2 outline-none border  border-[#4639BC] focus:outline-none hover:bg-[#824FAD]/10 bg-[#4639BC]/10 rounded-md shadow-sm  sm:text-sm"
                                        placeholder=" Phone Number"
                                        required
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="mb-1 w-96">

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="mt-1 block w-full px-4 py-2 outline-none border  border-[#4639BC] focus:outline-none hover:bg-[#824FAD]/10 bg-[#4639BC]/10 rounded-md shadow-sm  sm:text-sm"
                                        placeholder=" Message"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        className="relative text-white font-semibold py-5   px-8 bg-gradient-to-r 
             from-[#824FAD]/30 via-[#4639BC]/30 to-[#BC96F5]/30 hover:from-[#6F26FF] hover:to-[#BC96F5]  transition-all duration-500"
                                        style={{
                                            clipPath: "polygon(15% 20%, 96% 22%, 96% 57%, 83% 85%, 5% 80%, 7% 45%)",
                                        }}
                                    >
                                        Send Now
                                    </button>

                                </div>
                            </form>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}
