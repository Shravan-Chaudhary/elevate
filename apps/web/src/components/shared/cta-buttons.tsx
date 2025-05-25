import { Button } from "@/components/ui/button";
import { BaseComponentProps, ButtonVariantProps } from "@/types/components";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButton {
  label: string;
  href: string;
  variant?: ButtonVariantProps["variant"];
  icon?: React.ReactNode;
  showArrow?: boolean;
  external?: boolean;
}

interface CTAButtonsProps extends BaseComponentProps {
  buttons: CTAButton[];
  orientation?: "horizontal" | "vertical";
  size?: ButtonVariantProps["size"];
  animated?: boolean;
}

export function CTAButtons({
  buttons,
  className,
  orientation = "horizontal",
  size = "lg",
  animated = true,
}: CTAButtonsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        orientation === "vertical" ? "flex-col" : "flex-col sm:flex-row",
        className,
      )}
    >
      {buttons.map((button, index) => (
        <Link
          key={button.href}
          href={button.href}
          {...(button.external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          <Button
            size={size}
            variant={button.variant || (index === 0 ? "default" : "outline")}
            className={cn(
              "rounded-full px-8 font-medium text-base transition-all duration-300",
              index === 0 && "bg-green-900 hover:bg-green-800",
              index === 0 && size === "lg" && "h-12",
              index !== 0 && "border-gray-300 text-gray-700 hover:bg-gray-50",
              index !== 0 && size === "lg" && "h-12",
              animated &&
                "hover:shadow-lg hover:-translate-y-1 active:translate-y-0.5",
              animated && index === 0 && "hover:animate-hero-bounce-subtle",
            )}
          >
            {button.icon && <span className="mr-2">{button.icon}</span>}
            {button.label}
            {button.showArrow && (
              <ArrowRight
                className={cn(
                  "ml-2 h-4 w-4",
                  animated && "animate-hero-float-side",
                )}
              />
            )}
          </Button>
        </Link>
      ))}
    </div>
  );
}
