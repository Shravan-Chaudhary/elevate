import InterviewAnalysisCard from "@/components/home/interview-analysis-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Clock, Mic } from "lucide-react";
// Import MetricItem and PerformanceInsightsBadge here if needed for reference, but they won't be used in the JSX
// import MetricItem from '@/components/home/metric-item';
// import PerformanceInsightsBadge from '@/components/home/performance-insights-badge';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function Feature({ title, description, icon, index }: FeatureProps) {
  return (
    <div
      className={`relative group ${
        index % 2 === 0 ? "md:text-right" : "md:text-left"
      }`}
    >
      <div className="w-full h-full absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-600/15 to-emerald-600/15 opacity-30 blur-lg group-hover:opacity-50 transition-all duration-500 group-hover:duration-200"></div>

      <div className={`relative grid gap-6 items-center md:grid-cols-5 p-6`}>
        <div
          className={`flex justify-center md:col-span-1 ${
            index % 2 === 0 ? "md:order-last" : ""
          }`}
        >
          <div className="relative">
            <div className="p-4 rounded-full bg-gradient-to-br from-emerald-600/60 to-emerald-800/60 shadow-sm shadow-emerald-900/15">
              {icon}
            </div>
            <div className="absolute -inset-4 bg-green-600/10 rounded-full blur-xl animate-pulse opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-3">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const features = [
    {
      title: "Voice-Based AI Interviews",
      description:
        "Talk to our AI interviewer naturally, as you would in a real interview. Elevate listens to your responses and provides personalized feedback to help you improve with each practice session.",
      icon: <Mic className="h-8 w-8 text-white" />,
    },
    {
      title: "In-Depth Communication Analysis",
      description:
        "Our AI analyzes your verbal communication style, including pace, tone, filler words, and content relevance. Get actionable insights on how to make your answers more impactful and memorable.",
      icon: <BarChart className="h-8 w-8 text-white" />,
    },
    {
      title: "Practice Anytime, Anywhere",
      description:
        "Prepare for your interviews whenever it works for you. Access unlimited practice sessions from any device, allowing you to refine your skills at your own pace and on your own schedule.",
      icon: <Clock className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <>
      <section className="relative py-28 overflow-hidden" id="features">
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-[50rem] h-[50rem] rounded-full bg-green-800/5 -top-[10rem] -left-[15rem] blur-3xl"></div>
          <div className="absolute w-[50rem] h-[30rem] rounded-full bg-emerald-800/5 top-[20rem] -right-[15rem] blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-2 md:px-6">
          <div className="flex flex-col items-center max-w-3xl mx-auto mb-20 text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Innovative tools to help you
              <span className="relative inline-block ml-2">
                <span className="relative z-10">master interviews</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-green-200/60 -z-10 rounded"></span>
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Our platform combines cutting-edge AI technology with proven
              interview techniques to help you prepare, practice, and perfect
              your interview skills.
            </p>
          </div>

          <div className="space-y-12 md:space-y-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Feature {...feature} index={index} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Button className="rounded-full bg-green-900 hover:bg-green-800 px-8 py-7 h-auto text-white font-medium text-lg cursor-pointer shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 transition-all">
              Start practicing now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section
        className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
        id="analytics"
      >
        <div className="container max-w-6xl mx-auto px-2 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-900 mb-6">
              Why choose us?
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              Our platform offers unique advantages for interview preparation.
              Leverage AI-powered analysis, flexible practice schedules, and
              actionable feedback to boost your confidence and performance.
              Prepare smarter, not just harder, with Elevate.
            </p>
          </div>

          <div className="relative z-10 flex justify-center md:justify-end">
            <div className="absolute inset-0 -z-10"></div>

            <div className="w-full max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <InterviewAnalysisCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
