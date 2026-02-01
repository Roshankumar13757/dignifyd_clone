import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxVideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="pb-24 bg-background">
      <div className="container mx-auto px-6">
        <section
          ref={sectionRef}
          className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden "
        >
      {/* Video Background with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y: yOffset,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            borderRadius: "48px",
          }}
        >
          <source src="/NacGU1jpcigP7QziqhqSofnEM.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20 rounded-[48px]" />
      </motion.div>

      {/* Centered Logo/Text */}
      <div className="absolute z-20 flex items-center justify-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center text-white drop-shadow-2xl whitespace-nowrap">
          dignifyd.io
        </h2>
      </div>
        </section>
      </div>
    </section>
  );
};

export default ParallaxVideoSection;
