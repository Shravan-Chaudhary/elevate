"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "@/components/shared/section";
import { Heading } from "@/components/shared/heading";
import { Description } from "@/components/shared/description";
import { GradientBackground } from "@/components/shared/gradient-background";
import { PricingCard } from "@/components/shared/pricing-card";
import { PricingTierData } from "@/types/components";
import { fadeUp, fadeIn, stagger, smooth } from "@/lib/animations";

export function Pricing() {
  const tiers: PricingTierData[] = [
    {
      name: "Free",
      description: "Perfect for beginners to practice interviewing.",
      price: "$0",
      priceDetail: "forever",
      features: [
        "2 interview sessions per month",
        "Basic interview templates",
        "Text-based Q&A format",
        "Standard AI feedback",
        "Interview history (7 days)",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      name: "Pro",
      description: "For job seekers actively interviewing.",
      price: "$19",
      priceDetail: "per month",
      features: [
        "Unlimited interview sessions",
        "20+ industry-specific templates",
        "Advanced AI conversation",
        "Detailed performance analytics",
        "Interview history (unlimited)",
        "Custom interview scenarios",
        "Export transcripts & summaries",
      ],
      buttonText: "Start 7-Day Free Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Team",
      description: "For career coaches and teams.",
      price: "$49",
      priceDetail: "per month",
      features: [
        "Everything in Pro",
        "Team management dashboard",
        "5 team member accounts",
        "Progress tracking",
        "Custom branding",
        "Interview sharing & feedback",
        "API access",
        "Priority support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
    },
  ];

  return (
    <Section
      variant="default"
      background="transparent"
      className="relative overflow-hidden py-24 md:py-32"
      id="pricing"
    >
      {/* Enhanced decorative background elements */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Sophisticated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-blue-50/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.05),transparent_70%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_70%)]" />

        {/* Animated background elements */}
        <motion.div
          className="absolute w-[50rem] h-[50rem] rounded-full bg-gradient-to-r from-green-100/20 to-blue-100/20 -top-[15rem] -right-[15rem] blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-l from-blue-100/15 to-green-100/15 top-[35rem] -left-[15rem] blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10"
      >
        <motion.div
          className="flex flex-col items-center text-center mb-20 md:mb-24"
          variants={fadeUp}
        >
          <Heading
            level={2}
            size="3xl"
            align="center"
            variant="section"
            className="mb-8 text-5xl md:text-6xl font-bold tracking-tight"
          >
            Simple,{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </Heading>
          <Description
            variant="section"
            align="center"
            size="xl"
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Choose the plan that&apos;s right for you. Start with our free plan
            and upgrade when you&apos;re ready to unlock advanced features.
          </Description>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {tiers.map((tier, index) => (
            <motion.div key={tier.name} variants={fadeUp}>
              <PricingCard tier={tier} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: smooth,
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
        >
          <Heading level={3} size="xl" align="center" className="mb-4">
            Need something different?
          </Heading>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
            We offer custom plans for larger teams and organizations. Contact
            our sales team to create a plan tailored to your specific needs.
          </p>
          <Button
            variant="outline"
            className="hover:bg-green-50 dark:hover:bg-green-950/30 border-green-200 dark:border-green-700/50 hover:border-green-300 dark:hover:border-green-600"
            asChild
          >
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
