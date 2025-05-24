"use client";

import { Section } from "@/components/shared/section";
import { GradientBackground } from "@/components/shared/gradient-background";
import { PromoBadge } from "@/components/shared/promo-badge";
import { Heading } from "@/components/shared/heading";
import { CTAButtons } from "@/components/shared/cta-buttons";
import { CompanyLogos } from "@/components/shared/company-logos";
import { InteractiveDemo } from "./interactive-demo";

function HeroHeadline() {
  return (
    <div className="space-y-5 max-w-[800px]">
      <Heading level={1} size="4xl" align="center" className="leading-[1.1]">
        Practice interviews with
        <span className="block text-green-900 mt-2">AI voice coaching</span>
      </Heading>
      <p className="mx-auto max-w-[600px] text-xl text-gray-500 leading-relaxed font-normal">
        Talk to Elevate like a real interviewer. Get instant feedback on your
        responses and learn how to improve your interview skills.
      </p>
    </div>
  );
}

export function Hero() {
  const ctaButtons = [
    {
      label: "Start free practice",
      href: "/interview",
    },
    {
      label: "See how it works",
      href: "#features",
      showArrow: true,
    },
  ];

  const companies = ["Google", "Amazon", "Microsoft", "Apple", "Meta"];

  return (
    <Section variant="hero" className="relative">
      <GradientBackground variant="hero" />

      <div className="flex flex-col items-center space-y-10 text-center">
        <PromoBadge href="/features">
          Now with AI-powered interview analysis
        </PromoBadge>

        <HeroHeadline />

        <CTAButtons buttons={ctaButtons} />

        <div className="w-full flex justify-center md:mx-0">
          <InteractiveDemo />
        </div>

        <CompanyLogos companies={companies} className="mt-10" animated />
      </div>
    </Section>
  );
}
