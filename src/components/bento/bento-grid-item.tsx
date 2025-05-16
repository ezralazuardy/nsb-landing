"use client";

import { cn } from "@/lib/utils";
import { BentoGridItemProps, BentoGridSize } from "./types";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function BentoGridItem({
  className,
  title,
  description,
  icon,
  image,
  size = "1x1",
  href,
  onClick,
  badge,
  footer,
  header,
  variant = "default",
}: BentoGridItemProps) {
  // Define the grid span based on the size
  const sizeClassMap: Record<BentoGridSize, string> = {
    "1x1": "col-span-1 row-span-1",
    "1x2": "col-span-1 row-span-2",
    "2x1": "col-span-1 md:col-span-2 row-span-1",
    "2x2": "col-span-1 md:col-span-2 row-span-2",
    "3x1": "col-span-1 md:col-span-3 row-span-1",
  };

  const sizeClass = sizeClassMap[size];

  // Create the content for the card
  const content = (
    <Card
      className={cn(
        "overflow-hidden group h-full transition-all duration-200 shadow-none border-gray-200 p-0 gap-0",
        variant === "featured" && "border-primary",
        className,
      )}
    >
      {header && <div className="p-4">{header}</div>}

      <CardHeader className="p-4 pb-0 flex items-start gap-2">
        {icon && (
          <div className="flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              {icon}
            </div>
          </div>
        )}
        {badge && (
          <Badge
            variant="outline"
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
          >
            {badge}
          </Badge>
        )}
        <div className="space-y-1">
          <h3 className="text-xl font-semibold leading-tight tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2 flex flex-col justify-between h-full w-full">
        <p className="text-muted-foreground line-clamp-3">{description}</p>

        {image && (
          <div className="relative mt-4 w-full overflow-hidden rounded-md h-max p-3">
            <Image
              src={image}
              alt={title}
              width={200}
              height={size === "3x1" ? 176 : 200}
              className={cn(
                "w-full transition-all group-hover:scale-105s",
                size === "3x1" && "h-52",
                size === "2x1" && "h-42",
              )}
            />
          </div>
        )}
      </CardContent>

      {footer && <CardFooter className="p-4 pt-0">{footer}</CardFooter>}
    </Card>
  );

  // If the card is a link, wrap it in a Link component
  if (href) {
    return (
      <div className={cn("group", sizeClass)}>
        <Link href={href} className="h-full block">
          {content}
        </Link>
      </div>
    );
  }

  // If the card has an onClick handler, make it a button
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn("text-left w-full h-full", sizeClass)}
      >
        {content}
      </button>
    );
  }

  // Otherwise, render it as a div
  return <div className={cn(sizeClass)}>{content}</div>;
}
