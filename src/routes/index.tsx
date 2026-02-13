import HeroSection from "@/features/marketing/hero-section";
// import ServicesSection from "@/features/marketing/services-section";
// import StackSection from "@/features/marketing/stack-section";
// import WorkedWithSection from "@/features/marketing/worked-with-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="w-full flex flex-col gap-8">
      <HeroSection />
      {/* <WorkedWithSection />
      <div className="flex flex-col gap-16">
        <StackSection />
        <ServicesSection />
      </div> */}
    </main>
  );
}
