import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceContentSection from "@/components/ServiceContentSection";

const CreativeAndContent = () => {
  return (
    <ServicePageLayout
      title="Creative & Content That Connects"
      description="We craft compelling creative content that tells your brand story, captivates audiences, and drives engagement across digital platforms. From visual design to strategic storytelling, our approach blends creativity with purpose to make every piece of content meaningful and effective."
    >
      <ServiceContentSection
        sectionTitle="Creative Strategy & Execution"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
        items={[
          {
            title: "Visual Storytelling",
            description: "We design eye-catching visuals — from graphics to videos — that communicate your message clearly and memorably."
          },
          {
            title: "Strategic Content Creation",
            description: "We produce written and multimedia content tailored to your audience — including social posts, blogs, website copy, and campaign materials — aligned with your goals."
          },
          {
            title: "Brand-Led Messaging",
            description: "We define and refine your brand voice to ensure every piece of content speaks with clarity, consistency, and impact."
          }
        ]}
      />

      <ServiceContentSection
        sectionTitle="Creative Systems That Scale"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
        imagePosition="right"
        items={[
          {
            title: "Integrated Campaign Support",
            description: "Our creative output is designed to work seamlessly across platforms — social, web, email, and ads — for cohesive messaging."
          },
          {
            title: "Optimisation & Insights",
            description: "We leverage performance data to refine creative and content over time, ensuring better engagement and stronger results."
          },
          {
            title: "Multi-Format Content Delivery",
            description: "From static visuals and animations to long-form storytelling and short video clips — we support diverse formats based on your audience and channels."
          }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Creative Matters</h2>
            <p className="text-muted-foreground text-lg">
              In a crowded digital landscape, strong creative sets you apart. It builds attention, communicates value, and creates emotional connection — turning passive viewers into active customers.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default CreativeAndContent;
