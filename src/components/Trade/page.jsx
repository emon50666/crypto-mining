import Image from 'next/image';

export default function Trad() {


    return (
        <section id='service' className="relative pt-16 pb-10">
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
                    src="/frame.png"
                    alt="Overlay Background"
                    layout="fill"

                    priority
                    className="opacity-10 flex items-center justify-center"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 m-auto text-center text-[#ffe6fe]">
                <div className="mx-w-lg">
                    <h4 className='mb-1 text-sm'>What Sets Us <span className={'text-[#824FAD] '} >Apart</span></h4>
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-2 font-semibold text-[#ffe6fe]">
                        Trade, Secure, and Stay <br /> Informed with Crypto Flow
                    </h2>

                </div>

                {/* Centered Table with Large Width */}
                <div className=" mx-auto mt-8 lg:max-w-[1100px] xl:px-8 w-full ">
                    <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-4 px-3 lg:px-0 place-items-center">
                        <div className="text-center  lg:border-t-4 rounded-t-xl  bg-gradient-to-r 
             from-[#824FAD]/20 via-[#4639BC]/20 to-[#BC96F5]/20 hover:from-[#6F26FF]/30 
             hover:to-[#824FAD]/30 transition-all duration-500 border-[#824FAD]/90 p-4 shadow shadow-[#834fad75] ">
                            <Image
                                src="/sec1.png"
                                alt="Right Side Image"
                                width={100}
                                height={100}
                                className="max-w-[40px] h-[40px]"
                                priority
                            />
                            <div className="text-start">
                                <h1 className="text-lg text-gray-100">Seamless Trading</h1>
                                <p className="text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2">
                                    Experience easy and efficient trading with our user-friendly interface and quick buy/sell options.
                                </p>
                            </div>
                        </div>
                        <div className="text-center  lg:border-b-4 bg-gradient-to-r 
             from-[#824FAD]/20 via-[#4639BC]/20 to-[#BC96F5]/20 hover:from-[#6F26FF]/30 
             hover:to-[#824FAD]/30 transition-all duration-500 border-[#824FAD]/90 rounded-b-xl  p-4 shadow shadow-[#834fad75] ">
                            <Image
                                src="/sec2.png"
                                alt="Right Side Image"
                                width={100}
                                height={100}
                                className="max-w-[40px] h-[40px]"
                                priority
                            />
                            <div className="text-start  ">
                                <h1 className="text-lg text-gray-100">Secure Wallets</h1>
                                <p className="text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2">
                                    Trust in the security of your digital assets with our robust wallet integration and advanced security measures.
                                </p>
                            </div>
                        </div>

                        <div className="text-center  lg:border-t-4 bg-gradient-to-r 
             from-[#824FAD]/20 via-[#4639BC]/20 to-[#BC96F5]/20 hover:from-[#6F26FF]/30 
             hover:to-[#824FAD]/30 transition-all duration-500 border-[#824FAD]/90 rounded-t-xl p-4 shadow shadow-[#834fad75] ">
                            <Image
                                src="/sec3.png"
                                alt="Right Side Image"
                                width={100}
                                height={100}
                                className="max-w-[40px] h-[40px]"
                                priority
                            />
                            <div className="text-start">
                                <h1 className="text-lg text-gray-100">Real-Time Insights</h1>
                                <p className="text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2">
                                    Stay ahead of the market with access to real-time data, charts, and trends for informed decision-making.

                                </p>
                            </div>
                        </div>
                        <div className="text-center  lg:border-b-4 bg-gradient-to-r 
             from-[#824FAD]/20 via-[#4639BC]/20 to-[#BC96F5]/20 hover:from-[#6F26FF]/30 
             hover:to-[#824FAD]/30 transition-all duration-500 border-[#824FAD]/90 rounded-t-xl p-4 shadow shadow-[#834fad75] ">
                            <Image
                                src="/sec3.png"
                                alt="Right Side Image"
                                width={100}
                                height={100}
                                className="max-w-[40px] h-[40px]"
                                priority
                            />
                            <div className="text-start">
                                <h1 className="text-lg text-gray-100">Access All Crypto Coin</h1>
                                <p className="text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2">
                                    Explore the world of cryptocurrency with ease! Access all crypto coins in one place, stay updated on market trends.

                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
