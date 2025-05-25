import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Verified, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { TestimonialData } from "@/types/components";
import { Heading } from "./heading";
import { Description } from "./description";

interface TestimonialCardProps {
  testimonial: TestimonialData;
  className?: string;
  index?: number;
}

interface TestimonialStarsProps {
  rating: number;
  className?: string;
}

export function TestimonialStars({ rating, className }: TestimonialStarsProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.08 + 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Star
            className={cn(
              "h-3.5 w-3.5 transition-all duration-300",
              i < rating
                ? "fill-amber-400 text-amber-400 drop-shadow-[0_1px_2px_rgba(251,191,36,0.3)]"
                : "fill-slate-200 text-slate-200 dark:fill-slate-600 dark:text-slate-600",
            )}
          />
        </motion.div>
      ))}
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  className,
  index = 0,
}: TestimonialCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      className={cn("group h-full", className)}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 60, scale: 0.9 }
      }
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.15,
      }}
    >
      <div className="relative h-full">
        {/* Hover glow effect */}
        <motion.div
          className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-slate-200/60 via-white/40 to-slate-200/60 dark:from-slate-700/60 dark:via-slate-600/40 dark:to-slate-700/60 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(148, 163, 184, 0.6), rgba(255, 255, 255, 0.4), rgba(148, 163, 184, 0.6))",
              "linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(148, 163, 184, 0.6), rgba(255, 255, 255, 0.4))",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <Card className="relative h-full border-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden group-hover:border-slate-200/50 dark:group-hover:border-slate-600/50">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Corner decoration */}
          <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles className="h-4 w-4 text-green-900/60 dark:text-green-400/60" />
            </motion.div>
          </div>

          <CardContent className="p-8 h-full flex flex-col">
            {/* Quote icon with modern styling */}
            <div className="relative mb-6">
              <div className="absolute -top-1 -left-1 w-8 h-8 bg-gradient-to-br from-green-900/10 to-green-800/5 rounded-full blur-sm" />
              <div className="relative w-6 h-6 bg-gradient-to-br from-green-900 to-green-800 rounded-full flex items-center justify-center shadow-lg shadow-green-900/20">
                <Quote className="h-3 w-3 text-white fill-current" />
              </div>
            </div>

            {/* Stars rating */}
            <TestimonialStars rating={testimonial.rating} className="mb-6" />

            {/* Quote text with modern typography */}
            <div className="flex-1 mb-8">
              <Description
                size="lg"
                className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic relative"
              >
                "{testimonial.quote}"
              </Description>
            </div>

            {/* Author section with enhanced design */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-700/50">
              <div className="relative">
                {/* Avatar glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Avatar className="relative h-12 w-12 ring-2 ring-white dark:ring-slate-700 shadow-lg">
                  <AvatarImage
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 text-green-900 dark:text-green-100 font-bold text-sm border-2 border-green-100 dark:border-green-800/50">
                    {testimonial.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                {/* Verified badge */}
                <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-gradient-to-br from-green-900 to-green-800 rounded-full flex items-center justify-center shadow-lg shadow-green-900/30 ring-2 ring-white dark:ring-slate-800">
                  <Verified className="h-2.5 w-2.5 text-white fill-current" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <Heading
                  level={4}
                  size="sm"
                  weight="bold"
                  className="text-slate-900 dark:text-slate-100 mb-0.5 truncate"
                >
                  {testimonial.author.name}
                </Heading>
                <Description
                  size="sm"
                  className="text-slate-600 dark:text-slate-400 font-medium truncate"
                >
                  {testimonial.author.role}
                </Description>
              </div>
            </div>
          </CardContent>

          {/* Bottom subtle accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/60 dark:via-slate-600/30 to-transparent" />
        </Card>
      </div>
    </motion.div>
  );
}
