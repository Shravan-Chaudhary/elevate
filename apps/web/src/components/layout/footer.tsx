"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { Heading } from "@/components/shared/heading";

const navigation = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Community", href: "/community" },
    { name: "Support", href: "/support" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    {
      name: "X",
      href: "https://x.com/10xshravan",
      icon: FaXTwitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/Shravan-Chaudhary/elevate",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shravan-chaudhary/",
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <footer className="border-t bg-gradient-to-br from-gray-50/50 to-emerald-50/30 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/2 to-green-500/0"></div>
      <motion.div
        className="container max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="col-span-2 md:col-span-1"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-md w-8 h-8 flex items-center justify-center text-white font-bold shadow-sm">
                EV
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-slate-100">
                Elevate
              </span>
            </motion.div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-4 max-w-xs leading-relaxed">
              Elevate helps job seekers practice and improve their interview
              skills with{" "}
              <span className="text-green-700 dark:text-green-400 font-medium">
                AI-powered
              </span>{" "}
              mock interviews.
            </p>
            <motion.div className="flex space-x-4 mt-6">
              {navigation.social.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Heading
              level={3}
              size="sm"
              weight="bold"
              color="primary"
              className="mb-4 text-slate-900 dark:text-slate-100"
            >
              Product
            </Heading>
            <ul className="space-y-3">
              {navigation.product.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Heading
              level={3}
              size="sm"
              weight="bold"
              color="primary"
              className="mb-4 text-slate-900 dark:text-slate-100"
            >
              Resources
            </Heading>
            <ul className="space-y-3">
              {navigation.resources.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Heading
              level={3}
              size="sm"
              weight="bold"
              color="primary"
              className="mb-4 text-slate-900 dark:text-slate-100"
            >
              Company
            </Heading>
            <ul className="space-y-3">
              {navigation.company.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 pt-8 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-slate-800 dark:text-slate-200 font-semibold">
              Elevate
            </span>
            . All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 md:mt-0 font-medium">
            Made with <span className="text-red-500">♥</span> by{" "}
            <span className="text-slate-800 dark:text-slate-200 font-semibold">
              Shravan
            </span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
