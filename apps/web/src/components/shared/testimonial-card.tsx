import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Sparkles } from "lucide-react";
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
    <div className={cn("flex items-center gap-1 mb-6", className)}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: i * 0.1 + 0.5,
            type: "spring",
            stiffness: 300,
          }}
        >
          <Star
            className={cn(
              "h-4 w-4 transition-all duration-300",
              i < rating
                ? "fill-amber-400 text-amber-400 drop-shadow-sm"
                : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700",
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
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      className={cn("group h-full", className)}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.95 }
      }
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <Card className="relative h-full overflow-hidden border-0 bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-800/90 dark:via-slate-800/50 dark:to-slate-900/90 shadow-xl shadow-slate-200/40 dark:shadow-black/20 backdrop-blur-xl">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-400/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(52, 211, 153, 0.05), rgba(20, 184, 166, 0.05))",
              "linear-gradient(135deg, rgba(52, 211, 153, 0.05), rgba(20, 184, 166, 0.05), rgba(34, 197, 94, 0.05))",
              "linear-gradient(135deg, rgba(20, 184, 166, 0.05), rgba(34, 197, 94, 0.05), rgba(52, 211, 153, 0.05))",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Sparkle decorations */}
        <motion.div
          className="absolute top-6 right-6 opacity-20 group-hover:opacity-60"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="h-5 w-5 text-amber-400" />
        </motion.div>

        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-emerald-400/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

        <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white via-slate-50/80 to-white dark:from-slate-800/90 dark:via-slate-800/60 dark:to-slate-900/90" />

        <CardContent className="relative p-8 h-full flex flex-col">
          <TestimonialStars rating={testimonial.rating} />

          {/* Quote section with enhanced typography */}
          <div className="relative flex-1 mb-8">
            <motion.div
              className="absolute -top-2 -left-2 text-green-500/20 dark:text-green-400/20"
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            >
              <Quote className="h-8 w-8" fill="currentColor" />
            </motion.div>

            <motion.blockquote
              className="relative z-10 pl-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Description
                variant="card"
                size="lg"
                className="text-slate-700 dark:text-slate-300 font-medium"
              >
                {testimonial.quote}
              </Description>
            </motion.blockquote>
          </div>

          {/* Author section with enhanced styling */}
          <motion.div
            className="flex items-center gap-4 pt-6 border-t border-slate-200/60 dark:border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Avatar className="relative h-14 w-14 border-2 border-white dark:border-slate-700 shadow-lg">
                {testimonial.author.avatar ? (
                  <AvatarImage
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="object-cover"
                  />
                ) : null}
                <AvatarFallback className="bg-gradient-to-br from-green-100 to-emerald-100 text-green-800 dark:from-green-800 dark:to-emerald-800 dark:text-green-100 font-semibold text-lg border-2 border-green-200 dark:border-green-700">
                  {testimonial.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1 min-w-0">
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <Heading
                  level={4}
                  size="md"
                  variant="card"
                  weight="semibold"
                  className="text-slate-900 dark:text-slate-100 mb-1 truncate"
                >
                  {testimonial.author.name}
                </Heading>
              </motion.div>
              <Description
                variant="card"
                size="sm"
                className="text-slate-600 dark:text-slate-400"
              >
                {testimonial.author.role}
              </Description>
            </div>

            {/* Verification badge */}
            <motion.div
              className="flex-shrink-0"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
