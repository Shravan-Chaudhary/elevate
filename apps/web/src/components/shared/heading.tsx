import { cn } from "@/lib/utils";
import { BaseComponentProps } from "@/types/components";
import { createElement } from "react";

interface HeadingProps extends BaseComponentProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "primary" | "secondary" | "accent" | "muted";
  align?: "left" | "center" | "right";
  gradient?: boolean;
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl md:text-4xl lg:text-5xl",
  "4xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses = {
  primary: "text-gray-900",
  secondary: "text-gray-700",
  accent: "text-green-900",
  muted: "text-gray-500",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
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
}: HeadingProps) {
  return createElement(
    `h${level}`,
    {
      className: cn(
        "tracking-tight leading-tight",
        sizeClasses[size],
        weightClasses[weight],
        !gradient && colorClasses[color],
        alignClasses[align],
        gradient &&
          "bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent",
        className,
      ),
    },
    children,
  );
}
