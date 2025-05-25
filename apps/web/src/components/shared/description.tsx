import { cn } from "@/lib/utils";
import { BaseComponentProps } from "@/types/components";

interface DescriptionProps extends BaseComponentProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  color?: "primary" | "secondary" | "muted" | "accent";
  align?: "left" | "center" | "right";
  variant?: "default" | "section" | "hero" | "card" | "feature";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "none";
  leading?: "normal" | "relaxed" | "loose";
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

const colorClasses = {
  primary: "text-gray-700 dark:text-gray-300",
  secondary: "text-gray-600 dark:text-gray-400",
  muted: "text-gray-500 dark:text-gray-500",
  accent: "text-green-700 dark:text-green-300",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  none: "",
};

const leadingClasses = {
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose",
};

const variantClasses = {
  default: "font-normal",
  section: "font-medium leading-relaxed",
  hero: "font-normal leading-relaxed",
  card: "font-normal leading-snug",
  feature: "font-medium leading-relaxed",
};

export function Description({
  children,
  className,
  size = "lg",
  color = "secondary",
  align = "left",
  variant = "section",
  maxWidth = "2xl",
  leading = "relaxed",
}: DescriptionProps) {
  return (
    <p
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        colorClasses[color],
        alignClasses[align],
        maxWidthClasses[maxWidth],
        leadingClasses[leading],
        // Center max-width containers when center-aligned
        align === "center" && maxWidth !== "none" && "mx-auto",
        className,
      )}
    >
      {children}
    </p>
  );
}
