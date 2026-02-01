import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ValueSection = () => {
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
          <p className="section-label">Value</p>
          <h2 className="section-title">
            Agile, precise &<br />
            <span className="font-serif italic">scalable.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Dignifyd Digital replaces fragmented vendors with a unified digital partner, delivering consistent, performance-driven outcomes through structured engagement models.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <blockquote className="text-lg md:text-xl text-center leading-relaxed">
            "At Dignifyd Digital, <strong>we believe digital success is built on clarity, creativity, and trust. Our focus is simple—create meaningful digital solutions that help brands grow with purpose, impact, and integrity. Every project we take on is a partnership, not just a service.</strong>"
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="Paavan Ahuja"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">Paavan Ahuja</p>
              <p className="text-sm text-muted-foreground">CEO, Dignifyd Group</p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="service-card"
          >
            <h3 className="text-xl font-semibold mb-3">Scalable Execution Requests</h3>
            <p className="text-muted-foreground">
              Prioritised workstreams executed through structured queues and delivery ownership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="service-card"
          >
            <h3 className="text-xl font-semibold mb-3">Governed Workflows</h3>
            <p className="text-muted-foreground">
              Clear visibility across active, ongoing, and completed initiatives with defined accountability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="service-card md:col-span-2"
          >
            <h3 className="text-xl font-semibold mb-3">Flexible Engagement Model</h3>
            <p className="text-muted-foreground">
              Engagements designed to adapt to business priorities, scale, and timelines.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
