import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ValueSection = () => {
  return (
    <section className="py-24 bg-black text-white" id="benefits">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] p-12 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
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
                <p className="text-sm font-medium tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                  Value
                </p>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-medium mb-6" style={{ letterSpacing: '-0.05em' }}>
              Agile, precise{" "}
              <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif', letterSpacing: '0em' }}>
                &
              </span>{" "}
              <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif', letterSpacing: '0em' }}>
                scalable
              </span>
              <span className="font-serif italic" style={{ letterSpacing: '0em' }}>.</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.02em', lineHeight: '160%' }}>
              Dignifyd Digital replaces fragmented vendors with a unified digital partner, delivering consistent, performance-driven outcomes through structured engagement models.
            </p>
          </motion.div>
          {/*<!-- Grid Layout -->*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start -mx-12 md:-mx-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            >
              <div className="relative z-10  md:p-8 pr-0">
                <div className="max-w-[55%]">
                  <blockquote className="text-gray-300 text-base leading-relaxed mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '140%' }}>
                    "At Dignifyd Digital, we believe digital success is built on clarity, creativity, and trust. Our focus is simple—create meaningful digital solutions that help brands grow with purpose, impact, and integrity. Every project we take on is a partnership, not just a service."
                  </blockquote>
                  
                  <div>
                    <h5 className="font-medium text-white mb-1" style={{ letterSpacing: '-0.02em', lineHeight: '140%' }}>
                      Paavan Ahuja
                    </h5>
                    <p className="text-xs text-gray-400" style={{ letterSpacing: '-0.02em', lineHeight: '140%' }}>
                      CEO, Dignifyd Group
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)',
                  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)'
                }}
              >
                <img
                  src="https://framerusercontent.com/images/DCtW3lLtTM35ABrYoEuBt0qjC8.jpg?width=2268&height=4032"
                  alt="Paavan Ahuja"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-2xl md:text-3xl font-medium mb-3 text-white" style={{ letterSpacing: '-0.02em', lineHeight: '1em' }}>
                  Scalable Execution Requests
                </h1>
                <p className="text-gray-400 text-base leading-relaxed" style={{ letterSpacing: '-0.02em', lineHeight: '140%' }}>
                  Prioritised workstreams executed through structured queues and delivery ownership.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-2xl md:text-3xl font-medium mb-3 text-white" style={{ letterSpacing: '-0.02em', lineHeight: '1em' }}>
                  Governed Workflows
                </h1>
                <p className="text-gray-400 text-base leading-relaxed" style={{ letterSpacing: '-0.02em', lineHeight: '140%' }}>
                  Clear visibility across active, ongoing, and completed initiatives with defined accountability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-2xl md:text-3xl font-medium mb-3 text-white" style={{ letterSpacing: '-0.02em', lineHeight: '1em' }}>
                  Flexible Engagement Model
                </p>
                <p className="text-gray-400 text-base leading-relaxed" style={{ letterSpacing: '-0.02em', lineHeight: '140%' }}>
                  Engagements designed to adapt to business priorities, scale, and timelines.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;