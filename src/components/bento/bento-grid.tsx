"use client";

import { cn } from "@/lib/utils";
import { BentoGridProps } from "./types";

export function BentoGrid({ 
  children, 
  className 
}: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto",
        className
      )}
    >
      {children}
    </div>
  );
}