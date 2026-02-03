import { motion } from "framer-motion";

const ImageCarousel = () => {
  const row1 = [
    "https://framerusercontent.com/images/J1cdzT6MDBpYk019ufCe5wuyE.jpeg?scale-down-to=512&width=1179&height=657",
    "https://framerusercontent.com/images/AIyokHFz0vxwUdaC50HcwHv3Vhs.png?scale-down-to=512&width=1124&height=750",
    "https://framerusercontent.com/images/sARbb3v7im02ZWqsTRPEvy8Fw.jpeg?scale-down-to=512&width=1600&height=900",
    "https://framerusercontent.com/images/KBhGTPMqPQWjQZ6FfhN3yDOk4lA.png?scale-down-to=512&width=5184&height=3456",
  ];

  const row2 = [
    "https://framerusercontent.com/images/RrnjtItHQbk0E9E00hgb9P9LWVg.jpeg?scale-down-to=512&width=1179&height=876",
    "https://framerusercontent.com/images/EL6efsfwc24zQWt7FM8xMFMMyV4.png?scale-down-to=512&width=1161&height=750",
    "https://framerusercontent.com/images/SpfQjdLkFEHa2FgUF8CGbSAosn8.png?scale-down-to=512&width=1000&height=750",
    "https://framerusercontent.com/images/4XwUHdIT0AtuqtjwO8vsr8vYSUQ.png?scale-down-to=512&width=1125&height=750",
  ];

  const row3 = [
    "https://framerusercontent.com/images/63V5KbwFbfugebv0xlSQGyEVwI.jpeg?scale-down-to=512&width=1179&height=870",
    "https://framerusercontent.com/images/yGDo02EPrvOa485fEAj5pW1Zv4o.jpeg?scale-down-to=512&width=810&height=506",
    "https://framerusercontent.com/images/8npcB6JiviIWADa5jCnxRDgauKM.jpeg?scale-down-to=512&width=1179&height=1160",
    "https://framerusercontent.com/images/AMLBxrxNTvMCIkFTsIRprCONY7A.jpeg?scale-down-to=512&width=1240&height=698",
  ];

  return (
    <section className="py-20 overflow-hidden bg-black relative" style={{ perspective: '1000px' }}>
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      {/* Row 1 - Moving Right */}
      <div className="relative mb-6" style={{ transform: 'rotateX(10deg) rotateZ(2deg)', transformStyle: 'preserve-3d' }}>
        <div className="flex marquee-track">
          {[...row1, ...row1, ...row1, ...row1].map((img, index) => (
            <div 
              key={`r1-${index}`} 
              className="flex-shrink-0 px-4"
              style={{ transform: 'skewX(-2deg)' }}
            >
              <img
                src={img}
                alt={`Work ${index + 1}`}
                className="w-96 h-56 object-cover rounded-3xl"
                style={{ 
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Moving Left */}
      <div className="relative mb-6" style={{ transform: 'rotateX(10deg) rotateZ(2deg)', transformStyle: 'preserve-3d' }}>
        <div className="flex marquee-track-reverse">
          {[...row2, ...row2, ...row2, ...row2].map((img, index) => (
            <div 
              key={`r2-${index}`} 
              className="flex-shrink-0 px-4"
              style={{ transform: 'skewX(2deg)' }}
            >
              <img
                src={img}
                alt={`Work ${index + 1}`}
                className="w-96 h-56 object-cover rounded-3xl"
                style={{ 
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 3 - Moving Right */}
      <div className="relative" style={{ transform: 'rotateX(10deg) rotateZ(2deg)', transformStyle: 'preserve-3d' }}>
        <div className="flex marquee-track">
          {[...row3, ...row3, ...row3, ...row3].map((img, index) => (
            <div 
              key={`r3-${index}`} 
              className="flex-shrink-0 px-4"
              style={{ transform: 'skewX(-2deg)' }}
            >
              <img
                src={img}
                alt={`Work ${index + 1}`}
                className="w-96 h-56 object-cover rounded-3xl"
                style={{ 
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;