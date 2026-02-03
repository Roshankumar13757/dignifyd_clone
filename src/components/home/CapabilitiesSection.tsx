import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Workstreams",
    description: "All initiatives tracked through structured queues with clear ownership.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        {/* Network/Team icon */}
        <circle cx="22" cy="20" r="6" className="stroke-teal-500" />
        <circle cx="42" cy="20" r="6" className="stroke-teal-500" />
        <path d="M 22 26 L 22 32 M 42 26 L 42 32" className="stroke-white" />
        <path d="M 16 32 L 28 32 M 36 32 L 48 32" className="stroke-white" strokeLinecap="round" />
        <path d="M 22 32 Q 22 38 32 38 Q 42 38 42 32" className="stroke-teal-500" fill="none" />
      </svg>
    )
  },
  {
    title: "Fast Delivery",
    description: "Agile execution powered by prioritisation, sprints, and delivery benchmarks.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        {/* Clock/Timer icon */}
        <circle cx="32" cy="32" r="18" className="stroke-white" />
        <path d="M 32 20 L 32 32 L 40 40" className="stroke-teal-500" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="2" className="fill-teal-500 stroke-none" />
      </svg>
    )
  },
  {
    title: "Predictable Pricing",
    description: "Transparent scope, clear commercials, and outcome-driven planning.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        {/* Piggy bank icon */}
        <ellipse cx="32" cy="35" rx="16" ry="12" className="stroke-white" />
        <path d="M 48 35 L 52 35" className="stroke-teal-500" strokeLinecap="round" />
        <circle cx="38" cy="32" r="1.5" className="fill-white" />
        <path d="M 28 25 Q 32 20 36 25" className="stroke-teal-500" strokeLinecap="round" fill="none" />
        <rect x="30" y="46" width="4" height="4" className="stroke-white" fill="none" />
        <rect x="38" y="46" width="4" height="4" className="stroke-white" fill="none" />
      </svg>
    )
  },
  {
    title: "Proven Expertise",
    description: "Experience across brands, sectors, and high-impact digital initiatives.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        {/* Medal/Award icon */}
        <circle cx="32" cy="28" r="12" className="stroke-white" />
        <path d="M 20 28 L 16 48 L 24 44 L 28 48 M 44 28 L 48 48 L 40 44 L 36 48" className="stroke-teal-500" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="28" r="6" className="stroke-teal-500" />
        <path d="M 32 22 L 32 24 M 32 32 L 32 34" className="stroke-teal-500" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Iterate",
    description: "Continuous refinement guided by feedback, data, and performance insights.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        {/* Document with checkmark icon */}
        <path d="M 24 16 L 24 48 L 48 48 L 48 24 L 40 16 Z" className="stroke-white" strokeLinejoin="round" />
        <path d="M 40 16 L 40 24 L 48 24" className="stroke-white" strokeLinejoin="round" />
        <path d="M 30 32 L 34 36 L 42 28" className="stroke-teal-500" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Custom Solutions",
    description: "Custom strategies and executions aligned to your business goals.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        {/* Target/Precision icon */}
        <circle cx="32" cy="32" r="18" className="stroke-white" />
        <circle cx="32" cy="32" r="12" className="stroke-white" />
        <circle cx="32" cy="32" r="6" className="stroke-teal-500" />
        <path d="M 32 14 L 32 20 M 32 44 L 32 50 M 14 32 L 20 32 M 44 32 L 50 32" className="stroke-teal-500" strokeLinecap="round" />
      </svg>
    )
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Max width container matching ParallaxVideoSection */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border border-gray-800 rounded-[3rem] p-12 md:p-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Capabilities Badge */}
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
                  Capabilities
                </p>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-medium mb-6" style={{ letterSpacing: '-0.05em' }}>
              Why leading brands{" "}
              <span className="font-serif italic" style={{ fontFamily: 'Baskervville, serif' }}>
                trust
              </span>{" "}
              us.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.02em', lineHeight: '160%' }}>
              Once you partner with Dignifyd, execution becomes predictable, scalable, and aligned.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="text-teal-500">
                    {cap.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-medium mb-3 text-white" style={{ letterSpacing: '-0.02em' }}>
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto" style={{ letterSpacing: '-0.02em', lineHeight: '140%' }}>
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link 
              to="/about" 
              className="inline-block px-10 py-4 bg-teal-600 hover:bg-teal-700 rounded-full text-white text-lg font-light transition-colors duration-300"
            >
              About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;