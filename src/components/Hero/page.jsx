import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-10 md:px-8 lg:px-16">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, #0B0B0F, #211C32, #110E1B, #211C32)',
        }}
      ></div>

      {/* Overlay Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/block.png" // Overlay image
          alt="Overlay Background"
          layout="fill" // Ensures full coverage
          objectFit="cover" // Makes the image cover the area
          priority
          className="opacity-70" // Adjust transparency if needed
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center lg:text-left max-w-md text-white">
        <h1 className="text-3xl md:text-5xl font-bold capitalize mb-6">Navigate the Future of 
          Trading with <span className="bg-gradient-to-r from-[#824FAD] via-[#4639BC] to-[#BC96F5] bg-clip-text text-transparent">
  Crypto Vision
</span>
  </h1>
        <p className="mb-6">
          Single.earth Makes Nature Protection Profitable And Accessible For Everyone With Nature-backed Merit Tokens.
        </p>
        <div className="flex gap-3  ">
          {/* Contact Us Button */}
          <button
            className="relative text-white font-semibold py-3 px-8 bg-gradient-to-r
             from-[#824FAD] via-[#4639BC] to-[#BC96F5] hover:from-[#6F26FF] hover:to-[#BC96F5]  transition-all duration-500"
            style={{
              clipPath: "polygon(15% 20%, 96% 22%, 96% 57%,83% 85%, 5% 80%, 7% 45%)",
            }}
          >
              Sign up for free
          </button>

          {/* Learn More Button */}

          <button
            className="relative  text-white font-semibold py-3 px-8 
             bg-gradient-to-r from-[#211C32] via-[#824FAD] to-[#110E1B] hover:from-[#6F26FF] 
             hover:to-[#BC96F5] transition-all duration-500"
            style={{
              clipPath: "polygon(15% 20%, 96% 22%, 96% 57%, 83% 85%, 5% 80%, 7% 45%)",
              boxShadow: "0 0 0 4px #5D22FF", // Simulated border with box-shadow
            }}
          >
          Connect  wallet
          </button>

        </div>

      </div>
      {/* Right Image */}
      <div className="relative z-10 w-full max-w-sm lg:max-w-md ">
        <Image
          src="/nep.png"
          alt="Right Side Image"
          width={500}
          height={500}
          className="w-full h-auto "
          priority
        />
      </div>
    </section>
  );
}
