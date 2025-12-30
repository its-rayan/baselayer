import BarclaysLogo from "@/assets/logos/barclays.svg";
import HSBCLogo from "@/assets/logos/hsbc.svg";
import CentricaLogo from "@/assets/logos/centrica.svg";
import LloydsLogo from "@/assets/logos/lloyds.svg";

export default function WorkedWithSection() {
  return (
    <section>
      <div className="flex flex-col items-center">
        <p className="font-medium text-muted-foreground">
          Worked With Some Great Companies
        </p>
        <div className="flex items-center space-x-32 max-w-4xl px-4 sm:px-8 lg:px-16 opacity-60">
          <img
            src={LloydsLogo}
            alt="Lloyds Logo"
            className="h-8 max-w-none"
            title="Lloyds Bank Group"
          />
          <img
            src={BarclaysLogo}
            alt="Barclays Logo"
            className="h-32 max-w-none"
            title="Barclays Bank"
          />
          <img
            src={HSBCLogo}
            alt="HSBC Logo"
            className="h-18 max-w-none"
            title="HSBC Bank"
          />
          <img
            src={CentricaLogo}
            alt="Centrica Logo"
            className="h-6 max-w-none"
            title="Centrica"
          />
        </div>
      </div>
    </section>
  );
}
