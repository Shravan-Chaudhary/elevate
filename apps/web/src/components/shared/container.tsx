import { cn } from "@/lib/utils";
import { LayoutContainerProps } from "@/types/components";

const maxWidthClasses = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[90rem]",
  full: "max-w-full",
};

const paddingClasses = {
  none: "",
  sm: "px-2 md:px-4",
  md: "px-4 md:px-6",
  lg: "px-6 md:px-8",
};

export function Container({
  children,
  className,
  maxWidth = "lg",
  padding = "md",
}: LayoutContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
