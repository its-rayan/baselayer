import ReactLogo from "@/assets/stack/react.svg";
import NextLogo from "@/assets/stack/next.svg";
import TypescriptLogo from "@/assets/stack/typescript.svg";
import TailwindLogo from "@/assets/stack/tailwind.svg";
import NodeLogo from "@/assets/stack/node.svg";
import WebpackLogo from "@/assets/stack/webpack.svg";
import ViteLogo from "@/assets/stack/vite.svg";

const stackItems = [
  { name: "React", src: ReactLogo },
  { name: "TypeScript", src: TypescriptLogo },
  { name: "Tailwind CSS", src: TailwindLogo },
  { name: "Next.js", src: NextLogo },
  { name: "Node.js", src: NodeLogo },
  { name: "Vite", src: ViteLogo },
  { name: "webpack", src: WebpackLogo },
];

export default function StackSection() {
  return (
    <section id="tech-stack" className="mt-32 mb-16">
      <div className="flex flex-col gap-24">
        <div className="flex gap-1 flex-col text-center">
          <p className="font-medium text-muted-foreground">Our Tech Stack</p>
          <p className="text-3xl">Clean Maintainable Code</p>
          <p className="text-3xl">Using Modern Technologies</p>
        </div>

        <div className="grid grid-cols-4 gap-12">
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center"
              title={item.name}
            >
              <img src={item.src} alt={item.name} className="w-8 h-8" />
              <p className="mt-2 text-sm text-muted-foreground">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
