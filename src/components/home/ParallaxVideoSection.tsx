import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxVideoSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="
            relative w-full 
            h-[50vh] sm:h-[60vh] md:h-[80vh] 
            overflow-hidden 
            rounded-2xl md:rounded-[3rem]
          "
          style={{
            transform: "perspective(1200px)",
            willChange: "transform",
          }}
        >
          {/* Video Container */}
          <div
            className="
              relative h-full mx-auto
              w-full md:w-3/4
            "
          >
            <video
              src="https://framerusercontent.com/assets/NacGU1jpcigP7QziqhqSofnEM.webm"
              loop
              autoPlay
              muted
              playsInline
              preload="auto"
              className="
                w-full h-full 
                object-cover 
                rounded-2xl md:rounded-[3rem]
              "
            />
          </div>

          {/* Logo Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="dignifyd"
              className="
                w-32 sm:w-40 md:w-64 lg:w-80
                h-auto
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxVideoSection;
