"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/shared/section";
import { Heading } from "@/components/shared/heading";
import { Description } from "@/components/shared/description";
import { GradientBackground } from "@/components/shared/gradient-background";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { TestimonialData } from "@/types/components";

const testimonialsData: TestimonialData[] = [
  {
    quote:
      "Elevate has become indispensable for my interview prep. The AI feedback feels like having a personal coach, and the insights have significantly improved my confidence.",
    author: {
      name: "Alex Johnson",
      role: "Software Engineer at Google",
      avatar: "/testimonials/avatar-1.svg",
    },
    rating: 5,
  },
  {
    quote:
      "After using Elevate for just two weeks, I nailed an interview for my dream job. The realistic AI interview scenarios and detailed feedback were game-changers in my preparation.",
    author: {
      name: "Sarah Chen",
      role: "Product Manager at Stripe",
      avatar: "/testimonials/avatar-2.svg",
    },
    rating: 5,
  },
  {
    quote:
      "I've tried several interview prep tools, but Elevate is in a class of its own. The industry-specific questions and detailed performance analytics have helped me identify weak spots I didn't know I had.",
    author: {
      name: "Miguel Rodriguez",
      role: "Data Scientist at Netflix",
      avatar: "/testimonials/avatar-3.svg",
    },
    rating: 5,
  },
  {
    quote:
      "As a career coach, I recommend Elevate to all my clients. It provides personalized practice that traditional mock interviews can't match, and the analytics help me tailor my coaching.",
    author: {
      name: "Priya Patel",
      role: "Career Coach & Consultant",
      avatar: "/testimonials/avatar-4.svg",
    },
    rating: 5,
  },
  {
    quote:
      "Elevate helped me overcome my interview anxiety by giving me a safe space to practice. After dozens of practice sessions, I finally feel confident in real interviews.",
    author: {
      name: "David Kim",
      role: "Marketing Director at Adobe",
      avatar: "/testimonials/avatar-5.svg",
    },
    rating: 5,
  },
  {
    quote:
      "The detailed feedback on my communication style was eye-opening. Elevate helped me refine not just what I say, but how I say it. Worth every penny!",
    author: {
      name: "Emma Watson",
      role: "UX Designer at Spotify",
      avatar: "/testimonials/avatar-6.svg",
    },
    rating: 4,
  },
];

export function Testimonials() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <Section
      variant="default"
      background="subtle"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50/50 via-white to-green-50/30 dark:from-slate-900/90 dark:via-slate-800/50 dark:to-green-900/20 py-12 md:py-24"
      id="testimonials"
    >
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main gradient orb */}
        <motion.div
          className="absolute left-1/2 top-1/4 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-green-400/10 via-emerald-300/5 to-teal-400/10 blur-3xl dark:from-green-500/10 dark:via-emerald-400/5 dark:to-teal-500/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating accent elements */}
        <motion.div
          className="absolute right-[10%] top-[20%] h-40 w-40 rounded-full bg-gradient-to-br from-amber-300/20 to-orange-300/20 blur-2xl dark:from-amber-400/10 dark:to-orange-400/10"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-[15%] bottom-[25%] h-32 w-32 rounded-full bg-gradient-to-br from-green-300/20 to-emerald-300/20 blur-2xl dark:from-green-400/10 dark:to-emerald-400/10"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03] dark:opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />
      </div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Header section with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={isInView ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative inline-block"
          >
            <Heading
              level={2}
              size="3xl"
              align="center"
              variant="section"
              className="relative mb-6"
            >
              <span className="relative z-10">
                Loved by{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Job Seekers
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-500/40 via-emerald-400/40 to-teal-400/40 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                  />
                </span>{" "}
                Everywhere
              </span>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Description
              variant="section"
              align="center"
              size="lg"
              maxWidth="3xl"
            >
              Join thousands of professionals who have transformed their
              interview skills and landed their dream jobs with Elevate's
              AI-powered coaching.
            </Description>
          </motion.div>
        </motion.div>

        {/* Testimonials layout - responsive carousel for mobile, grid for desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="relative"
        >
          {/* Mobile: One testimonial at a time with snap scrolling */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4">
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="flex-none w-full px-4 snap-center">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </div>

            {/* Mobile scroll indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonialsData.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.9,
                  rotateY: 10,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateY: 0,
                      }
                    : {
                        opacity: 0,
                        y: 60,
                        scale: 0.9,
                        rotateY: 10,
                      }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.0 + index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  rotateY: -2,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="perspective-1000"
              >
                <TestimonialCard testimonial={testimonial} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Floating background elements */}
          <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-100/30 to-emerald-100/20 dark:from-green-900/20 dark:to-emerald-800/10 rounded-full blur-2xl"
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
              className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 dark:from-blue-900/20 dark:to-indigo-800/10 rounded-full blur-2xl"
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
              className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-100/30 to-pink-100/20 dark:from-purple-900/20 dark:to-pink-800/10 rounded-full blur-2xl"
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
        </motion.div>

        {/* Enhanced bottom section with metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.0 }}
          className="text-center mt-16 md:mt-24"
        >
          {/* Metrics cards */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
            {[
              { number: "10,000+", label: "Active Users" },
              { number: "95%", label: "Success Rate" },
              { number: "4.9/5", label: "User Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 2.2 + index * 0.1,
                }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="text-2xl font-bold text-green-900 dark:text-green-100 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
            className="relative"
          >
            <div className="flex items-center justify-center space-x-3 text-slate-600 dark:text-slate-400">
              <motion.div
                className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-base font-medium">
                Trusted by professionals at top companies worldwide
              </span>
              <motion.div
                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              />
            </div>

            {/* Subtle background glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-green-100/20 to-transparent dark:via-green-900/10 blur-xl rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
