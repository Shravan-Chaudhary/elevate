import { cn } from "@/lib/utils";
import { BaseComponentProps } from "@/types/components";

interface GradientBackgroundProps extends BaseComponentProps {
  variant?: "hero" | "section" | "card";
  animated?: boolean;
}

export function GradientBackground({
  className,
  variant = "section",
  animated = false,
  children,
}: GradientBackgroundProps) {
  const variants = {
    hero: "absolute inset-0 -z-10 overflow-hidden",
    section: "absolute inset-0 -z-10",
    card: "absolute inset-0 -z-10 rounded-xl",
  };

  return (
    <div className={cn(variants[variant], className)}>
      {variant === "hero" && (
        <>
          <div className="absolute left-[50%] top-0 h-[1000px] w-[1000px] -translate-x-[50%] -translate-y-[10%] [mask-image:radial-gradient(closest-side,white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-50" />
          </div>
          <div className="absolute -right-[10%] top-[30%] h-[300px] w-[300px] rounded-full bg-green-200/20 blur-3xl"></div>
          <div className="absolute -left-[5%] top-[60%] h-[250px] w-[250px] rounded-full bg-emerald-200/30 blur-3xl"></div>
          <div className='absolute -z-10 inset-0 bg-[url("/grid-pattern.svg")] bg-center opacity-10'></div>
          <div className="absolute w-full h-2 bottom-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0"></div>
        </>
      )}
      {variant === "section" && (
        <div className="bg-gradient-to-br from-gray-50/30 to-emerald-50/30 opacity-50" />
      )}
      {variant === "card" && (
        <div className="bg-gradient-to-br from-green-50/30 to-emerald-50/30" />
      )}
      {children}
    </div>
  );
}
