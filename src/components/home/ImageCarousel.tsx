import { motion } from "framer-motion";

const ImageCarousel = () => {
  const row1 = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  ];

  const row2 = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  ];

  const row3 = [
    "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
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