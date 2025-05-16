import { DivideIcon as LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type BentoGridSize = "1x1" | "1x2" | "2x1" | "2x2" | "3x1";

export interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export interface BentoGridItemProps {
  className?: string;
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  size?: BentoGridSize;
  href?: string;
  onClick?: () => void;
  badge?: string;
  footer?: ReactNode;
  header?: ReactNode;
  variant?: "default" | "featured";
}
