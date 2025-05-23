"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility for classnames

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const faqData = [
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

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.05 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="border-b border-green-200/30 dark:border-green-800/30 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-5 md:py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 rounded-md"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-6 h-6 text-green-700 dark:text-green-400 transform transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                marginTop: "0px",
                transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
              },
              collapsed: {
                opacity: 0,
                height: 0,
                marginTop: "0px",
                transition: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
              },
            }}
            className="overflow-hidden"
          >
            <p className="pt-1 pb-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-green-50/30 to-white dark:from-green-900/20 dark:to-slate-900"
      id="faq"
    >
      {/* Subtle background patterns or elements if desired */}
      <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-30">
        {/* Example: Soft repeating icon pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(150,220,150,0.03)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_center,_rgba(30,100,50,0.05)_0%,_transparent_70%)] [mask-image:linear-gradient(transparent,white,transparent)]"></div>
      </div>

      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="mb-4">
            <HelpCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 max-w-2xl text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Find answers to common questions about Elevate, its features, and
            how it can help you succeed.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants} // Use same variants for the list wrapper to stagger items
          className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-md shadow-xl shadow-green-900/5 dark:shadow-black/10 rounded-2xl p-1 md:p-2"
        >
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
