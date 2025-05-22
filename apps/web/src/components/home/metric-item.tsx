"use client";

import { FC } from "react";

interface MetricItemProps {
  label: string;
  value: string;
  valueColorClass: string; // e.g., 'text-green-700', 'text-amber-600'
  barColorClass: string; // e.g., 'bg-green-500', 'bg-amber-500'
  barWidth: string; // e.g., '85%', '92%'
  animationDelay: string; // e.g., '300ms'
}

const MetricItem: FC<MetricItemProps> = ({
  label,
  value,
  valueColorClass,
  barColorClass,
  barWidth,
  animationDelay,
}) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm font-medium text-gray-700">{label}</div>
      <div className={`text-sm font-medium ${valueColorClass}`}>{value}</div>
    </div>
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className={`h-full ${barColorClass} rounded-full animate-slide-right`}
        style={{ width: barWidth, animationDelay: animationDelay }}
      ></div>
    </div>
  </div>
);

export default MetricItem;
