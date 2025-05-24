import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TestimonialData } from "@/types/components";

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
    <div className={cn("flex items-center text-amber-400 mb-4", className)}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-5 w-5",
            i < rating ? "fill-amber-400" : "fill-gray-300 dark:fill-gray-600",
          )}
          strokeWidth={i < rating ? 0 : 1}
        />
      ))}
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  className,
  index = 0,
}: TestimonialCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: index * 0.1 },
    },
  };

  return (
    <motion.div variants={cardVariants} className={className}>
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
  );
}
