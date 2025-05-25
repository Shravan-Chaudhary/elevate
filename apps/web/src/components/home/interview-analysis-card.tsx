"use client";

import { FC, useState, useEffect, useRef } from "react";
import { BarChart, CheckCircle } from "lucide-react";
import { MetricBar } from "@/components/shared/metric-bar";
import { IconContainer } from "@/components/shared/icon-container";
import { GradientBackground } from "@/components/shared/gradient-background";
import { MetricData } from "@/types/components";

interface ImprovementItemProps {
  text: string;
}

const ImprovementItem: FC<ImprovementItemProps> = ({ text }) => (
  <li className="flex items-start text-sm">
    <IconContainer
      size="sm"
      variant="solid"
      color="success"
      className="flex-shrink-0 mr-2 mt-0.5"
    >
      <CheckCircle className="h-3 w-3" />
    </IconContainer>
    <span className="text-gray-700">{text}</span>
  </li>
);

const InterviewAnalysisCard: FC = () => {
  const [metricsVisible, setMetricsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const metrics: MetricData[] = [
    {
      label: "Communication clarity",
      value: "85%",
      percentage: 85,
      color: "green",
    },
    {
      label: "Technical accuracy",
      value: "92%",
      percentage: 92,
      color: "green",
    },
    {
      label: "Answer structure",
      value: "68%",
      percentage: 68,
      color: "amber",
    },
  ];

  const improvements = [
    "Use the STAR method for behavioral questions",
    'Reduce filler words ("um", "like")',
    "Include more quantifiable achievements",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && !metricsVisible) {
          setMetricsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "-50px",
        threshold: 0.6,
      },
    );

    const currentCardRef = cardRef.current;

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [metricsVisible]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative"
    >
      <GradientBackground
        variant="card"
        className="absolute inset-0 rounded-xl"
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center mb-4">
          <IconContainer
            size="md"
            variant="solid"
            color="primary"
            className="mr-3"
          >
            <BarChart className="h-5 w-5" />
          </IconContainer>
          <div>
            <div className="font-semibold text-gray-900">
              Interview Analysis
            </div>
            <div className="text-xs text-gray-500">
              Software Engineer • Today
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-5">
          {metrics.map((metric, index) => (
            <MetricBar
              key={metric.label}
              metric={metric}
              isVisible={metricsVisible}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Improvement Suggestions */}
        <div className="mt-6 pt-5 border-t border-gray-100">
          <h5 className="text-sm font-semibold text-gray-900 mb-3">
            Improvement suggestions
          </h5>
          <ul className="space-y-2">
            {improvements.map((improvement, index) => (
              <ImprovementItem key={index} text={improvement} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InterviewAnalysisCard;
