"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Heading } from "@/components/shared/heading";
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
      avatar: "/testimonials/avatar-1.png",
    },
    rating: 5,
  },
  {
    quote:
      "After using Elevate for just two weeks, I nailed an interview for my dream job. The realistic AI interview scenarios and detailed feedback were game-changers in my preparation.",
    author: {
      name: "Sarah Chen",
      role: "Product Manager at Stripe",
      avatar: "/testimonials/avatar-2.png",
    },
    rating: 5,
  },
  {
    quote:
      "I've tried several interview prep tools, but Elevate is in a class of its own. The industry-specific questions and detailed performance analytics have helped me identify weak spots I didn't know I had.",
    author: {
      name: "Miguel Rodriguez",
      role: "Data Scientist at Netflix",
      avatar: "/testimonials/avatar-3.png",
    },
    rating: 5,
  },
  {
    quote:
      "As a career coach, I recommend Elevate to all my clients. It provides personalized practice that traditional mock interviews can't match, and the analytics help me tailor my coaching.",
    author: {
      name: "Priya Patel",
      role: "Career Coach & Consultant",
      avatar: "/testimonials/avatar-4.png",
    },
    rating: 5,
  },
  {
    quote:
      "Elevate helped me overcome my interview anxiety by giving me a safe space to practice. After dozens of practice sessions, I finally feel confident in real interviews.",
    author: {
      name: "David Kim",
      role: "Marketing Director at Adobe",
      avatar: "/testimonials/avatar-5.png",
    },
    rating: 5,
  },
  {
    quote:
      "The detailed feedback on my communication style was eye-opening. Elevate helped me refine not just what I say, but how I say it. Worth every penny!",
    author: {
      name: "Emma Watson",
      role: "UX Designer at Spotify",
      avatar: "/testimonials/avatar-6.png",
    },
    rating: 4,
  },
];

export function Testimonials() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <Section
      variant="default"
      background="subtle"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-green-50/70 dark:from-slate-900 dark:to-green-900/30"
      id="testimonials"
    >
      <GradientBackground variant="section" className="absolute inset-0" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[1000px] w-[1000px] -translate-x-[50%] -translate-y-[20%] [mask-image:radial-gradient(closest-side,white_50%,transparent_100%)] dark:[mask-image:radial-gradient(closest-side,black_50%,transparent_100%)] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-emerald-100/50 opacity-40 dark:from-green-800/30 dark:to-emerald-800/30 dark:opacity-30" />
        </div>
        <div className="absolute -right-[10%] top-[20%] h-[300px] w-[400px] rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-500/5 pointer-events-none"></div>
        <div className="absolute -left-[5%] bottom-[15%] h-[250px] w-[350px] rounded-full bg-green-500/10 blur-3xl dark:bg-green-500/5 pointer-events-none"></div>
        <div className='absolute -z-20 inset-0 bg-[url("/grid-pattern.svg")] bg-center opacity-[0.07] dark:opacity-[0.03] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:[mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))] pointer-events-none'></div>
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <Heading
            level={2}
            size="4xl"
            align="center"
            className="text-green-900 dark:text-green-100 mb-4"
          >
            Loved by Job Seekers Everywhere
          </Heading>
          <p className="mt-2 max-w-2xl text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Hear directly from individuals who have transformed their interview
            skills and confidence with Elevate.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
