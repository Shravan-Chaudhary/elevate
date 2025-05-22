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
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[90%] h-[90%]"
      >
        {/* Background */}
        <circle cx="100" cy="100" r="80" fill="rgba(255,255,255,0.1)" />

        {/* Neck */}
        <path
          d="M85 140C85 140 85 160 100 160C115 160 115 140 115 140"
          fill="#dbeafe"
        />

        {/* Face */}
        <ellipse
          cx="100"
          cy="90"
          rx="35"
          ry="40"
          fill="#eff6ff"
          stroke="#dbeafe"
          strokeWidth="1"
        />

        {/* Hair */}
        <path
          d="M65 75C65 55 80 40 100 40C120 40 135 60 135 85C135 85 130 70 100 70C70 70 65 75 65 75Z"
          fill="#1e40af"
        />
        <path d="M70 50C70 50 65 40 75 35C85 30 75 55 70 50Z" fill="#1e40af" />
        <path
          d="M60 85C60 75 65 60 60 55C55 50 50 60 55 70C60 80 60 85 60 85Z"
          fill="#1e40af"
        />
        <path d="M65 85C65 85 65 60 70 50" stroke="#1e40af" strokeWidth="1" />

        {/* Ears */}
        <ellipse cx="65" cy="90" rx="5" ry="10" fill="#eff6ff" />
        <ellipse cx="135" cy="90" rx="5" ry="10" fill="#eff6ff" />

        {/* Eyes */}
        <g
          className={speaking ? "animate-pulse" : ""}
          style={{ animationDuration: "3s" }}
        >
          <ellipse cx="85" cy="85" rx="7" ry="8" fill="white" />
          <ellipse cx="115" cy="85" rx="7" ry="8" fill="white" />
          <circle cx="85" cy="85" r="3.5" fill="#1e3a8a" />
          <circle cx="115" cy="85" r="3.5" fill="#1e3a8a" />
          {/* Eye shine */}
          <circle cx="86.5" cy="83.5" r="1.5" fill="white" />
          <circle cx="116.5" cy="83.5" r="1.5" fill="white" />
        </g>

        {/* Eyebrows */}
        <path
          d="M78 75C78 75 82 72 88 75"
          stroke="#1e3a8a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M122 75C122 75 118 72 112 75"
          stroke="#1e3a8a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Smile/Mouth */}
        <path
          className={speaking ? "animate-pulse" : ""}
          d="M85 105C85 105 90 115 100 115C110 115 115 105 115 105"
          stroke="#1e3a8a"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Blush */}
        <circle cx="75" cy="100" r="5" fill="#fecaca" opacity="0.5" />
        <circle cx="125" cy="100" r="5" fill="#fecaca" opacity="0.5" />

        {/* Shirt collar */}
        <path d="M85 140L88 150H100H112L115 140" fill="#3b82f6" />
        <path d="M95 150L100 160L105 150" stroke="white" strokeWidth="1.5" />
      </svg>
    </div>
  </div>
);

export default UserAvatar;
