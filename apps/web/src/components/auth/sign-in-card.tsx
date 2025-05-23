"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail, LogIn } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  // password: z.string().min(8, { message: "Password must be at least 8 characters." })
});

export function SignInCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      // password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement email sign-in logic
    console.log(values);
  }

  const handleGoogleSignIn = () => {
    // TODO: Implement Google sign-in logic
    console.log("Google sign-in clicked");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-8 space-y-6 bg-white/90 rounded-3xl shadow-xl shadow-green-900/10 border border-green-200/30 backdrop-blur-md"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-gray-900"
        >
          Welcome Back
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-lg text-gray-600 leading-relaxed"
        >
          Sign in to access your Elevate account.
        </motion.p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Email Address
                </FormLabel>
                <FormControl>
                  <div className="relative group">
                    <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-700 transition-colors" />
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                      className="pl-12 w-full h-12 rounded-full bg-gray-50 border-gray-300 hover:border-green-400 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors duration-300 ease-in-out text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Password</FormLabel>
                <FormControl>
                  <div className="relative group">
                    <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-700 transition-colors" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      {...field}
                      className="pl-12 w-full h-12 rounded-full bg-gray-50 border-gray-300 hover:border-green-400 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors duration-300 ease-in-out text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-green-700 hover:bg-green-800 h-12 font-medium text-base text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-inner shadow-green-700/30"
            >
              <LogIn className="mr-2 h-5 w-5" /> Sign In with Email
            </Button>
          </motion.div>
        </form>
      </Form>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative my-6"
      >
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white/90 text-gray-500 backdrop-blur-md">
            Or continue with
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Button
          variant="outline"
          size="lg"
          onClick={handleGoogleSignIn}
          className="w-full rounded-full h-12 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 text-base transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-inner"
        >
          <FcGoogle className="mr-2 h-5 w-5" /> Sign In with Google
        </Button>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-xs text-center text-gray-500"
      >
        By signing in, you agree to our{" "}
        <a
          href="#" // Replace with actual links
          className="font-medium text-green-700 hover:text-green-800 hover:underline"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="#" // Replace with actual links
          className="font-medium text-green-700 hover:text-green-800 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </motion.p>
    </motion.div>
  );
}
