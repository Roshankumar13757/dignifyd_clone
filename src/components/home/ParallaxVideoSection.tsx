import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxVideoSection = () => {
  return (
    <section>
      <div className="container mx-auto px-6">
        <div 
          className="relative w-full h-[80vh] overflow-hidden rounded-[3rem]"
          style={{ opacity: 1, transform: 'perspective(1200px)', willChange: 'transform' }}
        >
          {/* Video Container */}
          <div className="relative w-3/4 h-full mx-auto">
            <video
              src="https://framerusercontent.com/assets/NacGU1jpcigP7QziqhqSofnEM.webm"
              loop
              preload="auto"
              playsInline
              autoPlay
              muted
              className="w-full h-full object-cover rounded-[3rem]"
              style={{
                cursor: 'auto',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                objectPosition: '50% 50%'
              }}
            />
          </div>

          {/* Logo Overlay */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ willChange: 'transform', opacity: 1 }}
          >
            <img 
              src="/logo.png" 
              alt="dignifyd" 
              className="w-128 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxVideoSection;
