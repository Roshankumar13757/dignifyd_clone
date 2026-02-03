import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";

const team = [
  {
    name: "Akshita Malik",
    role: "Graphics Designer",
    image: "https://framerusercontent.com/images/lJNh5UBNMKTUklAVu5xj6ZuJIU.jpeg?width=1402&height=1784",
  },
  {
    name: "Dimpy Kharb",
    role: "Graphics Designer",
    image: "https://framerusercontent.com/images/UQE6L2hcUnKd7rRDY9L3OsycKo.jpg?width=2268&height=4032",
  },
  {
    name: "rudraksh Verma",
    role: "Video Editor & Motion Graphics Designer",
    image: "https://framerusercontent.com/images/FLev0HsRek9LVpNHZUN4tYefraE.jpg?width=3024&height=2742",
  },
  {
    name: "Mohammad Sarfaraj",
    role: "Video Editor & Motion Graphics Designer",
    image: "https://framerusercontent.com/images/rT1eWK73UrDFw0njgkzynGWRA.jpg?width=3024&height=2855",
  },
  {
    name: "Deepika Rawat",
    role: "product Designer",
    image: "https://framerusercontent.com/images/9EII2f4b98g01a2TTDTCk3jBEU.jpg?width=2268&height=4032",
  },
  {
    name: "Shivani Sharma",
    role: "Influencer Marketing Manager",
    image: "https://framerusercontent.com/images/mFFRlWhgVC7sgoR4fzWY2MexTuE.jpg?width=2268&height=4032",
  },
  {
    name: "Utsav Tyagi",
    role: "Sales & Marketing Executive",
    image: "https://framerusercontent.com/images/GGAhSL4xFb0mSs7H0olJXKrvoWE.jpg?width=2268&height=4032",
  },
  {
    name: "Ashish Tyagi",
    role: "Sales Executive",
    image: "https://framerusercontent.com/images/4KlqiGl4HOKtsLQXvVvDl90sMMw.jpg?width=2268&height=4032",
  },
  {
    name: "Peehu Gupta",
    role: "Growth Maketing Executive",
    image: "https://framerusercontent.com/images/ZnmU6KfWeNClmiFBYmEYSfaD6k.jpg?width=2140&height=2611",
  },
  {
    name: "Krishna Gupta",
    role: "Sales & Marketing Specialist",
    image: "https://framerusercontent.com/images/szekSzpQqYv58YzfG9crz9Q3SQ.jpg?width=2268&height=4032",
  },
  {
    name: "Maahi Namadev",
    role: "Digital marketing Executive",
    image: "https://framerusercontent.com/images/ya7LoZbvqNkzgsUS1lJYRGIXIU.jpg?width=2268&height=4032",
  },
  {
    name: "Nandini Gupta",
    role: "Digital marketing Executive",
    image: "https://framerusercontent.com/images/UCkLaukvsXBquWul3Qq8FVyBnx0.jpg?width=2268&height=4032",
  },
  {
    name: "Paavan Ahuja",
    role: "Chief Executive Officer",
    image: "https://framerusercontent.com/images/DCtW3lLtTM35ABrYoEuBt0qjC8.jpg?width=2268&height=4032",
  },
  {
    name: "Udaytanshu Aggarwal",
    role: "Financial & Growth Advisor",
    image: "https://framerusercontent.com/images/0fGrCd9nA2HPeC5F3r48EEU0hw.jpg?width=2119&height=3867",
  },
  {
    name: "Siddharth Chawla",
    role: "Design & Innovation Associate",
    image: "https://framerusercontent.com/images/6vQLKCrbJ5Zj4kEiUPzTSwWxmLQ.jpg?width=2268&height=4032",
  },
  {
    name: "Pratyush Jha",
    role: "SEO Specialist",
    image: "https://framerusercontent.com/images/OSU29EXIYnoRuF7xb9vx4RbgOQ.jpg?width=3024&height=2949",
  },
  {
    name: "Raj Yadav",
    role: "Senior Wordpress Developer",
    image: "https://framerusercontent.com/images/WtB42PjMwwwcc2MtNqkUWhziKk.jpg?width=2268&height=4032",
  },
  {
    name: "Bhavya Tiwari",
    role: "Junior Wordpress Developer",
    image: "https://framerusercontent.com/images/7NFaQVF87Qcf7iZD52ee8Q02gcA.jpg?width=3024&height=2759",
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
                  src="https://framerusercontent.com/images/qtcsKLPQgRAhAk0p7PkA5cIyo.png?width=6000&height=4004"
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
                  src="https://framerusercontent.com/images/rA7aZFuPO3WfokCKWVcPXcjKReM.png?width=3600&height=2400"
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