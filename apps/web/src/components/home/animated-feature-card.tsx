"use client";

import { FC, useState, useEffect, ReactNode } from "react";
import { Mic } from "lucide-react";

interface AnimatedFeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode; // Make icon a prop for reusability
  // Add more generic props if needed for other feature types
}

// Renamed component
const AnimatedFeatureCard: FC<AnimatedFeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  // State to hold randomly generated values for hydration safety
  const [barStyles, setBarStyles] = useState<
    {
      height: string;
      animationDuration: string;
      animationDelay: string;
    }[]
  >([]);

  const [cardStyle, setCardStyle] = useState<{ transform?: string }>({});

  useEffect(() => {
    // Generate random styles only on the client side after mount
    const generatedStyles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
      (i) => ({
        height: `${Math.floor(Math.random() * 20) + 10}px`,
        width: "4px",
        animationDuration: `${0.8 + Math.random() * 0.7}s`,
        animationDelay: `${i * 50}ms`,
      }),
    );
    setBarStyles(generatedStyles);

    // Generate random slight transformations on the client side for variation
    const translateY = Math.random() * 10 - 5; // -5px to 5px
    const rotate = Math.random() * 4 - 2; // -2deg to 2deg
    setCardStyle({
      transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
    });
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div
      className="relative rounded-lg border bg-card p-6 shadow-sm transition-transform duration-300 hover:scale-105 animated-feature-card"
      style={cardStyle} // Apply the random style here
    >
      <div className="bg-gradient-to-br from-indigo-50/30 to-blue-50/30 absolute inset-0 rounded-xl"></div>

      <div className="relative">
        <div className="flex items-start">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
            {/* Use icon prop if provided, fallback to Mic or remove fallback */}
            {icon ? icon : <Mic className="h-4 w-4 text-indigo-700" />}
          </div>
          <div>
            {/* Use title prop */}
            <div className="font-semibold text-gray-900 mb-1">{title}</div>
            {/* Use description prop */}
            <div className="text-sm text-gray-700">{description}</div>
          </div>
        </div>

        <div className="mt-4 flex space-x-1 justify-center items-end py-2">
          {/* Use the state variable for mapping */}
          {/* This animated bar section could also be a separate component if needed elsewhere */}
          {barStyles.map((style, i) => (
            <div
              key={i}
              className="animate-bounce bg-gradient-to-t from-indigo-600 to-blue-400 rounded-full"
              style={style}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Define the keyframes for the subtle floating animation
const style = document.createElement("style");
style.innerHTML = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }
  .animated-feature-card {
    animation: float 3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default AnimatedFeatureCard;
