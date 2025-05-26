"use client";

import { motion } from "framer-motion";
import InterviewAnalysisCard from "@/components/home/interview-analysis-card";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Description } from "@/components/shared/description";
import { FeatureCard } from "@/components/shared/feature-card";
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

        <Container maxWidth="xl" className="relative z-10">
          <motion.div
            className="text-center mb-24"
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
                className="mb-8 text-4xl md:text-5xl font-bold tracking-tight"
              >
                Innovative tools to help you{" "}
                <span className="relative inline-block ml-2">
                  <span className="relative z-10 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    master interviews
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-200/50 to-green-300/30 rounded-lg -z-10"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </Heading>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Description
                size="lg"
                align="center"
                className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium"
              >
                Our AI-powered platform combines cutting-edge voice recognition
                with personalized coaching to help you excel in any interview
                scenario. Practice with confidence and see real improvement in
                your communication skills.
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
        </Container>
      </Section>

      <Section
        className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 py-24 md:py-32"
        id="analytics"
      >
        <Container maxWidth="xl">
          <motion.div
            className="grid md:grid-cols-2 gap-16 md:gap-20 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="text-center md:text-left space-y-8"
              variants={fadeUp}
            >
              <Heading
                level={2}
                size="3xl"
                color="accent"
                align="center"
                className="md:text-left mb-8 text-3xl md:text-4xl font-bold tracking-tight"
              >
                Why choose{" "}
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Elevate?
                </span>
              </Heading>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                Our platform offers unique advantages for interview preparation.
                Leverage AI-powered analysis, flexible practice schedules, and
                actionable feedback to boost your confidence and performance.
              </p>

              <p className="text-lg text-gray-500 leading-relaxed">
                Prepare smarter, not just harder, with personalized coaching
                that adapts to your unique needs and goals.
              </p>
            </motion.div>

            <motion.div
              className="relative z-10 flex justify-center md:justify-end"
              variants={fadeUp}
            >
              <motion.div
                className="w-full max-w-md"
                initial={{ rotate: 2, scale: 0.95 }}
                whileInView={{ rotate: 0, scale: 1 }}
                whileHover={{
                  rotate: -1,
                  scale: 1.05,
                  transition: {
                    duration: 0.3,
                    ease: smooth,
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease: smooth,
                }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 blur-2xl rounded-2xl" />
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-1 shadow-2xl border border-gray-200/50">
                    <InterviewAnalysisCard />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
