import { motion } from "framer-motion";
import { Monitor, Pen, Paintbrush, Palette, TrendingUp, Instagram, Camera, PenTool, Video } from "lucide-react";

const services = [
  {
    title: "Website Design",
    icon: Monitor,
  },
  {
    title: "Logos",
    icon: Pen,
  },
  {
    title: "Creative Strategy",
    icon: Paintbrush,
  },
  {
    title: "Branding",
    icon: Palette,
  },
  {
    title: "SEO, SEM",
    icon: TrendingUp,
  },
  {
    title: "Social Media",
    icon: Instagram,
  },
  {
    title: "Influencer Marketing",
    icon: Camera,
  },
  {
    title: "Copywriting",
    icon: PenTool,
  },
  {
    title: "Video Editing",
    icon: Video,
  },
];

const ServicesSection = () => {
  return (
    <section 
      className="py-24 bg-black text-white" 
      id="categories" 
      style={{ willChange: 'transform', opacity: 1, transform: 'perspective(1200px)' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto rounded-[3rem] p-12 md:p-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Services Badge */}
            <div className="inline-block mb-6">
              <div 
                className="px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(13, 13, 13, 0.4)',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <p className="text-sm font-medium tracking-tight" style={{ letterSpacing: '-0.02em', lineHeight: '1em' }}>
                  Services
                </p>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-7xl font-medium mb-6" style={{ letterSpacing: '-0.05em' }}>
              All your{" "}
              <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif', letterSpacing: '0em' }}>
                digital
              </span>{" "}
              needs.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12" style={{ letterSpacing: '-0.02em', lineHeight: '160%' }}>
              Modern businesses need more than isolated solutions. We deliver integrated digital services that align design, technology, and growth under one strategic partner.
            </p>
          </motion.div>

          {/* Animated Service Cards - Row 1 (Moving Right to Left) */}
          <div 
            className="relative mb-3 overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)'
            }}
          >
            <div className="flex animate-scroll-left gap-4 py-2" style={{ willChange: 'transform' }}>
              {[...services.slice(0, 4), ...services.slice(0, 4), ...services.slice(0, 4), ...services.slice(0, 4)].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={`row1-${index}`}
                    className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border border-white/10 rounded-lg"
                    style={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    <h3 
                      className="text-lg font-normal whitespace-nowrap text-white" 
                      style={{ letterSpacing: '-0.01em', lineHeight: '1em' }}
                    >
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Animated Service Cards - Row 2 (Moving Left to Right) */}
          <div 
            className="relative overflow-hidden -mb-4"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)'
            }}
          >
            <div className="flex animate-scroll-right gap-4 py-2" style={{ willChange: 'transform' }}>
              {[...services.slice(4), ...services.slice(4), ...services.slice(4), ...services.slice(4)].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={`row2-${index}`}
                    className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border border-white/10 rounded-lg"
                    style={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    <h3 
                      className="text-lg font-normal whitespace-nowrap text-white" 
                      style={{ letterSpacing: '-0.01em', lineHeight: '1em' }}
                    >
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;