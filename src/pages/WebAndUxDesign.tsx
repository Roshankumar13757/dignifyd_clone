import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceContentSection from "@/components/ServiceContentSection";

const WebAndUxDesign = () => {
  return (
    <ServicePageLayout
      title="Designing Websites That Perform"
      description="We craft purposeful digital experiences that are visually stunning, intuitively usable, and strategically built to help brands convert visitors into loyal customers. Combining research-driven UX, beautiful UI, and modern technologies, our designs don't just look great — they perform."
    >
      <ServiceContentSection
        sectionTitle="Web Experiences Built With Purpose"
        image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop"
        items={[
          {
            title: "User-Centric Design Approach",
            description: "Your website should speak to your audience — not confuse them. Our UX methodology starts with understanding your users and shaping experiences that feel natural and effortless. By creating clear navigation, meaningful interactions, and accessible layouts across devices, we make digital experiences that engage, retain, and build trust."
          },
          {
            title: "Conversion-Focused UX Strategy",
            description: "Design for your business goals. Every layout choice we make aims to guide visitors toward action — whether it's lead generation, sales, inquiry submissions, or deeper engagement. Through strategic user flows, visual hierarchy, and behaviour-driven layouts, we help your website become a growth engine."
          },
          {
            title: "Responsive Performance Design",
            description: "In today's multi-device world, responsiveness isn't optional — it's foundational. We ensure your site looks sharp and functions flawlessly across desktop, tablet, and mobile. Fast load times, seamless interactions, and adaptive layouts create a consistent brand experience that keeps users coming back."
          }
        ]}
      />

      <ServiceContentSection
        sectionTitle="Design Systems That Scale"
        image="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop"
        imagePosition="right"
        items={[
          {
            title: "Scalable UI Foundations",
            description: "We build design systems that provide consistency at scale. From colour palettes and typography to reusable components, your brand stays unified across every page and platform."
          },
          {
            title: "Pixel-Perfect Execution",
            description: "We obsess over every detail. Visual rhythm, alignment, spacing, and micro-interactions — because great design lies in the precision of the small things."
          },
          {
            title: "Future-Ready Design Handoffs",
            description: "Our structured design documentation makes development handoff seamless, reducing friction between design and engineering while enabling long-term iteration."
          }
        ]}
      />
    </ServicePageLayout>
  );
};

export default WebAndUxDesign;
