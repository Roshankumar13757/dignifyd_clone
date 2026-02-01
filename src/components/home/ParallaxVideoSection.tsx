import { useEffect, useRef, useState } from "react";

const ParallaxVideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [videoOffset, setVideoOffset] = useState(0);
  const [logoOffset, setLogoOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const windowHeight = window.innerHeight;

      // Calculate parallax only when section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const parallaxOffset = (scrollPosition - sectionTop) * 0.5;
        setVideoOffset(parallaxOffset);
        // Logo moves slightly less for a subtle parallax effect
        setLogoOffset((scrollPosition - sectionTop) * 0.3);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-[calc(100%-200px)] mx-[100px] h-screen flex items-center justify-center bg-black overflow-hidden rounded-[48px] my-[30px]"
    >
      {/* Video Background with Parallax */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${videoOffset}px)`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover rounded-3xl md:rounded-[48px]"
          style={{
            borderRadius: "48px",
          }}
        >
          <source src="/LqOw75c2kGVquO1CH3tLe833Pxk.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20 rounded-[48px]" />
      </div>

      {/* Centered Logo/Text - Positioned absolutely like Framer design */}
      <div
        ref={logoRef}
        className="absolute z-20 flex items-center justify-center"
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(-50%, calc(-50% + ${logoOffset}px))`,
        }}
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center text-white drop-shadow-2xl whitespace-nowrap">
          dignifyd.io
        </h2>
      </div>
    </section>
  );
};

export default ParallaxVideoSection;
