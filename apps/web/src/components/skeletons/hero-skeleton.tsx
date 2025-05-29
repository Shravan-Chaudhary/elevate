"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30">
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main heading skeleton */}
          <div className="space-y-4 mb-8">
            <Skeleton className="h-16 w-full max-w-3xl mx-auto" />
            <Skeleton className="h-12 w-4/5 mx-auto" />
          </div>

          {/* Description skeleton */}
          <div className="space-y-3 mb-12">
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
          </div>

          {/* CTA buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-32" />
          </div>

          {/* Interactive demo skeleton */}
          <div className="relative mx-auto max-w-4xl">
            <Skeleton className="h-96 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
