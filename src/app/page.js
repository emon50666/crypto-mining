import AboutSection from "@/components/About/page";
import Business from "@/components/Business/page";
import ContactSection from "@/components/Contact/page";


import Header from "@/components/Header/page";
import Hero from "@/components/Hero/page";
import Logo from "@/components/Logo/page";
import Market from "@/components/Market/page";
import Support from "@/components/Support/page";
import Trad from "@/components/Trade/page";
import World from "@/components/World/page";
import Footer from "@/components/Footer/page";
import AutoPlayVideo from "@/components/Video/page";




export default function Home() {
  return (
    <div>
      <div className="absolute top-0 z-50 w-full">
      <Header/>
      </div>
    <div className=""> 
    <Hero/>
    <Logo/>
    </div>
    <AboutSection/>
    <Market/>
     <Business/>
     <Trad/>
     <AutoPlayVideo/>
     <Support/>
     <World/>
     <ContactSection/>
     <Footer/>
     
    </div>
  );
}
