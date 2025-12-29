import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Work", hash: "work" },
  { name: "Services", hash: "services" },
  { name: "Price", hash: "pricing" },
];

export default function Navbar() {
  const hash = useLocation({
    select: (location) => location.hash,
  });

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-7xl p-6 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold">
          Baselayer
        </Link>

        <nav className="flex gap-6 text-muted-foreground">
          {navItems.map((items) => (
            <Link
              key={items.hash}
              to="/"
              hash={items.hash}
              className={cn(hash === `${items.hash}` ? "text-foreground" : "")}
            >
              {items.name}
            </Link>
          ))}
        </nav>
        <Button size="sm">Book a call</Button>
      </div>
    </div>
  );
}
