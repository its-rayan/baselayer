import { MarketingContainer } from "@/components/layout/container";

const brands = [
  {
    name: "HSBC",
    url: "https://www.hsbc.co.uk/",
  },
  {
    name: "Barclays",
    url: "https://www.barclays.co.uk/",
  },
  {
    name: "Lloyds Bank",
    url: "https://www.lloydsbank.com/",
  },
  {
    name: "Centric",
    url: "https://www.centrica.com/",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full">
      <MarketingContainer className="flex flex-col gap-4">
        <p>
          <em className="font-serif">Web development made simple</em>. We
          deliver clean, maintainable web experiences that scale with your
          ambition.
        </p>

        <p>
          Previously, we've developed web products for brands such as{" "}
          {brands.map((brand, index) => (
            <>
              {index === brands.length - 1 && "and "}
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline pr-1"
              >
                {brand.name}
              </a>
              {index < brands.length - 1 && ", "}
            </>
          ))}
          .
        </p>
      </MarketingContainer>
    </section>
  );
}
