import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Logo(){
    return (
        <div className="absolute -mt-10 z-50 w-full "
        
        >
            <Marquee direction="left" pauseOnHover speed={40}  gradientWidth={100} gradient gradientColor="#0B0B0F, #211C32, #110E1B, #211C32">
              <div className="flex gap-10 ">
              <Image
                    src="/coin1.png" // Overlay image
                    alt="Overlay Background"
                    width={70}
                  height={35}
                    className=" rounded-md " // Adjust transparency if needed
                />
                <Image
                    src="/coin2.png" // Overlay image
                    alt="Overlay Background"
                    width={70}
                  height={35}
                    className=" rounded-md " // Adjust transparency if needed
                />
                <Image
                    src="/coin3.png" // Overlay image
                    alt="Overlay Background"
                    width={70}
                  height={35}
                    className=" rounded-md " // Adjust transparency if needed
                />
                <Image
                    src="/coin4.png" // Overlay image
                    alt="Overlay Background"
                    width={70}
                  height={35}
                    className=" rounded-md " // Adjust transparency if needed
                />
                <Image
                    src="/coin5.png" // Overlay image
                    alt="Overlay Background"
                    width={70}
                  height={35}
                    className=" rounded-md " // Adjust transparency if needed
                />
                <Image
                    src="/coin6.png" // Overlay image
                    alt="Overlay Background"
                    width={70}
                  height={35}
                    className=" rounded-md " // Adjust transparency if needed
                />
                <Image
                    src="/coin7.png" // Overlay image
                    alt="Overlay Background"
                    width={70}
                  height={35}
                    className=" rounded-md " // Adjust transparency if needed
                />
                <Image
                    src="/coin8.png" // Overlay image
                    alt="Overlay Background"
                    width={70}
                  height={35}
                    className=" rounded-md " // Adjust transparency if needed
                />
                <Image
                    src="/coin9.png" // Overlay image
                    alt="Overlay Background"
                    width={70}
                  height={35}
                    className=" rounded-md " // Adjust transparency if needed
                />
                
              </div>
                 
            </Marquee>
         
        </div>
    );
};

