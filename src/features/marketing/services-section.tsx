import { MarketingContainer } from "@/components/layout/container";

const services = [
  {
    name: "Custom Development",
    description:
      "Designed to meet your unique business needs and drive growth.",
  },
  {
    name: "Refactors & Performance Improvements",
    description:
      "Improving speed, usability, and accessibility of existing codebases.",
  },
  {
    name: "Design To Code",
    description: "Pixel-perfect, responsive frontend — exactly as designed.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="pt-6">
      <MarketingContainer className="flex flex-col gap-6">
        <h2 className="italic font-serif">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col gap-2">
              <h3>{service.name}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </MarketingContainer>
    </section>
  );
}
