import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type MarketingContainerProps = ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
};

export const MarketingContainer = ({
  children,
  className,
}: MarketingContainerProps) => (
  <div className={cn("max-w-2xl mx-auto", className)}>{children}</div>
);
