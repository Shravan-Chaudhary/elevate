import { cn } from "@/lib/utils";
import { BaseComponentProps } from "@/types/components";
import { Container } from "./container";

interface SectionProps extends BaseComponentProps {
  variant?: "hero" | "default" | "feature" | "compact";
  background?: "transparent" | "subtle" | "white";
  containerMaxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  id?: string;
}

const variantClasses = {
  hero: "pt-28 md:pt-36 pb-16 md:pb-20",
  default: "py-16 md:py-24",
  feature: "py-12 md:py-16",
  compact: "py-8 md:py-12",
};

const backgroundClasses = {
  transparent: "",
  subtle: "bg-gray-50/30",
  white: "bg-white",
};

export function Section({
  children,
  className,
  variant = "default",
  background = "transparent",
  containerMaxWidth = "lg",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        variantClasses[variant],
        backgroundClasses[background],
        className,
      )}
    >
      <Container maxWidth={containerMaxWidth}>{children}</Container>
    </section>
  );
}
