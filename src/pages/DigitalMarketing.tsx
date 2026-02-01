import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceContentSection from "@/components/ServiceContentSection";

const DigitalMarketing = () => {
  return (
    <ServicePageLayout
      title="Digital Marketing That Drives Growth"
      description="We plan, execute, and optimise digital marketing strategies using data, creativity, and technology — helping brands increase visibility, attract qualified leads, and achieve measurable business growth."
    >
      <ServiceContentSection
        sectionTitle="Performance Led Marketing Strategy"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
        items={[
          {
            title: "Audience Driven Targeting",
            description: "We identify and segment the right audiences using behavioural insights and data signals, ensuring campaigns reach users most likely to engage and convert."
          },
          {
            title: "Paid Media Campaigns",
            description: "From search to social and display, we design and optimise paid campaigns focused on relevance, performance and return on ad spend."
          },
          {
            title: "Content-Led Engagement",
            description: "We build tailored content strategies that educate, engage, and convert — strengthening brand presence and supporting campaign success across channels."
          }
        ]}
      />

      <ServiceContentSection
        sectionTitle="Optimisation & Long Term Growth"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        imagePosition="right"
        items={[
          {
            title: "Search Engine Optimisation",
            description: "We enhance organic visibility through technical SEO, content optimisation, and on-page improvements — driving qualified traffic and sustainable long-term growth."
          },
          {
            title: "Analytics & Performance Tracking",
            description: "Using analytics and reporting tools, we measure campaign effectiveness, uncover optimisation opportunities and refine strategies for continued improvement."
          },
          {
            title: "Scalable Creative Growth",
            description: "Our marketing approach aligns your channels, budget, and goals, enabling sustainable growth and adaptability in competitive digital landscapes."
          }
        ]}
      />
    </ServicePageLayout>
  );
};

export default DigitalMarketing;
