// import Image from "next/image";



import BeforeFooter2 from "@/components/BeforeFooter2";
import Business from "@/components/Business";
import Content from "@/components/Content";
import Content2 from "@/components/Content-2";
import Content3 from "@/components/Content-3";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
// import Footer2 from "@/components/Footer2";
// import Content4 from "@/components/Content-4";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import PricingCard from "@/components/PricingCard";
// import Reviews from "@/components/Reviews";
import Reviews2 from "@/components/Reviews2";
import Trustedby from "@/components/Trustedby";

export default function Home() {
  return (
   <div >
    <Navbar/>
    <HeroSection/>
    <Content/>
    <Content2/>
    <Content3/>
    <PricingCard/>
    <Business/>
    <Trustedby/>
    <News/>
    <Reviews2/>
    <FAQ/>
    <BeforeFooter2/>
    <Footer/>
    
   </div>
  );
}
