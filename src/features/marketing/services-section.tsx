import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { TerminalDemo } from "@/components/magicui/terminal-demo";
import { AnimatedCircularProgressBarDemo } from "@/components/magicui/circular-progress-bar-demo";
import { IconCloudDemo } from "@/components/magicui/icon-cloud-demo";

const features = [
  {
    name: "Custom Software Development",
    description:
      "Tailored solutions designed to meet your unique business needs and drive growth.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90">
        <TerminalDemo />
      </div>
    ),
  },
  {
    name: "Refactors & Performance Improvements",
    description:
      "Cleaning up messy codebases and improving speed, usability, and accessibility.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute top-10 left-60 h-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105">
        <AnimatedCircularProgressBarDemo />
      </div>
    ),
  },
  {
    name: "Design To Code",
    description:
      "Got a design in Figma or Adobe XD? We'll turn it into pixel-perfect frontend. What you see is exactly what you'll get.",
    className: "col-span-4 lg:col-span-3",
    background: (
      <div className="absolute top-4 right-2 h-75 w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90">
        <IconCloudDemo />
      </div>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32">
      <div className="flex flex-col gap-16">
        <div className="flex gap-1 flex-col text-center">
          <p className="text-3xl">We do everything you need to move</p>
          <p className="text-3xl"> faster and scale</p>
        </div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
