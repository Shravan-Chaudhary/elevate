"use client";

import { FC } from "react";

interface SoundWaveProps {
  isActive: boolean;
  color: string;
}

const SoundWave: FC<SoundWaveProps> = ({ isActive, color }) => {
  // Use fixed number and heights for the bars
  const barHeights = [4, 12, 6, 16, 8, 14, 5, 18, 7, 10];

  return (
    <div
      className={`flex items-end h-8 space-x-1 ${
        isActive ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      {barHeights.map((height, i) => (
        <div
          key={i}
          className={`w-1 rounded-full ${color} transition-all duration-300`}
          style={{
            height: isActive ? `${height}px` : "2px",
            transform: `scaleY(${isActive ? "1" : "0.2"})`,
            transformOrigin: "bottom",
            animationName: isActive ? "soundBarPulse" : "none",
            animationDuration: `${0.7 + (i % 4) * 0.3}s`,
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationDelay: `${i * 0.06}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SoundWave;
