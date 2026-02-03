import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BrandStrategy = () => {
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
              Building Brands
            </span>
            <br />
            <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
              With Clear 
            </span>
            <br />
            <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
              Direction
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-300 text-base md:text-lg max-w-5xl mx-auto leading-relaxed"
            style={{ letterSpacing: '-0.02em', lineHeight: '160%' }}
          >
            We help brands define who they are, what they stand for, and how they communicate. Our brand strategies bring clarity, consistency, and focus — so every touchpoint works toward long-term growth and recognition.
          </motion.p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Images Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
                alt="Brand Strategy"
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic  text-white mb-8 whitespace-nowrap" style={{ fontFamily: 'Baskervville, serif',letterSpacing: '-0.05em' }}>
                What We Do
              </h2>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Brand Discovery
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  We understand your business, audience, and market to uncover insights that shape a strong and authentic brand foundation.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Brand Positioning
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  We define what makes your brand different and why it matters — helping you stand out clearly in competitive markets.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Brand Architecture
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  We structure your brand, services, and offerings in a way that's easy to understand and scalable as you grow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Expression Section */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic  text-white mb-8 whitespace-nowrap" style={{ fontFamily: 'Baskervville, serif',letterSpacing: '-0.05em' }}>
                Brand Expression
              </h2>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Messaging & Voice
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  We create clear messaging frameworks and brand voice guidelines to ensure consistency across all communication.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Visual Strategy Direction
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  We define the visual direction that guides design decisions — ensuring your brand looks cohesive, confident, and recognizable everywhere.
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
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                alt="Brand Expression"
                className="w-full h-auto rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6" style={{ letterSpacing: '-0.05em' }}>
              Why Brand Strategy Matters
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
              A strong brand strategy aligns perception with purpose. It builds trust, improves recall, and ensures your brand communicates with clarity at every stage of growth — not just today, but in the long run.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandStrategy;