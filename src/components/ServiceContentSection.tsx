import { motion } from "framer-motion";

interface ServiceContentSectionProps {
  sectionTitle: string;
  items: {
    title: string;
    description: string;
  }[];
  image: string;
  imagePosition?: "left" | "right";
}

const ServiceContentSection = ({
  sectionTitle,
  items,
  image,
  imagePosition = "left",
}: ServiceContentSectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={imagePosition === "right" ? "lg:order-2" : ""}
          >
            <img
              src={image}
              alt={sectionTitle}
              className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={imagePosition === "right" ? "lg:order-1" : ""}
          >
            <h2 className="text-2xl md:text-3xl font-serif italic mb-8">{sectionTitle}</h2>
            
            <div className="space-y-8">
              {items.map((item, index) => (
                <div key={item.title} className="feature-item">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContentSection;
