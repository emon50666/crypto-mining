import Image from 'next/image';

export default function World() {


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
            <div className="absolute   inset-0 z-0">
                <Image
                    src="/world.png"
                    alt="Overlay Background"
                    layout="fill"
                  

                    priority
                    className=" flex items-center   justify-center"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 m-auto text-center text-[#ffe6fe]">
                <div className="mx-w-lg">
                    <h4 className='mb-1 text-sm'>Proven Track  <span className={'text-[#824FAD] '} >Record</span></h4>
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-2 font-semibold text-[#ffe6fe]">
                    Connecting Traders Worldwide 
                    </h2>

                </div>

                {/* Centered Table with Large Width */}
                <div className=" mx-auto mt-8 lg:max-w-[1100px] w-full xl:px-8 ">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 px-3 lg:px-0 place-items-center">
                        <div className="text-center  mt-0 lg:mt-48 xl:mt-48 lg:-rotate-12 xl:-rotate-12  rounded-t-xl bg-[#4639BC]/50  p-4 ">
                            <div className='flex gap-2'>
                            <Image
                                src="/ema.png"
                                alt="Right Side Image"
                                width={100}
                                height={100}
                                className="max-w-[40px] h-[40px]"
                                priority
                            />
                            <h1 className="text-lg text-gray-100">Emma Hatson</h1>
                            </div>
                            
                            <div className="text-start">
                                
                                <p className="text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2">
                                Kudos to Crypto flow for simplifying crypto trading! The platform's user-friendly interface and advanced tools make it a standout choice.  
                                </p>
                            </div>
                        </div>
                        <div className="text-center  mt-0 lg:bottom-48 xl:bottom-48 lg:-rotate-6 xl:-rotate-6  rounded-t-xl bg-[#211C32]/60  p-4">
                        <div className='flex gap-2'>
                            <Image
                                src="/ema2.png"
                                alt="Right Side Image"
                                width={100}
                                height={100}
                                className="max-w-[40px] h-[40px]"
                                priority
                            />
                            <h1 className="text-lg text-gray-100">Alex Stuard</h1>
                            </div>
                            <div className="text-start  ">
                               
                                <p className="text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2">
                                Crypto flow has transformed my crypto experience! The platform's intuitive design and robust security features make it my top choice for trading.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-0 lg:bottom-48 xl:bottom-48 lg:rotate-6 xl:rotate-6  rounded-t-xl bg-[#824FAD]/60  p-4 ">
                        <div className='flex gap-2'>
                            <Image
                                src="/ema3.png"
                                alt="Right Side Image"
                                width={100}
                                height={100}
                                className="max-w-[40px] h-[40px]"
                                priority
                            />
                            <h1 className="text-lg text-gray-100">Chris Daniel </h1>
                            </div>
                            <div className="text-start">
                                
                                <p className="text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2">
                                Impressed with Crypto Vision's seamless trading process! The platform's efficiency and reliability stand out in the crypto market.

                                </p>
                            </div>
                        </div>
                        <div className="text-center mt-0 lg:mt-48 xl:mt-48 lg:rotate-12 xl:rotate-12  rounded-t-xl bg-[#556EAF]/60  p-4">
                        <div className='flex gap-2'>
                            <Image
                                src="/ema4.png"
                                alt="Right Side Image"
                                width={100}
                                height={100}
                                className="max-w-[40px] h-[40px]"
                                priority
                            />
                            <h1 className="text-lg text-gray-100">Mike William</h1>
                            </div>
                            <div className="text-start">
                            
                                <p className="text-[#e3dcffb8] text-[13px] lg:text-[15px] mb-2">
                                Crypto Vision delivers a stellar trading experience! The platform's features, coupled with its reliability, have exceeded my expectations.

                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
