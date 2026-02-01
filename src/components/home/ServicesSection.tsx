import { motion } from "framer-motion";

const servicesRow1 = ["Logos", "Creative Strategy", "Branding", "Website Design"];
const servicesRow2 = ["Influencer Marketing", "Copywriting", "Video Editing", "SEO, SEM", "Social Media"];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Services</p>
          <h2 className="section-title">
            All your digital<br />
            <span className="font-serif italic">needs.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Modern businesses need more than isolated solutions. We deliver integrated digital services that align design, technology, and growth under one strategic partner.
          </p>
        </motion.div>
      </div>

      {/* Services Marquee Row 1 */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex marquee-track">
          {[...servicesRow1, ...servicesRow1, ...servicesRow1, ...servicesRow1, ...servicesRow1, ...servicesRow1].map((service, index) => (
            <div
              key={`s1-${index}`}
              className="flex-shrink-0 px-4"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground/30 whitespace-nowrap">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Marquee Row 2 */}
      <div className="relative overflow-hidden">
        <div className="flex marquee-track-reverse">
          {[...servicesRow2, ...servicesRow2, ...servicesRow2, ...servicesRow2, ...servicesRow2, ...servicesRow2].map((service, index) => (
            <div
              key={`s2-${index}`}
              className="flex-shrink-0 px-4"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground/30 whitespace-nowrap">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
