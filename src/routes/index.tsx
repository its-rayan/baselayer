import HeroSection from "@/features/marketing/hero-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
