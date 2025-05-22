"use client";

import { FC, ReactNode } from "react";

interface InfoBadgeProps {
  icon?: ReactNode; // Optional icon
  text: string;
  colorClass?: string; // Optional class for background/text color
}

const InfoBadge: FC<InfoBadgeProps> = ({ icon, text, colorClass }) => (
  <div
    className={`inline-flex items-center px-3 py-1 rounded-full ${
      colorClass || "bg-gray-100 border border-gray-200 text-gray-700"
    }`}
  >
    {icon && <span className="mr-2">{icon}</span>}{" "}
    {/* Render icon if provided */}
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default InfoBadge;
