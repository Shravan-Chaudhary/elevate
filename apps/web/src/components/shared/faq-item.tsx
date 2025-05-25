"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { Description } from "./description";

export interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQItemProps {
  faq: FAQItemData;
  isOpen: boolean;
  onClick: () => void;
  index?: number;
  className?: string;
}

export function FAQItem({
  faq,
  isOpen,
  onClick,
  index = 0,
  className,
}: FAQItemProps) {
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
      className={cn(
        "border-b border-green-200/30 dark:border-green-800/30 last:border-b-0 group",
        className,
      )}
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-5 md:py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 rounded-md transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <Heading
          level={3}
          size="lg"
          variant="card"
          weight="medium"
          className="text-gray-800 dark:text-gray-100 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-200 pr-4"
        >
          {faq.question}
        </Heading>
        <ChevronDown
          className={cn(
            "w-6 h-6 text-green-700 dark:text-green-400 transform transition-transform duration-300 ease-in-out flex-shrink-0",
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
            <div className="pt-1 pb-6">
              <Description
                variant="card"
                size="lg"
                className="text-gray-600 dark:text-gray-400"
              >
                {faq.answer}
              </Description>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
