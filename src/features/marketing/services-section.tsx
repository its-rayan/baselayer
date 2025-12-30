const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions designed to meet your unique business needs and drive growth.",
  },
  {
    title: "Design To Code",
    description:
      "Got a design in Figma or Adobe XD? We'll turn it into pixel-perfect frontend. What you see is exactly what you'll get.",
  },
  {
    title: "Design Systems",
    description:
      "Reusable components and patterns that keep your product consistent as it grows.",
  },
  {
    title: "Refactors & Performance Improvements",
    description:
      "Cleaning up messy codebases and improving speed, usability, and accessibility.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="flex flex-col gap-16">
        <div className="flex gap-1 flex-col">
          <p className="text-3xl">We do everything you need to</p>
          <p className="text-3xl">move faster and scale</p>
        </div>

        <div className="grid grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-4 col-span-2">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
