import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InfluencerMarketing = () => {
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
        Influencer
      </span>
      <br />
      <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
        Marketing That
      </span>
      <br />
      <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
        Feels Authentic
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="text-gray-300 text-base md:text-lg max-w-5xl mx-auto leading-relaxed"
      style={{ letterSpacing: '-0.02em', lineHeight: '160%' }}
    >
      We connect brands with the right creators to build trust, spark conversations, and drive real impact. Our influencer marketing strategies focus on authenticity, relevance, and measurable outcomes — not just reach.
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
                What We Do
              </h2>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Creator Discovery & Selection
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                 We identify influencers who genuinely align with your brand values, audience, and objectives — ensuring credibility and meaningful engagement.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Campaign Strategy & Planning
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                 From product launches to awareness and performance-led campaigns, we design influencer strategies tailored to your goals and platforms. 
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Content Collaboration
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                 We work closely with creators to co-create content that feels natural, engaging, and true to both the influencer's voice and your brand.
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
                Execution & Performance
              </h2>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Campaign Management
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                 We handle end-to-end coordination — onboarding, timelines, approvals, and delivery — ensuring smooth and timely execution.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                 Multi-Platform Activation
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                 We activate campaigns across Instagram, YouTube, short-form video platforms, and emerging channels based on audience behaviour. 
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Tracking & Reporting
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
                 We track reach, engagement, and impact to evaluate performance and optimise future campaigns.
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
                Why Influencer Marketing Matters
              </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed" style={{ letterSpacing: '-0.08em', lineHeight: '150%' }}>
             Influencers build trust where ads often can't. When done right, influencer marketing humanises your brand, strengthens credibility, and drives real engagement through voices your audience already believes in. 
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfluencerMarketing;