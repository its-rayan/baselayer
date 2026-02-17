import { MarketingContainer } from "@/components/layout/container";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 md:px-0 bottom-0 border-t border-muted h-(--footer-height)">
      <MarketingContainer className="flex items-center">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Baselayer.
        </p>

        <p className="text-sm text-neutral-500 ml-auto">
          Built with &#9829; from London
        </p>
      </MarketingContainer>
    </footer>
  );
}
