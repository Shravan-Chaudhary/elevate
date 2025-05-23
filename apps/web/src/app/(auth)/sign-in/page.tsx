"use client";

import { SignInCard } from "@/components/auth/sign-in-card";
import { motion } from "framer-motion";

const SignInPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      {/* Decorative background - consistent with Hero */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-[10%] [mask-image:radial-gradient(closest-side,white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-40" />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100, rotate: -25, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -15, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute -left-[10%] top-[15%] h-[300px] w-[300px] rounded-full bg-amber-400/20 blur-3xl opacity-70"
        />
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100, rotate: 25, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 15, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="absolute -right-[10%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-green-400/20 blur-3xl opacity-70"
        />
        <div
          className='absolute -z-10 inset-0 bg-[url("/grid-pattern.svg")] bg-center opacity-10'
          style={{ filter: "invert(1) opacity(0.5)" }} // Adjusted for potentially dark overall theme if needed, or remove filter
        />
      </div>

      {/* Floating elements for subtle animation */}
      <motion.div
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 4, 0, -4, 0],
          rotate: [0, 2, -2, 2, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
        className="absolute top-[10%] left-[5%] w-4 h-4 bg-green-300/50 rounded-full opacity-60"
      />
      <motion.div
        animate={{
          y: [0, 10, 0, -10, 0],
          x: [0, -5, 0, 5, 0],
          rotate: [0, -3, 3, -3, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 2.5,
        }}
        className="absolute bottom-[15%] right-[8%] w-5 h-5 bg-amber-300/50 rounded-xl opacity-60 transform rotate-12"
      />
      <motion.div
        animate={{
          scale: [1, 1.05, 1, 1.05, 1],
          opacity: [0.4, 0.6, 0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-[60%] left-[40%] w-3 h-3 bg-green-200/50 rounded-full opacity-50"
      />

      <div className="relative z-10">
        <SignInCard />
      </div>
    </div>
  );
};

export default SignInPage;
