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
    <section className="py-16 overflow-hidden">
      {/* Row 1 - Moving Right */}
      <div className="relative mb-4">
        <div className="flex marquee-track">
          {[...row1, ...row1, ...row1, ...row1].map((img, index) => (
            <div key={`r1-${index}`} className="flex-shrink-0 px-2">
              <img
                src={img}
                alt={`Work ${index + 1}`}
                className="w-64 h-44 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Moving Left */}
      <div className="relative mb-4">
        <div className="flex marquee-track-reverse">
          {[...row2, ...row2, ...row2, ...row2].map((img, index) => (
            <div key={`r2-${index}`} className="flex-shrink-0 px-2">
              <img
                src={img}
                alt={`Work ${index + 1}`}
                className="w-64 h-44 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 3 - Moving Right */}
      <div className="relative">
        <div className="flex marquee-track">
          {[...row3, ...row3, ...row3, ...row3].map((img, index) => (
            <div key={`r3-${index}`} className="flex-shrink-0 px-2">
              <img
                src={img}
                alt={`Work ${index + 1}`}
                className="w-64 h-44 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
