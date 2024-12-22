"use client"
import { useState, useEffect } from "react";

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
import Spinner from "@/components/Spinner/page";

export default function Home() {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Show spinner if still loading
  if (loading) {
    return <Spinner />;
  }

  // Main content after loading
  return (
    <div>
      <div className="absolute top-0 z-50 w-full">
        <Header />
      </div>
      <div className="">
        <Hero />
        <Logo />
      </div>
      <AboutSection />
      <Market />
      <Business />
      <Trad />
      <AutoPlayVideo />
      <Support />
      <World />
      <ContactSection />
      <Footer />
    </div>
  );
}
