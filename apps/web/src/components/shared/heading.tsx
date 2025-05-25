import { cn } from "@/lib/utils";
import { BaseComponentProps } from "@/types/components";
import { createElement } from "react";

interface HeadingProps extends BaseComponentProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  color?: "primary" | "secondary" | "accent" | "muted" | "success";
  align?: "left" | "center" | "right";
  gradient?: boolean;
  variant?: "default" | "section" | "hero" | "card";
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl md:text-4xl lg:text-5xl",
  "4xl": "text-4xl md:text-5xl lg:text-6xl",
  "5xl": "text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const colorClasses = {
  primary: "text-gray-900 dark:text-gray-50",
  secondary: "text-gray-700 dark:text-gray-300",
  accent: "text-green-900 dark:text-green-100",
  muted: "text-gray-500 dark:text-gray-400",
  success: "text-green-700 dark:text-green-300",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const variantClasses = {
  default: "tracking-tight leading-tight",
  section:
    "tracking-tight leading-[1.1] font-bold text-slate-900 dark:text-slate-100 [text-shadow:_0_1px_2px_rgba(0,0,0,0.1)] dark:[text-shadow:_0_1px_2px_rgba(255,255,255,0.1)]",
  hero: "tracking-tight leading-[1.05] font-extrabold text-slate-900 dark:text-slate-100",
  card: "tracking-tight leading-snug font-semibold text-slate-800 dark:text-slate-200",
};

export function Heading({
  children,
  className,
  level = 2,
  size = "2xl",
  weight = "bold",
  color = "primary",
  align = "left",
  gradient = false,
  variant = "default",
}: HeadingProps) {
  return createElement(
    `h${level}`,
    {
      className: cn(
        variantClasses[variant],
        sizeClasses[size],
        !gradient && colorClasses[color],
        alignClasses[align],
        gradient &&
          "bg-gradient-to-r from-gray-900 via-green-800 to-green-900 dark:from-gray-100 dark:via-green-300 dark:to-gray-100 bg-clip-text text-transparent",
        // Override weight only if not using a variant that sets it
        variant === "default" && weightClasses[weight],
        className,
      ),
    },
    children,
  );
}
