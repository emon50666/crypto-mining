import Image from 'next/image';

export default function Trad() {
  return (
    <section id="service" className="relative pt-12 pb-2">
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
          src="/to.png"
          alt="Overlay Background"
          layout="fill"
          priority
          className="opacity-30 flex items-center justify-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 m-auto text-center text-[#e9cfff]">
        <footer className="lg:flex justify-between px-8">
          <div>
            <div className="flex items-center font-bold text-lg text-[#f3e3ff]">
              <Image
                src="/logo.png"
                alt="Right Side Image"
                width={100}
                height={9}
                className="rounded-md w-[50px] lg:max-w-[50px] xl:max-w-[50px]"
                priority
              />
              <h1>Crypto Flow</h1>
            </div>
            <p className="max-w-[250px] text-start text-sm pb-4 pt-1">
              At Crypto Flow, we specialize in offering cutting-edge insights, tools, and resources to help you stay ahead in the ever-evolving crypto space.
            </p>
          </div>
          <div>
            <h3 className="text-start text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="text-start">
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">About</a>
              </li>
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">Features</a>
              </li>
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">Works</a>
              </li>
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-start text-lg font-bold mb-4 text-white">Help</h3>
            <ul className="text-start">
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">Customer Support</a>
              </li>
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">Delivery Details</a>
              </li>
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-start text-white">Resources</h3>
            <ul className="text-start">
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">Free eBooks</a>
              </li>
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">Development Tutorial</a>
              </li>
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">How-to Blog</a>
              </li>
              <li className="mb-2 hover:text-[#BC96F5]">
                <a href="#">YouTube Playlist</a>
              </li>
            </ul>
          </div>
        </footer>

        {/* Copyright Section */}
        <div className="mt-2 pt-2 border-t border-[#BC96F5]/50 text-sm text-[#e9cfff] text-center">
          <p>&copy; {new Date().getFullYear()} Crypto Flow. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
