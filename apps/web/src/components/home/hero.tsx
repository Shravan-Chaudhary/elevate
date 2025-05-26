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
    <motion.div className="space-y-8 max-w-4xl mx-auto" variants={fadeUp}>
      <Heading
        level={1}
        size="4xl"
        variant="hero"
        align="center"
        className="leading-[1.08] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
      >
        Practice interviews with
        <motion.span
          className="block text-green-700 mt-3 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: smooth, delay: 0.3 }}
        >
          AI voice coaching
        </motion.span>
      </Heading>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: smooth, delay: 0.5 }}
      >
        <Description
          variant="hero"
          size="lg"
          align="center"
          className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium"
        >
          Talk to Elevate like a real interviewer. Get instant feedback on your
          responses and learn how to improve your interview skills with
          personalized AI coaching.
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
    <Section
      variant="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-200/10 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-indigo-200/10 rounded-full blur-2xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-green-300/20 to-teal-200/10 rounded-full blur-2xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </div>

      <motion.div
        className="flex flex-col items-center space-y-12 text-center w-full"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} className="mt-8">
          <PromoBadge
            href="/features"
            className="bg-gradient-to-r from-green-100 to-blue-100 border-green-200/50 text-green-800 hover:from-green-200 hover:to-blue-200 transition-all duration-300 shadow-sm"
          >
            ✨ Now with AI-powered interview analysis
          </PromoBadge>
        </motion.div>

        <HeroHeadline />

        <motion.div variants={fadeUp} className="pt-4">
          <CTAButtons buttons={ctaButtons} />
        </motion.div>

        <motion.div
          className="w-full flex justify-center pt-8"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: smooth,
            delay: 1.2,
          }}
        >
          <div className="relative">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-3xl rounded-3xl" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-1 shadow-2xl border border-gray-200/50">
              <InteractiveDemo />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="pt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: smooth,
            delay: 1.8,
          }}
        >
          <CompanyLogos
            companies={companies}
            className="opacity-70 hover:opacity-100 transition-opacity duration-500"
            animated
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
