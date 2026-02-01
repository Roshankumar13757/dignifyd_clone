import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ParallaxVideoSection from "@/components/home/ParallaxVideoSection";
import LogoMarquee from "@/components/LogoMarquee";
import ApproachSection from "@/components/home/ApproachSection";
import ImageCarousel from "@/components/home/ImageCarousel";
import ValueSection from "@/components/home/ValueSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import ServicesSection from "@/components/home/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ParallaxVideoSection />
      <LogoMarquee />
      <ApproachSection />
      <ImageCarousel />
      <ValueSection />
      <CapabilitiesSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
