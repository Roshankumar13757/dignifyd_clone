import React from 'react';
import { Link } from "react-router-dom";

const ApproachSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto border border-gray-800 rounded-[2.5rem] p-12 md:p-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 border border-gray-700 rounded-full text-sm backdrop-blur-sm bg-black/20">
                Our Approach
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-4">
              Digital Growth,
            </h1>
            <h2 className="text-5xl md:text-7xl italic font-serif mb-6">
              executed with clarity.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A structured process built for scalable digital outcomes.
            </p>
          </div>

          {/* Three Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Discover */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 relative group-hover:scale-110 transition-transform duration-300">
                  {/* Animated Magnifying Glass */}
                  <svg
                    viewBox="0 0 64 64"
                    className="w-full h-full"
                  >
                    <circle
                      cx="26"
                      cy="26"
                      r="18"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      className="opacity-80"
                    />
                    <line
                      x1="39"
                      y1="39"
                      x2="52"
                      y2="52"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="opacity-80"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4">Discover</h3>
              <p className="text-gray-400">
                We align on goals, scope, and success metrics before execution.
              </p>
            </div>

            {/* Execute */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 relative group-hover:scale-110 transition-transform duration-300">
                  {/* Animated Code Brackets */}
                  <svg
                    viewBox="0 0 64 64"
                    className="w-full h-full"
                  >
                    {/* Left Bracket */}
                    <path
                      d="M 24 12 L 16 12 Q 12 12 12 16 L 12 28 Q 12 32 8 32 Q 12 32 12 36 L 12 48 Q 12 52 16 52 L 24 52"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="opacity-80"
                    />
                    {/* Right Bracket */}
                    <path
                      d="M 40 12 L 48 12 Q 52 12 52 16 L 52 28 Q 52 32 56 32 Q 52 32 52 36 L 52 48 Q 52 52 48 52 L 40 52"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="opacity-80"
                    />
                    {/* Dots */}
                    <circle cx="26" cy="32" r="2" fill="#2dd4bf" className="animate-pulse" />
                    <circle cx="32" cy="32" r="2" fill="#2dd4bf" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <circle cx="38" cy="32" r="2" fill="#2dd4bf" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4">Execute</h3>
              <p className="text-gray-400">
                Our teams design, build, and deploy with speed and precision.
              </p>
            </div>

            {/* Optimize */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 relative group-hover:scale-110 transition-transform duration-300">
                  {/* Animated Star with Trail */}
                  <svg
                    viewBox="0 0 64 64"
                    className="w-full h-full"
                  >
                    <path
                      d="M 20 32 L 24 28 L 28 24 L 32 20 L 36 24 L 40 28 L 36 32 L 32 36 L 28 32 L 24 36 L 20 32 Z"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinejoin="miter"
                      className="opacity-80"
                    />
                    {/* Animated Trail */}
                    <path
                      d="M 32 20 Q 38 16 48 18"
                      fill="none"
                      stroke="#2dd4bf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="opacity-80"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4">Optimize</h3>
              <p className="text-gray-400">
                We refine continuously using performance data and feedback loops.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-block px-10 py-4 bg-teal-600 hover:bg-teal-700 rounded-full text-white text-lg font-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-600/25"
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;