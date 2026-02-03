import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DigitalMarketing = () => {
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
        Digital Marketing
      </span>
      <br />
      <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
        That Drives 
      </span>
      <br />
      <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
        Growth
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="text-gray-300 text-base md:text-lg max-w-5xl mx-auto leading-relaxed"
      style={{ letterSpacing: '-0.02em', lineHeight: '160%' }}
    >
      We plan, execute, and optimise digital marketing strategies using data, creativity, and technology — helping brands increase visibility, attract qualified leads, and achieve measurable business growth.
    </motion.p>
  </div>
</section>

      {/* Performance Led Marketing Strategy */}
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
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif italic  text-white mb-8 whitespace-nowrap" style={{ fontFamily: 'Baskervville, serif',letterSpacing: '-0.05em' }}>
                Performance Led Marketing Strategy
              </h2>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Audience Driven Targeting
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  We identify and segment the right audiences using behavioural insights and data signals, ensuring campaigns reach users most likely to engage and convert. 
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Paid Media Campaigns
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                 From search to social and display, we design and optimise paid campaigns focused on relevance, performance and return on ad spend. 
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Content-Led Engagement
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  We build tailored content strategies that educate, engage, and convert — strengthening brand presence and supporting campaign success across channels.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Optimisation & Long Term Growth Section */}
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
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif italic  text-white mb-8 whitespace-nowrap" style={{ fontFamily: 'Baskervville, serif',letterSpacing: '-0.05em' }}>
                Optimisation & Long Term Growth
              </h2>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Search Engine Optimisation
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  We enhance organic visibility through technical SEO, content optimisation, and on-page improvements — driving qualified traffic and sustainable long-term growth.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Analytics & Performance Tracking
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  Using analytics and reporting tools, we measure campaign effectiveness, uncover optimisation opportunities and refine strategies for continued improvement. 
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Scalable Creative Growth
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                  Our marketing approach aligns your channels, budget, and goals, enabling sustainable growth and adaptability in competitive digital landscapes.
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
             <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif italic  text-white mb-8 whitespace-nowrap" style={{ fontFamily: 'Baskervville, serif',letterSpacing: '-0.05em' }}>
                Why Digital Marketing Matters
              </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
              In today’s digital world, visibility and engagement are essential. Effective digital marketing helps you attract the right audience, build meaningful connections, and grow your business with measurable results and strategic insights. 
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;