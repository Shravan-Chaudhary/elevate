import { cn } from "@/lib/utils";
import { BaseComponentProps } from "@/types/components";

interface IconContainerProps extends BaseComponentProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "ghost";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  animated?: boolean;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

const variantClasses = {
  solid: {
    primary: "bg-green-100 text-green-700",
    secondary: "bg-gray-100 text-gray-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-red-100 text-red-700",
  },
  outline: {
    primary: "border-2 border-green-200 text-green-700 bg-white",
    secondary: "border-2 border-gray-200 text-gray-700 bg-white",
    success: "border-2 border-emerald-200 text-emerald-700 bg-white",
    warning: "border-2 border-amber-200 text-amber-700 bg-white",
    danger: "border-2 border-red-200 text-red-700 bg-white",
  },
  ghost: {
    primary: "text-green-700 hover:bg-green-50",
    secondary: "text-gray-700 hover:bg-gray-50",
    success: "text-emerald-700 hover:bg-emerald-50",
    warning: "text-amber-700 hover:bg-amber-50",
    danger: "text-red-700 hover:bg-red-50",
  },
};

export function IconContainer({
  children,
  className,
  size = "md",
  variant = "solid",
  color = "primary",
  animated = false,
}: IconContainerProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center transition-all",
        sizeClasses[size],
        variantClasses[variant][color],
        animated && "hover:scale-110 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
