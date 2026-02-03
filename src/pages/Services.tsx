import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Creative Content That Builds Brands",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    href: "/creative-and-content",
  },
  {
    title: "Digital Marketing That Drives Growth",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    href: "/digital-marketing",
  },
  {
    title: "Building Brands With Clear Purpose",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    href: "/brand-strategy",
  },
  {
    title: "Designing Websites That Perform",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    href: "/web-and-ux-design",
  },
  {
    title: "Influencer Marketing That Feels Authentic",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    href: "/influencer-marketing",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[3rem] p-12 md:p-16">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-8"
              >
                What we do, <span className="font-serif italic">delivered well.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
              >
                Our services combine strategic thinking, thoughtful design, and performance-driven execution to help brands build clarity, scale efficiently, and grow with purpose.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[3rem] p-12 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="group block overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  <div className="pt-3 pb-2">
                    <h3 className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
