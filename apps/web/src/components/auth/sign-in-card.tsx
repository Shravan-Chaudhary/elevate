"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc"; // Using react-icons for Google icon
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming cn utility is needed here for button class

export function SignInCard() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full space-y-6 bg-gradient-to-br from-white/90 to-gray-50/80 p-8 rounded-lg shadow-xl backdrop-blur-md border border-green-200 animate-fade-in">
      {" "}
      {/* Content Container (The Card) */}
      {/* Ensure heading font is bold */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Welcome Back
      </h1>
      {/* Make description bold and use text-gray-500 color */}
      <p className="text-lg text-gray-500 leading-relaxed font-bold">
        Sign in to your account to continue your interview practice journey.
      </p>
      {/* Google Sign-In Button */}
      <Button
        size="lg"
        className={cn(
          "rounded-full px-8 h-12 font-medium text-base bg-white text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-300",
          "hover:shadow-md hover:-translate-y-1 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",
        )}
        asChild // Use asChild to render Link inside Button
      >
        <Link href="/api/auth/signin/google">
          <FcGoogle className="mr-2 h-5 w-5" />
          Sign in with Google
        </Link>
      </Button>
      {/* Optional: Add a small link for privacy policy or terms */}
      <p className="text-xs text-gray-400 mt-4">
        By signing in, you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-gray-600">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="underline hover:text-gray-600">
          Terms of Service
        </Link>
        .
      </p>
    </div>
  );
}
