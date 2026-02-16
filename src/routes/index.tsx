import HeroSection from "@/features/marketing/hero-section";
import PricingSection from "@/features/marketing/pricing-section";
import ServicesSection from "@/features/marketing/services-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="w-full flex flex-col gap-10 h-screen px-6 md:px-0">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      {/* <WorkedWithSection />
      <div className="flex flex-col gap-16">
        <StackSection />
      </div> */}
    </main>
  );
}
