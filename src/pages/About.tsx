import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";

const team = [
  {
    name: "Paavan Ahuja",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Udaytanshu Aggarwal",
    role: "Financial & Growth Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Siddharth Chawla",
    role: "Design & Innovation Associate",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Pratyush Jha",
    role: "SEO Specialist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Raj Yadav",
    role: "Senior Wordpress Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Bhavya Tiwari",
    role: "Junior Wordpress Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0f0d]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[3rem] p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6 text-white"
              >
                Delivering Long-Term
                <br />
                <span className="font-serif italic font-normal">Digital</span> Value.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                From strategy to execution, we help ambitious brands create digital systems that drive visibility, engagement, and sustainable growth.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[3rem] p-6 md:p-8">
            <LogoMarquee label="Our designs are featured on:" />
          </div>
        </div>
      </section>

      {/* Strategic Note Section */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[3rem] p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-auto rounded-lg object-cover aspect-[4/3] shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-12"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight">
                  On a <span className="font-serif italic font-normal">strategic</span> note
                </h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-normal mb-3 text-white">We're passionate about digital excellence</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Our work is guided by a deep understanding of business objectives and digital ecosystems. By combining insight-driven strategy with thoughtful execution, we help brands build digital foundations that are relevant, resilient, and future-ready.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-normal mb-3 text-white">Our Mission</h3>
                    <p className="text-gray-400 leading-relaxed">
                      To design and deliver impactful digital experiences that connect brands with their audiences, enable growth, and translate creative intent into measurable business outcomes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-normal mb-3 text-white">Our Vision</h3>
                    <p className="text-gray-400 leading-relaxed">
                      To empower global brands through strategic digital solutions that are scalable, data-informed, and built to create long-term value in an ever-evolving digital landscape.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[3rem] p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="lg:order-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                  alt="Team working"
                  className="w-full h-auto rounded-lg object-cover aspect-[4/3] shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:order-1 space-y-12"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight">On a personal note</h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-normal mb-3 text-white">We care deeply about how we work</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We believe great work comes from healthy collaboration. Our environment encourages open thinking, honest conversations, and the space to explore ideas without friction—creating room for creativity to thrive.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-normal mb-3 text-white">Built on trust and respect</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We work as a unified team, valuing accountability, empathy, and mutual support. Every project is a shared responsibility, and every success is collective.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-normal mb-3 text-white">Different perspectives, shared direction</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Each individual brings a unique way of thinking to the table. By embracing diverse skills and viewpoints, we strengthen our culture and elevate the quality of everything we create.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[3rem] p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              {/* Team Badge */}
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
                    Team
                  </p>
                </div>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6" style={{ letterSpacing: '-0.05em' }}>
                Our People are <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>Our Brand.</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.02em', lineHeight: '160%' }}>
                A multidisciplinary team collaborating across strategy, design, and technology to deliver meaningful digital outcomes.
              </p>
            </motion.div>

            {/* Animated Team Cards */}
            <div 
              className="relative overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)'
              }}
            >
              <div className="flex animate-scroll-team gap-6 py-4" style={{ willChange: 'transform' }}>
                {[...team, ...team, ...team].map((member, index) => (
                  <div
                    key={`team-${index}`}
                    className="flex-shrink-0 w-72 group"
                  >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay with text */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 p-6"
                        style={{
                          background: 'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
                          opacity: 1
                        }}
                      >
                        <h3 
                          className="text-xl font-medium text-white mb-1" 
                          style={{ 
                            letterSpacing: '-0.05em',
                            lineHeight: '1.5em',
                            fontSize: '22px',
                            fontWeight: 500
                          }}
                        >
                          {member.name}
                        </h3>
                        <p 
                          className="text-white text-sm"    
                          style={{ 
                            letterSpacing: '-0.05em',
                            lineHeight: '1.5em',
                            opacity: 0.8,
                            fontWeight: 500
                          }}
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll-team {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-team {
          animation: scroll-team 30s linear infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default About;