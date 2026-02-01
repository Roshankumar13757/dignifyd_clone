import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the footer trigger area is visible
      // Footer starts revealing when trigger enters viewport
      const progress = Math.max(0, Math.min(1, 1 - (footerTop / windowHeight)));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force video to play when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div ref={footerRef} className="relative">
      {/* Spacer to create scroll space - this pushes content and creates reveal space */}
      <div className="h-screen" />
      
      {/* Fixed footer that reveals */}
      <footer 
        className="fixed bottom-0 left-0 w-full h-screen bg-black overflow-hidden pointer-events-none"
        style={{
          clipPath: `inset(${100 - scrollProgress * 100}% 0 0 0)`,
        }}
      >
        {/* Re-enable pointer events for interactive elements */}
        <div className="pointer-events-auto h-full">
          {/* Background video with mask */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0) 90%)',
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/LqOw75c2kGVquO1CH3tLe833Pxk.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.035) 3.45%, rgba(0, 0, 0, 0.07) 6.9%, rgba(0, 0, 0, 0.1) 10.34%, rgba(0, 0, 0, 0.137) 13.79%, rgba(0, 0, 0, 0.173) 17.24%, rgba(0, 0, 0, 0.208) 20.69%, rgba(0, 0, 0, 0.243) 24.14%, rgba(0, 0, 0, 0.275) 27.59%, rgba(0, 0, 0, 0.31) 31.03%, rgba(0, 0, 0, 0.345) 34.48%, rgba(0, 0, 0, 0.38) 37.93%, rgba(0, 0, 0, 0.416) 41.38%, rgba(0, 0, 0, 0.447) 44.83%, rgba(0, 0, 0, 0.482) 48.28%, rgba(0, 0, 0, 0.518) 51.72%, rgba(0, 0, 0, 0.553) 55.17%, rgba(0, 0, 0, 0.584) 58.62%, rgba(0, 0, 0, 0.62) 62.07%, rgba(0, 0, 0, 0.655) 65.52%, rgba(0, 0, 0, 0.69) 68.97%, rgba(0, 0, 0, 0.725) 72.41%, rgba(0, 0, 0, 0.757) 75.86%, rgba(0, 0, 0, 0.792) 79.31%, rgba(0, 0, 0, 0.827) 82.76%, rgba(0, 0, 0, 0.863) 86.21%, rgba(0, 0, 0, 0.898) 89.66%, rgba(0, 0, 0, 0.93) 93.1%, rgba(0, 0, 0, 0.965) 96.55%, rgb(0, 0, 0) 100%)',
            }}
          />

          {/* Footer content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-between py-16 px-6">
            {/* Main CTA Section */}
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white leading-[0.8]">
                Are you<span className="italic font-serif font-normal"> ready?</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-400 font-medium max-w-2xl">
                This could be the start of something big.
              </p>

              <Link
                to="/contact"
                className="mt-8 px-10 py-4 text-white text-xl font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                style={{
                  backgroundColor: 'rgb(1, 141, 135)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 10px -2px rgba(0, 0, 0, 0.05), 0 2px 2px -1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(1, 141, 135, 0.12)',
                }}
              >
                Book a call
              </Link>
            </div>

            {/* Bottom Links */}
            <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Navigation Links */}
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Home
                </Link>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  About
                </Link>
                <Link 
                  to="/#features" 
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Portfolio
                </Link>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>

              {/* Created By */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm font-medium">
                  Created by
                </span>
                <Link to="/" className="inline-block">
                  <span className="text-lg font-semibold tracking-tight text-white">
                     digni<span className="text-primary italic font-serif">fyd</span>
                    <span className="text-primary">.</span>
                  </span>
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