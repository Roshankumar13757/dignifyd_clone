const logos = [
  { name: "Garnier", text: "GARNIER" },
  { name: "Snitch", text: "⊞ SNITCH" },
  { name: "Mamaearth", text: "mamaearth" },
  { name: "boAt", text: "boAt" },
  { name: "Aqualogica", text: "Aqualogica°" },
];

interface LogoMarqueeProps {
  label?: string;
  reverse?: boolean;
}

const LogoMarquee = ({ label = "Trusted by global brands across lifestyle, SaaS, fintech & enterprise", reverse = false }: LogoMarqueeProps) => {
  return (
    <div className="py-12 bg-background">
      {label && (
        <p className="text-center text-muted-foreground text-sm mb-8">{label}</p>
      )}
      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className={`flex ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}>
          {/* Double the items for seamless loop */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <span className="text-xl md:text-2xl font-medium text-muted-foreground/60 whitespace-nowrap tracking-wide">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
