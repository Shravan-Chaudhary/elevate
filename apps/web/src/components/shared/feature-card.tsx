import { cn } from "@/lib/utils";
import { FeatureItem, BaseComponentProps } from "@/types/components";
import { IconContainer } from "../shared/icon-container";
import { Heading } from "./heading";
import { Description } from "./description";

interface FeatureCardProps extends BaseComponentProps {
  feature: FeatureItem;
  index?: number;
  layout?: "horizontal" | "vertical";
  animated?: boolean;
}

export function FeatureCard({
  feature,
  className,
  index = 0,
  layout = "horizontal",
  animated = true,
}: FeatureCardProps) {
  const isEven = index % 2 === 0;

  if (layout === "vertical") {
    return (
      <div
        className={cn(
          "relative group p-6 rounded-xl bg-white border border-gray-100 shadow-sm",
          animated &&
            "hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
          className,
        )}
      >
        {animated && (
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600/15 to-emerald-600/15 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
        )}

        <div className="relative space-y-4">
          <IconContainer size="lg" animated={animated}>
            {feature.icon}
          </IconContainer>

          <div className="space-y-2">
            <Heading
              level={3}
              size="xl"
              variant="card"
              className="text-gray-900"
            >
              {feature.title}
            </Heading>
            <Description variant="card" size="md" className="text-gray-600">
              {feature.description}
            </Description>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative group",
        layout === "horizontal" && (isEven ? "md:text-right" : "md:text-left"),
        className,
      )}
    >
      {animated && (
        <div className="w-full h-full absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-600/15 to-emerald-600/15 opacity-30 blur-lg group-hover:opacity-50 transition-all duration-500 group-hover:duration-200" />
      )}

      <div className="relative grid gap-6 items-center md:grid-cols-5 p-6">
        <div
          className={cn(
            "flex justify-center md:col-span-1",
            isEven && "md:order-last",
          )}
        >
          <div className="relative">
            <div className="p-4 rounded-full bg-gradient-to-br from-emerald-600/60 to-emerald-800/60 shadow-sm shadow-emerald-900/15">
              {feature.icon}
            </div>
            {animated && (
              <div className="absolute -inset-4 bg-green-600/10 rounded-full blur-xl animate-pulse opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
            )}
          </div>
        </div>

        <div className="md:col-span-4 space-y-3">
          <Heading
            level={3}
            size="2xl"
            variant="card"
            weight="bold"
            className="text-gray-900"
          >
            {feature.title}
          </Heading>
          <Description variant="feature" size="md" className="text-gray-600">
            {feature.description}
          </Description>
        </div>
      </div>
    </div>
  );
}
