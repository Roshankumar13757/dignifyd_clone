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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 page-hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-8"
          >
            Delivering Long-Term
            <br />
            <span className="font-serif italic">Digital</span> Value.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From strategy to execution, we help ambitious brands create digital systems that drive visibility, engagement, and sustainable growth.
          </motion.p>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee label="Our designs are featured on:" />

      {/* Strategic Note Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                On a <span className="font-serif italic">strategic</span> note
              </h2>
              
              <div className="space-y-8">
                <div className="feature-item">
                  <h3 className="text-lg font-semibold mb-2">We're passionate about digital excellence</h3>
                  <p className="text-muted-foreground">
                    Our work is guided by a deep understanding of business objectives and digital ecosystems. By combining insight-driven strategy with thoughtful execution, we help brands build digital foundations that are relevant, resilient, and future-ready.
                  </p>
                </div>

                <div className="feature-item">
                  <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To design and deliver impactful digital experiences that connect brands with their audiences, enable growth, and translate creative intent into measurable business outcomes.
                  </p>
                </div>

                <div className="feature-item">
                  <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To empower global brands through strategic digital solutions that are scalable, data-informed, and built to create long-term value in an ever-evolving digital landscape.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                alt="Team working"
                className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl mb-6">On a personal note</h2>
              
              <div className="space-y-8">
                <div className="feature-item">
                  <h3 className="text-lg font-semibold mb-2">We care deeply about how we work</h3>
                  <p className="text-muted-foreground">
                    We believe great work comes from healthy collaboration. Our environment encourages open thinking, honest conversations, and the space to explore ideas without friction—creating room for creativity to thrive.
                  </p>
                </div>

                <div className="feature-item">
                  <h3 className="text-lg font-semibold mb-2">Built on trust and respect</h3>
                  <p className="text-muted-foreground">
                    We work as a unified team, valuing accountability, empathy, and mutual support. Every project is a shared responsibility, and every success is collective.
                  </p>
                </div>

                <div className="feature-item">
                  <h3 className="text-lg font-semibold mb-2">Different perspectives, shared direction</h3>
                  <p className="text-muted-foreground">
                    Each individual brings a unique way of thinking to the table. By embracing diverse skills and viewpoints, we strengthen our culture and elevate the quality of everything we create.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label">Team</p>
            <h2 className="section-title">
              Our People are<br />
              <span className="font-serif italic">Our Brand.</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A multidisciplinary team collaborating across strategy, design, and technology to deliver meaningful digital outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
