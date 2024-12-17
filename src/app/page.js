import Header from "@/components/Header/page";
import Hero from "@/components/Hero/page";



export default function Home() {
  return (
    <div>
      <div className="absolute top-0 z-50 w-full">
      <Header/>
      </div>
    <div className=""> 
    <Hero/>
    </div>
    </div>
  );
}
