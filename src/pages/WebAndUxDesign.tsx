import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WebAndUxDesign = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-teal-900 via-teal-950 to-black min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-tight"
          >
            <span className="font-serif italic">Designing</span><br />
            <span className="font-serif italic">Websites That</span><br />
            <span className="font-serif italic">Perform</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
          >
            We craft purposeful digital experiences that are visually stunning,
            intuitively usable, and strategically built to help brands convert
            visitors into loyal customers.
          </motion.p>
        </div>
      </section>

      {/* ================= WEB EXPERIENCES ================= */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
              className="rounded-2xl shadow-xl"
              alt="UX Design"
            />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white tracking-tight">
                Web Experiences Built With Purpose
              </h2>

              {[
                {
                  title: "User-Centric Design Approach",
                  text: "We begin by understanding your users, shaping intuitive experiences that feel natural and effortless across devices."
                },
                {
                  title: "Conversion-Focused UX Strategy",
                  text: "Every design choice guides visitors toward meaningful actions that drive growth."
                },
                {
                  title: "Responsive Performance Design",
                  text: "Flawless performance across desktop, tablet, and mobile — speed and clarity included."
                }
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= DESIGN SYSTEMS ================= */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white tracking-tight">
                Design Systems That Scale
              </h2>

              {[
                {
                  title: "Scalable UI Foundations",
                  text: "Modular UI systems ensure consistency and faster iteration."
                },
                {
                  title: "Brand-Aligned Interfaces",
                  text: "Typography, color, and layout aligned perfectly with your identity."
                },
                {
                  title: "Developer-Ready Delivery",
                  text: "Clean handoffs that accelerate development without friction."
                }
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800"
              className="rounded-2xl shadow-xl"
              alt="Design Systems"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU GET ================= */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-5xl font-serif italic text-white mb-12 tracking-tight"
          >
            What You Get With Our Web & UX Design Service
          </motion.h2>

          <div className="space-y-10">
            {[
              "Discovery & Strategy",
              "Wireframes & Prototypes",
              "UI Design & Visual Brand Language",
              "Responsive & Accessible Layouts",
              "UX Testing & Iteration",
              "Developer-Ready Files"
            ].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                  Designed to ensure clarity, performance, and long-term scalability.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-6 tracking-tight"
          >
            Why It Matters
          </motion.h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            A well-designed website builds trust, reduces friction, and turns
            visitors into advocates. Thoughtful UX and purposeful UI create
            digital experiences that drive lasting impact.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebAndUxDesign;
