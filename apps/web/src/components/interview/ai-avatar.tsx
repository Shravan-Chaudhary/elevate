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
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[90%] h-[90%]"
      >
        {/* Background */}
        <circle cx="100" cy="100" r="80" fill="rgba(255,255,255,0.1)" />

        {/* Neck */}
        <path
          d="M82 140C82 140 82 160 100 160C118 160 118 140 118 140"
          fill="#b1dcd6"
        />

        {/* Face */}
        <ellipse
          cx="100"
          cy="90"
          rx="35"
          ry="40"
          fill="#dcfce7"
          stroke="#dcfce7"
          strokeWidth="1"
        />

        {/* Hair */}
        <path
          d="M65 85C65 65 75 45 100 45C125 45 135 65 135 85"
          fill="#065f46"
        />
        <path
          d="M65 85C65 65 75 45 100 45C125 45 135 65 135 85"
          stroke="#065f46"
          strokeWidth="1"
        />
        <path
          d="M65 85C65 85 65 75 60 65C55 55 67 52 70 60C73 68 65 85 65 85Z"
          fill="#065f46"
          stroke="#065f46"
          strokeWidth="1"
        />
        <path
          d="M135 85C135 85 135 75 140 65C145 55 133 52 130 60C127 68 135 85 135 85Z"
          fill="#065f46"
          stroke="#065f46"
          strokeWidth="1"
        />

        {/* Ears */}
        <ellipse cx="65" cy="90" rx="5" ry="10" fill="#dcfce7" />
        <ellipse cx="135" cy="90" rx="5" ry="10" fill="#dcfce7" />

        {/* Headset */}
        <path
          d="M65 90C65 90 55 85 55 90C55 95 55 100 60 100C65 100 65 95 65 90Z"
          fill="#059669"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M135 90C135 90 145 85 145 90C145 95 145 100 140 100C135 100 135 95 135 90Z"
          fill="#059669"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M65 80C65 80 75 55 100 55C125 55 135 80 135 80"
          stroke="#059669"
          strokeWidth="3"
        />

        {/* Eyes */}
        <g
          className={speaking ? "animate-pulse" : ""}
          style={{ animationDuration: "3s" }}
        >
          <ellipse cx="85" cy="85" rx="7" ry="8" fill="white" />
          <ellipse cx="115" cy="85" rx="7" ry="8" fill="white" />
          <circle cx="85" cy="85" r="3.5" fill="#065f46" />
          <circle cx="115" cy="85" r="3.5" fill="#065f46" />
          {/* Eye shine */}
          <circle cx="86.5" cy="83.5" r="1.5" fill="white" />
          <circle cx="116.5" cy="83.5" r="1.5" fill="white" />
        </g>

        {/* Eyebrows */}
        <path
          d="M78 75C78 75 82 72 88 75"
          stroke="#065f46"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M122 75C122 75 118 72 112 75"
          stroke="#065f46"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Glasses */}
        <rect
          x="75"
          y="80"
          width="20"
          height="12"
          rx="6"
          stroke="#10b981"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="105"
          y="80"
          width="20"
          height="12"
          rx="6"
          stroke="#10b981"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="95"
          y1="86"
          x2="105"
          y2="86"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        {/* Smile/Mouth */}
        <path
          className={speaking ? "animate-pulse" : ""}
          d="M85 105C85 105 90 115 100 115C110 115 115 105 115 105"
          stroke="#065f46"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Blush */}
        <circle cx="75" cy="100" r="5" fill="#fecaca" opacity="0.5" />
        <circle cx="125" cy="100" r="5" fill="#fecaca" opacity="0.5" />

        {/* Collared shirt */}
        <path d="M82 140L86 150H100H114L118 140" fill="#047857" />
        <path d="M100 150V160" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  </div>
);

export default AIAvatar;
