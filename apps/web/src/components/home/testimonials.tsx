"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  rating: number;
}

const testimonialsData: Testimonial[] = [
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

function TestimonialStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center text-amber-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "fill-amber-400" : "fill-gray-300 dark:fill-gray-600"
          }`}
          strokeWidth={i < rating ? 0 : 1}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-green-50/70 dark:from-slate-900 dark:to-green-900/30"
      id="testimonials"
    >
      {/* Decorative background from Hero component (adapted) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[1000px] w-[1000px] -translate-x-[50%] -translate-y-[20%] [mask-image:radial-gradient(closest-side,white_50%,transparent_100%)] dark:[mask-image:radial-gradient(closest-side,black_50%,transparent_100%)] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-emerald-100/50 opacity-40 dark:from-green-800/30 dark:to-emerald-800/30 dark:opacity-30" />
        </div>
        <div className="absolute -right-[10%] top-[20%] h-[300px] w-[400px] rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-500/5 pointer-events-none"></div>
        <div className="absolute -left-[5%] bottom-[15%] h-[250px] w-[350px] rounded-full bg-green-500/10 blur-3xl dark:bg-green-500/5 pointer-events-none"></div>
        <div className='absolute -z-20 inset-0 bg-[url("/grid-pattern.svg")] bg-center opacity-[0.07] dark:opacity-[0.03] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:[mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))] pointer-events-none'></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-900 dark:text-green-100 mb-4">
            Loved by Job Seekers Everywhere
          </h2>
          <p className="mt-2 max-w-2xl text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Hear directly from individuals who have transformed their interview
            skills and confidence with Elevate.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full flex flex-col bg-white/80 dark:bg-slate-800/60 backdrop-blur-md border-gray-200/70 dark:border-slate-700/50 shadow-xl shadow-green-900/5 dark:shadow-black/20 hover:shadow-green-900/10 dark:hover:shadow-black/30 rounded-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out overflow-hidden">
                <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
                  <TestimonialStars rating={testimonial.rating} />
                  <div className="relative mb-6 flex-grow">
                    <QuoteIcon className="h-10 w-10 text-green-200/80 dark:text-green-700/50 absolute -top-2 -left-3 transform -translate-x-1/2 opacity-70" />
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed font-medium relative z-10 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-200/70 dark:border-slate-700/50">
                    <Avatar className="h-11 w-11 mr-4 shadow-sm border border-gray-200 dark:border-slate-700">
                      {testimonial.author.avatar ? (
                        <AvatarImage
                          src={testimonial.author.avatar}
                          alt={testimonial.author.name}
                          className="object-cover"
                        />
                      ) : null}
                      <AvatarFallback className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 font-semibold">
                        {testimonial.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-green-800 dark:text-green-200">
                        {testimonial.author.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.author.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
