import { cn } from "@/lib/utils";
import { BaseComponentProps } from "@/types/components";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PromoBadgeProps extends BaseComponentProps {
  href?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  variant?: "primary" | "secondary" | "success" | "warning";
}

const variantClasses = {
  primary: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  secondary: "bg-gray-50 text-gray-600 hover:bg-gray-100",
  success: "bg-green-50 text-green-600 hover:bg-green-100",
  warning: "bg-amber-50 text-amber-600 hover:bg-amber-100",
};

export function PromoBadge({
  children,
  className,
  href,
  icon = "✨",
  showArrow = true,
  variant = "warning",
}: PromoBadgeProps) {
  const content = (
    <div
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium flex items-center transition-colors",
        variantClasses[variant],
        className,
      )}
    >
      {typeof icon === "string" ? icon : icon} {children}
      {showArrow && <ArrowRight className="ml-1 h-3 w-3" />}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
