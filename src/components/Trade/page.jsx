import Image from 'next/image';

export default function Trad() {
 

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
                    <h2 className="text-3xl mb-2 font-semibold text-[#ffe6fe]">
                    Trade, Secure, and Stay <br /> Informed with Crypto Flow
                    </h2>
                   
                </div>

                {/* Centered Table with Large Width */}
                <div className="justify-center mx-auto">
                

                </div>
            </div>
        </section>
    );
}
