"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { GradientBackground } from "@/components/shared/gradient-background";
import { PromoBadge } from "@/components/shared/promo-badge";
import { Heading } from "@/components/shared/heading";
import { Description } from "@/components/shared/description";
import { CTAButtons } from "@/components/shared/cta-buttons";
import { CompanyLogos } from "@/components/shared/company-logos";
import { InteractiveDemo } from "./interactive-demo";
import { fadeUp, stagger, smooth } from "@/lib/animations";

function HeroHeadline() {
  return (
    <motion.div className="space-y-5 max-w-[800px]" variants={fadeUp}>
      <Heading
        level={1}
        size="4xl"
        variant="hero"
        align="center"
        className="leading-[1.1]"
      >
        Practice interviews with
        <motion.span
          className="block text-green-900 mt-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: smooth, delay: 0.3 }}
        >
          AI voice coaching
        </motion.span>
      </Heading>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: smooth, delay: 0.5 }}
      >
        <Description variant="hero" size="lg" align="center" maxWidth="xl">
          Talk to Elevate like a real interviewer. Get instant feedback on your
          responses and learn how to improve your interview skills.
        </Description>
      </motion.div>
    </motion.div>
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

      <motion.div
        className="flex flex-col items-center space-y-10 text-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <PromoBadge href="/features">
            Now with AI-powered interview analysis
          </PromoBadge>
        </motion.div>

        <HeroHeadline />

        <motion.div variants={fadeUp}>
          <CTAButtons buttons={ctaButtons} />
        </motion.div>

        <motion.div
          className="w-full flex justify-center md:mx-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: smooth,
            delay: 1.2,
          }}
        >
          <InteractiveDemo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: smooth,
            delay: 1.6,
          }}
        >
          <CompanyLogos companies={companies} className="mt-10" animated />
        </motion.div>
      </motion.div>
    </Section>
  );
}
