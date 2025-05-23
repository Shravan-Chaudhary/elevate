"use client";

import { FC, useState, useEffect, useRef } from "react";
import { BarChart, CheckCircle } from "lucide-react";
import styles from "./interview-analysis-card.module.css";

const InterviewAnalysisCard: FC = () => {
  const [barsVisible, setBarsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the card is in view and bars haven't been made visible yet
        if (entry && entry.isIntersecting && !barsVisible) {
          setBarsVisible(true);
        }
      },
      {
        // Options for the observer
        root: null, // observing relative to the viewport
        rootMargin: "0px",
        threshold: 0.95, // Trigger when 95% of the card is visible
      },
    );

    const currentCardRef = cardRef.current;

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div
      ref={cardRef} // Attach the ref to the main container
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative"
    >
      <div className="bg-gradient-to-br from-green-50/30 to-emerald-50/30 absolute inset-0 rounded-xl"></div>

      <div className="relative">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <BarChart className="h-5 w-5 text-green-700" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">
              Interview Analysis
            </div>
            <div className="text-xs text-gray-500">
              Software Engineer • Today
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {/* TODO: Replace with reusable metric item component if needed elsewhere */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium text-gray-700">
                Communication clarity
              </div>
              <div className="text-sm font-medium text-green-700">85%</div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-green-500 rounded-full ease-in-out ${
                  styles["bar-initial"]
                } ${barsVisible ? styles["bar-fill-85"] : ""}`}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium text-gray-700">
                Technical accuracy
              </div>
              <div className="text-sm font-medium text-green-700">92%</div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-green-500 rounded-full ease-in-out ${
                  styles["bar-initial"]
                } ${barsVisible ? styles["bar-fill-92"] : ""}`}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium text-gray-700">
                Answer structure
              </div>
              <div className="text-sm font-medium text-amber-600">68%</div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-amber-500 rounded-full ease-in-out ${
                  styles["bar-initial"]
                } ${barsVisible ? styles["bar-fill-68"] : ""}`}
              ></div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-gray-100">
          <h5 className="text-sm font-semibold text-gray-900 mb-3">
            Improvement suggestions
          </h5>
          <ul className="space-y-2">
            <li className="flex items-start text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                <CheckCircle className="h-3 w-3 text-green-700" />
              </div>
              <span className="text-gray-700">
                Use the STAR method for behavioral questions
              </span>
            </li>
            <li className="flex items-start text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                <CheckCircle className="h-3 w-3 text-green-700" />
              </div>
              <span className="text-gray-700">
                Reduce filler words (&quot;um&quot;, &quot;like&quot;)
              </span>
            </li>
            <li className="flex items-start text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                <CheckCircle className="h-3 w-3 text-green-700" />
              </div>
              <span className="text-gray-700">
                Include more quantifiable achievements
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InterviewAnalysisCard;
