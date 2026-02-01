import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceContentSection from "@/components/ServiceContentSection";

const BrandStrategy = () => {
  return (
    <ServicePageLayout
      title="Building Brands With Clear Direction"
      description="We help brands define who they are, what they stand for, and how they communicate. Our brand strategies bring clarity, consistency, and focus — so every touchpoint works toward long-term growth and recognition."
    >
      <ServiceContentSection
        sectionTitle="What We Do"
        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
        items={[
          {
            title: "Brand Discovery",
            description: "We understand your business, audience, and market to uncover insights that shape a strong and authentic brand foundation."
          },
          {
            title: "Brand Positioning",
            description: "We define what makes your brand different and why it matters — helping you stand out clearly in competitive markets."
          },
          {
            title: "Brand Architecture",
            description: "We structure your brand, services, and offerings in a way that's easy to understand and scalable as you grow."
          }
        ]}
      />

      <ServiceContentSection
        sectionTitle="Brand Expression"
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
        imagePosition="right"
        items={[
          {
            title: "Messaging & Voice",
            description: "We create clear messaging frameworks and brand voice guidelines to ensure consistency across all communication."
          },
          {
            title: "Visual Strategy Direction",
            description: "We define the visual direction that guides design decisions — ensuring your brand looks cohesive, confident, and recognizable everywhere."
          }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Brand Strategy Matters</h2>
            <p className="text-muted-foreground text-lg">
              A strong brand strategy aligns perception with purpose. It builds trust, improves recall, and ensures your brand communicates with clarity at every stage of growth — not just today, but in the long run.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default BrandStrategy;
