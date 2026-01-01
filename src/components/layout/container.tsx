import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type MarketingContainerProps = ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
};

export const MarketingContainer = ({
  children,
  className,
}: MarketingContainerProps) => (
  <div className={cn("w-5xl mx-auto", className)}>{children}</div>
);
