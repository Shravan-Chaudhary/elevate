"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Heading } from "@/components/shared/heading";
import { Description } from "@/components/shared/description";
import { IconContainer } from "@/components/shared/icon-container";
import { GradientBackground } from "@/components/shared/gradient-background";
import { FAQItem } from "@/components/shared/faq-item";
import { FAQItemData } from "@/types/components";
import { fadeUp, fadeIn, stagger, smooth } from "@/lib/animations";

const faqData: FAQItemData[] = [
  {
    question: "What is Elevate and how does it work?",
    answer:
      "Elevate is an AI-powered platform designed to help you practice and improve your interview skills. You can talk to our AI interviewer, receive instant feedback on your responses, analyze your communication style (pace, tone, filler words), and track your progress over time.",
  },
  {
    question: "Is Elevate suitable for all types of interviews?",
    answer:
      "While Elevate is highly effective for general behavioral and situational interviews, we are continuously expanding our question bank to cover more specialized roles and industries. It's a great tool for practicing communication, articulation, and confidence for most professional interviews.",
  },
  {
    question: "How does the AI feedback help me improve?",
    answer:
      "Our AI provides detailed feedback on several aspects of your answers, including clarity, conciseness, use of filler words, speaking pace, and tone. This actionable feedback helps you identify areas for improvement and refine your delivery for future interviews.",
  },
  {
    question: "Can I practice for specific job roles or companies?",
    answer:
      "Currently, you can focus on general interview skills. We are working on features to allow customization for specific job descriptions and company cultures in the near future. However, the core skills you practice are transferable to any interview.",
  },
  {
    question: "How much does Elevate cost?",
    answer:
      "Elevate offers various subscription plans, including a free tier with limited access to features. Please visit our Pricing page for detailed information on current plans and what they include. We aim to provide affordable options for all job seekers.",
  },
  {
    question: "What if I'm not satisfied with Elevate?",
    answer:
      "We strive to provide the best interview preparation experience. If you're not satisfied with our platform, please contact our support team. We offer a satisfaction guarantee and will work with you to address your concerns or provide a refund as per our policy.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      variant="default"
      background="transparent"
      className="relative overflow-hidden py-24 md:py-32"
      id="faq"
    >
      {/* Enhanced subtle background patterns */}
      <motion.div
        className="absolute inset-0 -z-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Sophisticated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.03),transparent_70%)]" />

        {/* Animated subtle patterns */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(150,220,150,0.04)_0%,_transparent_50%)] [mask-image:linear-gradient(transparent,white,transparent)]"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] [mask-image:linear-gradient(180deg,transparent,white,transparent)]" />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <motion.div
          className="flex flex-col items-center text-center mb-16 md:mb-20"
          variants={fadeUp}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{
              scale: 1,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            <IconContainer
              size="xl"
              variant="solid"
              color="primary"
              className="mb-6"
            >
              <HelpCircle className="h-6 w-6" />
            </IconContainer>
          </motion.div>

          <Heading
            level={2}
            size="3xl"
            align="center"
            variant="section"
            className="mb-6 text-4xl md:text-5xl font-bold tracking-tight"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
              Questions
            </span>
          </Heading>

          <Description
            variant="section"
            align="center"
            size="xl"
            maxWidth="2xl"
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300"
          >
            Find answers to common questions about Elevate, its features, and
            how it can help you transform your interview performance.
          </Description>
        </motion.div>

        <motion.div
          className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-xl shadow-2xl shadow-green-900/10 dark:shadow-black/20 rounded-3xl p-2 md:p-3 max-w-4xl mx-auto border border-green-100/50 dark:border-green-900/20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqData.map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <FAQItem
                key={index}
                index={index}
                faq={item}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
