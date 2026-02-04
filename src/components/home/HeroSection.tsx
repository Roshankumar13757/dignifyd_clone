import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden z-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-md md:max-w-2xl lg:max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-tight mb-6 md:mb-8"
          style={{ letterSpacing: '-0.02em' }}
        >
          <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
            Digital
          </span>{" "}
          <span className="hidden md:inline">
            Execution,
            <br />
            built for scale.
          </span>
          <span className="md:hidden">
            <br />
            Execution,
            <br />
            built for scale.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg lg:text-xl text-gray-400 max-w-sm md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
          style={{ letterSpacing: '-0.01em' }}
        >
          Move beyond fragmented vendors with integrated, growth-driven digital solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-row items-center justify-center gap-3 md:gap-4"
        >
          <Link 
            to="/about" 
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-sm md:text-base font-medium transition-colors duration-300 whitespace-nowrap"
          >
            <span className="md:hidden">Get Started</span>
            <span className="hidden md:inline">Start Your Digital Journey</span>
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-3 border border-white/20 hover:bg-white/5 text-white rounded-full text-sm md:text-base font-medium transition-colors duration-300 whitespace-nowrap"
          >
            Schedule a Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;