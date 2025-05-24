import { cn } from "@/lib/utils";
import { MetricData, AnimationProps } from "@/types/components";

interface MetricBarProps extends AnimationProps {
  metric: MetricData;
  isVisible?: boolean;
}

const colorClasses = {
  green: {
    text: "text-green-700",
    bar: "bg-green-500",
  },
  amber: {
    text: "text-amber-600",
    bar: "bg-amber-500",
  },
  red: {
    text: "text-red-600",
    bar: "bg-red-500",
  },
  blue: {
    text: "text-blue-600",
    bar: "bg-blue-500",
  },
};

export function MetricBar({
  metric,
  isVisible = true,
  delay = 0,
  duration = 1000,
  className,
}: MetricBarProps) {
  const colors = colorClasses[metric.color];

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium text-gray-700">{metric.label}</div>
        <div className={cn("text-sm font-medium", colors.text)}>
          {metric.value}
        </div>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all ease-in-out",
            colors.bar,
            isVisible ? "opacity-100" : "opacity-0",
          )}
          style={{
            width: isVisible ? `${metric.percentage}%` : "0%",
            transitionDelay: `${delay}ms`,
            transitionDuration: `${duration}ms`,
          }}
        />
      </div>
    </div>
  );
}
