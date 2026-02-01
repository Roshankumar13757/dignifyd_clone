import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceContentSection from "@/components/ServiceContentSection";

const InfluencerMarketing = () => {
  return (
    <ServicePageLayout
      title="Influencer Marketing That Feels Authentic"
      description="We connect brands with the right creators to build trust, spark conversations, and drive real impact. Our influencer marketing strategies focus on authenticity, relevance, and measurable outcomes — not just reach."
    >
      <ServiceContentSection
        sectionTitle="What We Do"
        image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
        items={[
          {
            title: "Creator Discovery & Selection",
            description: "We identify influencers who genuinely align with your brand values, audience, and objectives — ensuring credibility and meaningful engagement."
          },
          {
            title: "Campaign Strategy & Planning",
            description: "From product launches to awareness and performance-led campaigns, we design influencer strategies tailored to your goals and platforms."
          },
          {
            title: "Content Collaboration",
            description: "We work closely with creators to co-create content that feels natural, engaging, and true to both the influencer's voice and your brand."
          }
        ]}
      />

      <ServiceContentSection
        sectionTitle="Execution & Performance"
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
        imagePosition="right"
        items={[
          {
            title: "Campaign Management",
            description: "We handle end-to-end coordination — onboarding, timelines, approvals, and delivery — ensuring smooth and timely execution."
          },
          {
            title: "Multi-Platform Activation",
            description: "We activate campaigns across Instagram, YouTube, short-form video platforms, and emerging channels based on audience behaviour."
          },
          {
            title: "Tracking & Reporting",
            description: "We track reach, engagement, and impact to evaluate performance and optimise future campaigns."
          }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Influencer Marketing Matters</h2>
            <p className="text-muted-foreground text-lg">
              Influencers build trust where ads often can't. When done right, influencer marketing humanises your brand, strengthens credibility, and drives real engagement through voices your audience already believes in.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default InfluencerMarketing;
