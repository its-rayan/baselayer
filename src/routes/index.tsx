import HeroSection from "@/features/marketing/hero-section";
import StackSection from "@/features/marketing/stack-section";
import WorkedWithSection from "@/features/marketing/worked-with-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6">
      <HeroSection />
      <WorkedWithSection />
      <StackSection />
    </main>
  );
}
