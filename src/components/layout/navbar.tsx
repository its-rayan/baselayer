import { MarketingContainer } from "@/components/layout/container";

export default function Navbar() {
  return (
    <nav className="w-full py-8 pt-16">
      <MarketingContainer className="flex items-center justify-between">
        <h1 className="font-medium">Baselayer</h1>
      </MarketingContainer>
    </nav>
  );
}
