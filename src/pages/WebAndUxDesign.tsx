import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WebAndUxDesign = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

{/* Hero Section */}
<section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-900 via-teal-950 to-black min-h-[70vh] flex items-center justify-center overflow-hidden">
  {/* Black fade from bottom */}
  <div 
    className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
    style={{
      background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
    }}
  />
  
  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-8"
      style={{ letterSpacing: '-0.05em', lineHeight: '1.1em' }}
    >
      <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
        Designing
      </span>
      <br />
      <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
        Websites That
      </span>
      <br />
      <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
        Perform
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="text-gray-300 text-base md:text-lg max-w-5xl mx-auto leading-relaxed"
      style={{ letterSpacing: '-0.02em', lineHeight: '160%' }}
    >
      We craft purposeful digital experiences that are visually stunning, intuitively usable, and strategically built to help brands convert visitors into loyal customers. Combining research-driven UX, beautiful UI, and modern technologies, our designs don't just look great — they <em className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>perform</em>.
    </motion.p>
  </div>
</section>

      {/* Web Experiences Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Images Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="User Experience"
                className="w-full h-auto rounded-2xl object-cover shadow-xl"
              />
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif italic  text-white mb-8 whitespace-nowrap" style={{ fontFamily: 'Baskervville, serif',letterSpacing: '-0.01em' }}>
                Web Experiences Built With Purpose
              </h2>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  User-Centric Design Approach
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  Your website should speak to your audience — not confuse them. Our UX methodology starts with understanding your users and shaping experiences that feel natural and effortless. By creating clear navigation, meaningful interactions, and accessible layouts across devices, we make digital experiences that engage, retain, and build trust.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Conversion-Focused UX Strategy
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.01em', lineHeight: '150%' }}>
                  Design for your business goals. Every layout choice we make aims to guide visitors toward action — whether it's lead generation, sales, inquiry submissions, or deeper engagement. Through strategic user flows, visual hierarchy, and behaviour-driven layouts, we help your website become a growth engine.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Responsive Performance Design
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.01em', lineHeight: '150%' }}>
                  In today's multi-device world, responsiveness isn't optional — it's foundational. We ensure your site looks sharp and functions flawlessly across desktop, tablet, and mobile. Fast load times, seamless interactions, and adaptive layouts create a consistent brand experience that keeps users coming back.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Systems Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif italic  text-white mb-8 whitespace-nowrap" style={{ fontFamily: 'Baskervville, serif',letterSpacing: '-0.01em' }}>
                Design Systems That Scale
              </h2>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Scalable UI Foundations
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.01em', lineHeight: '150%' }}>
                  Build once, update quickly. Our modular UI systems bring consistency and flexibility to your digital presence, so adding new pages, features, or products becomes faster and cleaner over time.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Brand-Aligned Digital Interfaces
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.01em', lineHeight: '150%' }}>
                  Your visual identity should be unmistakable. We blend brand personality with usability, using purposeful typography, colour systems, spacing, and intuitive interaction elements — creating interfaces that feel like you.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Collaboration-Ready Design Delivery
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.01em', lineHeight: '150%' }}>
                  Design shouldn't slow development. Our handoff includes detailed documentation, component specs, and asset organization that developers will appreciate — ensuring your vision transitions smoothly from design to launch.
                </p>
              </div>
            </motion.div>

            {/* Images Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
                alt="Design Systems"
                className="w-full h-auto rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
<section className="py-20 bg-black">
  <div className="max-w-4xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-4xl md:text-5xl font-light text-center text-white mb-16"
      style={{ letterSpacing: '-0.05em' }}
    >
       <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic  text-white mb-8 whitespace-nowrap" style={{ fontFamily: 'Baskervville, serif',letterSpacing: '-0.02em' }}>
                What You Get With Our Web & UX Design Service
              </h2>
    </motion.h2>

    <div className="space-y-12">
      {[
        {
          title: "Discovery & Strategy",
          description: "We start by understanding your audience, goals, and brand to define the right UX direction."
        },
        {
          title: "Wireframes & Prototypes",
          description: "We create skeletal frameworks for all key pages that map user journeys for maximum clarity and efficiency."
        },
        {
          title: "UI Design & Visual Brand Language",
          description: "Your website's look & feel is crafted with care — ensuring emotional impact without sacrificing clarity or usability."
        },
        {
          title: "Responsive & Accessible Layouts",
          description: "We design to work beautifully on every device, while prioritising accessibility for all users."
        },
        {
          title: "UX Testing & Iteration",
          description: "Before launch, we test & refine based on real behaviour to make sure your users find what they need — quickly and successfully."
        },
        {
          title: "Developer-Ready Files",
          description: "We deliver organised, structured designs that make development faster and error-free."
        }
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-3"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white" style={{ letterSpacing: '-0.02em' }}>
            {item.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-base max-w-3xl mx-auto" style={{ letterSpacing: '-0.01em', lineHeight: '150%' }}>
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
             <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif italic  text-white mb-8 whitespace-nowrap" style={{ fontFamily: 'Baskervville, serif',letterSpacing: '-0.02em' }}>
                Why It Matters
              </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed" style={{ letterSpacing: '-0.02em', lineHeight: '150%' }}>
              A well-designed website is more than aesthetics — it's an experience. Good design reduces frustration, simplifies decisions, and builds credibility. It turns first-time visitors into advocates and long-term users into loyal customers. With purposeful UX and thoughtful UI, we ensure your brand delivers <em>impactful digital experiences</em> that last.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebAndUxDesign;