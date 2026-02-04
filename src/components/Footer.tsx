import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - footerTop / windowHeight));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div ref={footerRef} className="relative">
      {/* Scroll spacer */}
      <div className="h-screen" />

      <footer
        className="fixed bottom-0 left-0 w-full h-screen bg-black overflow-hidden pointer-events-none"
        style={{
          clipPath: `inset(${100 - scrollProgress * 100}% 0 0 0)`,
        }}
      >
        <div className="pointer-events-auto h-full">
          {/* Background video */}
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source
                src="/LqOw75c2kGVquO1CH3tLe833Pxk.webm"
                type="video/webm"
              />
            </video>
          </div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between py-10 sm:py-12 md:py-16 px-4 sm:px-6">
            {/* CTA Section */}
            <div className="flex-1 flex items-center justify-center text-center">
              <div className="w-full max-w-4xl space-y-6 md:space-y-8 px-2 sm:px-8 md:px-24">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight leading-tight text-white">
                  Are you{" "}
                  <span className="italic font-serif font-normal">ready?</span>
                </h1>

                <p className="text-base sm:text-lg md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto">
                  This could be the start of something big.
                </p>

                <div className="pt-2 md:pt-4">
                  <Link
                    to="/contact"
                    className="
                      inline-block
                      px-6 sm:px-8 md:px-10
                      py-3 md:py-4
                      text-base sm:text-lg md:text-xl
                      text-white
                      font-medium
                      rounded-full
                      transition-all duration-300
                      hover:scale-105
                    "
                    style={{
                      backgroundColor: "rgb(1, 141, 135)",
                      boxShadow:
                        "0 4px 10px -2px rgba(0,0,0,0.2), 0 0 0 1px rgba(1,141,135,0.15)",
                    }}
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
              {/* Links */}
              <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                {["Home", "About", "Portfolio", "Contact Us"].map((item) => (
                  <Link
                    key={item}
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm font-medium">
                  Created by
                </span>
                <Link to="/">
                  <img src="/logo.png" alt="dignifyd" className="h-7 md:h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
