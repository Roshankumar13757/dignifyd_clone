import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServicePageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const ServicePageLayout = ({ title, description, children }: ServicePageLayoutProps) => {
  // Split title to find italic parts (words after "That" or specific patterns)
  const renderTitle = (title: string) => {
    // Check for common patterns
    const patterns = [
      { match: "Designing Websites That Perform", parts: ["Designing", " Websites That", " Perform"], italicIndex: [0, 2] },
      { match: "Building Brands With Clear Direction", parts: ["Building Brands", " With Clear", " Direction"], italicIndex: [0, 2] },
      { match: "Digital Marketing That Drives Growth", parts: ["Digital Marketing", " That Drives", " Growth"], italicIndex: [0, 2] },
      { match: "Influencer Marketing That Feels Authentic", parts: ["Influencer", " Marketing That", " Feels Authentic"], italicIndex: [0, 2] },
      { match: "Creative & Content That Connects", parts: ["Creative &", " Content That", " Connects"], italicIndex: [0, 2] },
    ];

    const pattern = patterns.find(p => p.match === title);
    if (pattern) {
      return (
        <>
          {pattern.parts.map((part, index) => (
            pattern.italicIndex.includes(index) ? (
              <span key={index} className="font-serif italic">{part}</span>
            ) : (
              <span key={index}>{part}</span>
            )
          ))}
        </>
      );
    }
    return title;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Gradient */}
      <section className="relative pt-40 pb-20 page-hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-8"
          >
            {renderTitle(title)}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      {children}

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
