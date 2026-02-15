import { MarketingContainer } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const pricingOptions = [
  {
    name: "One-Time Project",
    description: "Ideal for projects with clear deliverables and timelines.",
    includes: [
      "2 updates per week",
      "Senior developer access",
      "Hourly or project-based pricing",
    ],
  },
  {
    name: "Monthly Retainer",
    description: "Ideal for ongoing support and continuous development.",
    price: "5,000",
    includes: [
      "3 updates per week",
      "Senior developer access",
      "No contracts. Cancel anytime.",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="pt-6">
      <MarketingContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
        {pricingOptions.map((option) => (
          <div className="w-full flex flex-col gap-4 bg-muted-foreground/5 rounded-lg p-6">
            <div className="flex flex-col gap-2">
              <h2>{option.name}</h2>
              <p className="text-muted-foreground">{option.description}</p>
            </div>

            {option.price ? (
              <p className="text-lg">
                ${option.price} {""}
                <em className="text-muted-foreground font-normal text-sm">
                  /month
                </em>
              </p>
            ) : (
              <p className="text-muted-foreground">Contact us</p>
            )}

            <div className="flex flex-col gap-2">
              <h3>Includes:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {option.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <Button
              variant={option.price ? "default" : "outline"}
              size="sm"
              className="w-full"
            >
              {option.price ? "Join today" : "Contact us"}
            </Button>
          </div>
        ))}
      </MarketingContainer>
    </section>
  );
}
