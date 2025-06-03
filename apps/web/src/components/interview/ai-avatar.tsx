"use client";

import { FC } from "react";

interface AIAvatarProps {
  speaking: boolean;
}

const AIAvatar: FC<AIAvatarProps> = ({ speaking }) => (
  <div
    className={`relative transition-all duration-300 ${
      speaking ? "scale-105" : "scale-100"
    }`}
  >
    <div
      className={`absolute inset-0 bg-green-400/20 rounded-full blur-xl transition-opacity duration-300 ${
        speaking ? "opacity-100" : "opacity-0"
      }`}
    ></div>
    <div
      className={`h-24 w-24 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white overflow-hidden shadow-lg ${
        speaking ? "ring-4 ring-emerald-300/50" : ""
      }`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="robotBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="robotScreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ecfccb" />
            <stop offset="100%" stopColor="#d9f99d" />
          </linearGradient>
        </defs>

        {/* Robot body/head */}
        <rect
          x="20"
          y="25"
          width="60"
          height="50"
          rx="12"
          fill="url(#robotBody)"
        />

        {/* Screen/face area */}
        <rect
          x="25"
          y="30"
          width="50"
          height="35"
          rx="8"
          fill="url(#robotScreen)"
          stroke="#16a34a"
          strokeWidth="1"
        />

        {/* Eyes - LED style */}
        <g
          className={speaking ? "animate-pulse" : ""}
          style={{ animationDuration: "1.5s" }}
        >
          <circle cx="38" cy="42" r="4" fill="#16a34a" />
          <circle cx="62" cy="42" r="4" fill="#16a34a" />
          <circle cx="38" cy="42" r="1.5" fill="#86efac" />
          <circle cx="62" cy="42" r="1.5" fill="#86efac" />
        </g>

        {/* Mouth - digital display */}
        <rect
          x="35"
          y="52"
          width="30"
          height="6"
          rx="3"
          fill="#16a34a"
          className={speaking ? "animate-pulse" : ""}
        />

        {/* Antenna */}
        <rect x="48" y="15" width="4" height="12" fill="#16a34a" />
        <circle cx="50" cy="12" r="3" fill="#22c55e">
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Side panels */}
        <rect x="15" y="35" width="8" height="20" rx="2" fill="#059669" />
        <rect x="77" y="35" width="8" height="20" rx="2" fill="#059669" />

        {/* Audio indicators when speaking */}
        {speaking && (
          <g className="animate-pulse" style={{ animationDuration: "1s" }}>
            <rect x="10" y="38" width="2" height="4" fill="#22c55e" />
            <rect x="10" y="44" width="2" height="6" fill="#22c55e" />
            <rect x="10" y="52" width="2" height="4" fill="#22c55e" />

            <rect x="88" y="38" width="2" height="4" fill="#22c55e" />
            <rect x="88" y="44" width="2" height="6" fill="#22c55e" />
            <rect x="88" y="52" width="2" height="4" fill="#22c55e" />
          </g>
        )}
      </svg>
    </div>
  </div>
);

export default AIAvatar;
