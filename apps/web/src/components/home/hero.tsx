"use client";

import PageWrapper from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { InteractiveDemo } from "./interactive-demo";

function FeatureBadge() {
  return (
    <Link href="/features" className="inline-block">
      <div className="rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-600 flex items-center hover:bg-amber-100 transition-colors">
        ✨ Now with AI-powered interview analysis
        <ArrowRight className="ml-1 h-3 w-3" />
      </div>
    </Link>
  );
}

// Headline and subheadline
function HeroHeadline() {
  return (
    <div className="space-y-5 max-w-[800px]">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-gray-900">
        Practice interviews with
        <span className="block text-green-900 mt-2">AI voice coaching</span>
      </h1>
      <p className="mx-auto max-w-[600px] text-xl text-gray-500 leading-relaxed font-normal">
        Talk to Elevate like a real interviewer. Get instant feedback on your
        responses and learn how to improve your interview skills.
      </p>
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <Link href={"/interview"}>
        <Button
          size="lg"
          className="rounded-full bg-green-900 hover:bg-green-800 px-8 h-12 font-medium text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0.5 hover:animate-hero-bounce-subtle"
        >
          Start free practice
        </Button>
      </Link>
      <Button
        variant="outline"
        size="lg"
        className="rounded-full px-8 h-12 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 text-base transition-all duration-300 hover:shadow-md hover:-translate-y-1 active:translate-y-0.5"
      >
        See how it works
        <ArrowRight className="ml-2 h-4 w-4 animate-hero-float-side" />
      </Button>
    </div>
  );
}

function TrustedBy() {
  const companies = ["Google", "Amazon", "Microsoft", "Apple", "Meta"];
  return (
    <div className="mt-10 text-center">
      <p className="text-sm text-gray-500 mb-5 uppercase tracking-wider font-medium">
        Trusted by job seekers from
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {companies.map((company) => (
          <div key={company} className="text-gray-400 font-medium">
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <PageWrapper>
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[1000px] w-[1000px] -translate-x-[50%] -translate-y-[10%] [mask-image:radial-gradient(closest-side,white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-50" />
        </div>
        <div className="absolute -right-[10%] top-[30%] h-[300px] w-[300px] rounded-full bg-green-200/20 blur-3xl"></div>
        <div className="absolute -left-[5%] top-[60%] h-[250px] w-[250px] rounded-full bg-emerald-200/30 blur-3xl"></div>
        <div className='absolute -z-10 inset-0 bg-[url("/grid-pattern.svg")] bg-center opacity-10'></div>
        <div className="absolute w-full h-2 bottom-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0"></div>
      </div>
      <div className="container max-w-6xl mx-auto px-4 md:px-6 pt-22">
        <div className="flex flex-col items-center space-y-10 text-center">
          <FeatureBadge />
          <HeroHeadline />
          <CTAButtons />
          <div className="w-full flex justify-center mx-2 md:mx-0">
            <InteractiveDemo />
          </div>
          <TrustedBy />
        </div>
      </div>
    </PageWrapper>
  );
}
