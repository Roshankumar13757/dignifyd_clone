import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Workstreams",
    description: "All initiatives tracked through structured queues with clear ownership.",
  },
  {
    title: "Fast Delivery",
    description: "Agile execution powered by prioritisation, sprints, and delivery benchmarks.",
  },
  {
    title: "Predictable Pricing",
    description: "Transparent scope, clear commercials, and outcome-driven planning.",
  },
  {
    title: "Proven Expertise",
    description: "Experience across brands, sectors, and high-impact digital initiatives.",
  },
  {
    title: "Iterate",
    description: "Continuous refinement guided by feedback, data, and performance insights.",
  },
  {
    title: "Custom Solutions",
    description: "Custom strategies and executions aligned to your business goals.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">
            Why leading brands<br />
            <span className="font-serif italic">trust us.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Once you partner with Dignifyd, execution becomes predictable, scalable, and aligned.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="service-card"
            >
              <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
              <p className="text-muted-foreground text-sm">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/about" className="btn-secondary">
            About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
