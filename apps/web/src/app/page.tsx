import { Suspense } from "react";

// Components
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Testimonials } from "@/components/home/testimonials";
import { Pricing } from "@/components/home/pricing";
import { Faq } from "@/components/home/faq";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 pt-8 md:pt-12 pb-16 md:pb-24">
          <Hero />
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
