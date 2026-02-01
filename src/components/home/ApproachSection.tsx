import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const steps = [
  {
    number: "Discover",
    description: "We align on goals, scope, and success metrics before execution.",
  },
  {
    number: "Execute",
    description: "Our teams design, build, and deploy with speed and precision.",
  },
  {
    number: "Optimize",
    description: "We refine continuously using performance data and feedback loops.",
  },
];

const ApproachSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Our Approach</p>
          <h2 className="section-title">
            Digital Growth,
            <br />
            <span className="font-serif italic">executed with clarity.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A structured process built for scalable digital outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{step.number}</h3>
              <p className="text-muted-foreground">{step.description}</p>
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
          <Link to="/contact" className="btn-primary">
            Schedule a Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
