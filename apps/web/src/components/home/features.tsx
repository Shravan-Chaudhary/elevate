"use client";

import { motion } from "framer-motion";
import InterviewAnalysisCard from "@/components/home/interview-analysis-card";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Description } from "@/components/shared/description";
import { FeatureCard } from "@/components/shared/feature-card";
import { CTAButtons } from "@/components/shared/cta-buttons";
import { FeatureItem } from "@/types/components";
import { ArrowRight, BarChart, Clock, Mic } from "lucide-react";
import { fadeUp, fadeIn, stagger, smooth } from "@/lib/animations";

export function Features() {
  const features: FeatureItem[] = [
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

  const ctaButtons = [
    {
      label: "Start practicing now",
      href: "/interview",
    },
  ];

  return (
    <>
      <Section id="features" className="relative overflow-hidden">
        {/* Background decorations */}
        <motion.div
          className="absolute inset-0 -z-10 overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute w-[50rem] h-[50rem] rounded-full bg-green-800/5 -top-[10rem] -left-[15rem] blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute w-[50rem] h-[30rem] rounded-full bg-emerald-800/5 top-[20rem] -right-[15rem] blur-3xl"
            animate={{
              x: [0, -15, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center max-w-4xl mx-auto mb-20 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp}>
            <Heading
              level={2}
              size="3xl"
              align="center"
              variant="section"
              className="mb-6"
            >
              Innovative tools to help you{" "}
              <span className="relative inline-block ml-2">
                <span className="relative z-10">master interviews</span>
                <motion.span
                  className="absolute bottom-1 left-0 w-full h-3 bg-green-200/60 dark:bg-green-400/20 -z-10 rounded"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: smooth,
                    delay: 0.5,
                  }}
                  style={{ originX: 0 }}
                ></motion.span>
              </span>
            </Heading>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Description
              variant="section"
              align="center"
              maxWidth="3xl"
              className="text-xl"
            >
              Our platform combines cutting-edge AI technology with proven
              interview techniques to help you prepare, practice, and perfect
              your interview skills.
            </Description>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-12 md:space-y-24"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeUp}>
              <FeatureCard feature={feature} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-16"
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
          <CTAButtons
            buttons={ctaButtons}
            className="[&_button]:bg-green-900 [&_button]:hover:bg-green-800 [&_button]:px-8 [&_button]:py-7 [&_button]:h-auto [&_button]:text-lg [&_button]:shadow-lg [&_button]:shadow-green-900/20 [&_button]:hover:shadow-xl [&_button]:hover:shadow-green-900/30"
          />
        </motion.div>
      </Section>

      <Section
        className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
        id="analytics"
      >
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center md:text-left" variants={fadeUp}>
            <Heading
              level={2}
              size="3xl"
              color="accent"
              align="center"
              className="md:text-left mb-6"
            >
              Why choose us?
            </Heading>

            <p className="text-xl text-gray-700 leading-relaxed">
              Our platform offers unique advantages for interview preparation.
              Leverage AI-powered analysis, flexible practice schedules, and
              actionable feedback to boost your confidence and performance.
              Prepare smarter, not just harder, with Elevate.
            </p>
          </motion.div>

          <motion.div
            className="relative z-10 flex justify-center md:justify-end"
            variants={fadeUp}
          >
            <motion.div
              className="w-full max-w-sm"
              initial={{ rotate: 3 }}
              whileHover={{
                rotate: 0,
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  ease: smooth,
                },
              }}
              transition={{
                duration: 0.5,
                ease: smooth,
              }}
            >
              <InterviewAnalysisCard />
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
