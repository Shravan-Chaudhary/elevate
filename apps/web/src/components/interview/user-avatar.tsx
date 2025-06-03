"use client";

import { FC } from "react";

interface UserAvatarProps {
  speaking: boolean;
}

const UserAvatar: FC<UserAvatarProps> = ({ speaking }) => (
  <div
    className={`relative transition-all duration-300 ${
      speaking ? "scale-105" : "scale-100"
    }`}
  >
    <div
      className={`absolute inset-0 bg-blue-400/20 rounded-full blur-xl transition-opacity duration-300 ${
        speaking ? "opacity-100" : "opacity-0"
      }`}
    ></div>
    <div
      className={`h-24 w-24 rounded-full bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center text-white overflow-hidden shadow-lg ${
        speaking ? "ring-4 ring-blue-300/50" : ""
      }`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient
            id="userPlaceholder"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {/* Simple placeholder circle */}
        <circle cx="50" cy="50" r="35" fill="url(#userPlaceholder)" />

        {/* User icon - simple person silhouette */}
        <g fill="white">
          {/* Head */}
          <circle cx="50" cy="40" r="8" />

          {/* Body */}
          <path d="M50 50 C42 50 36 56 36 64 L36 70 L64 70 L64 64 C64 56 58 50 50 50 Z" />
        </g>

        {/* Speaking indicator */}
        {speaking && (
          <g className="animate-pulse" style={{ animationDuration: "1.5s" }}>
            <circle cx="75" cy="30" r="2" fill="white" opacity="0.8" />
            <circle cx="80" cy="25" r="1.5" fill="white" opacity="0.6" />
            <circle cx="78" cy="35" r="1" fill="white" opacity="0.7" />
          </g>
        )}
      </svg>
    </div>
  </div>
);

export default UserAvatar;
