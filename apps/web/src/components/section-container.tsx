import { cn } from "@/lib/utils";
import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: "hero" | "section" | "loose" | "tight" | "none";
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  variant = "section",
}) => {
  const paddingClasses = {
    hero: "pt-28 md:pt-36 pb-16 md:pb-20",
    section: "py-16 md:py-24",
    loose: "py-12 md:py-16",
    tight: "py-8 md:py-12",
    none: "",
  };

  return (
    <div
      className={cn(
        "container max-w-6xl mx-auto px-4 md:px-6",
        paddingClasses[variant],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
