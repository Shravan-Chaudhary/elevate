import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Testimonials } from "@/components/home/testimonials";
import { Pricing } from "@/components/home/pricing";
import { Faq } from "@/components/home/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-hidden">
      {/* Enhanced Hero Section */}
      <div className="relative">
        {/* Sophisticated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)]" />

        {/* Hero Content */}
        <div className="container max-w-7xl mx-auto px-6 md:px-8 pt-8 md:pt-12 pb-24 md:pb-40 relative z-10">
          <Hero />
        </div>
      </div>

      {/* Features Section with enhanced spacing */}
      <div className="relative bg-white/90 backdrop-blur-sm border-t border-gray-100/50">
        <Features />
      </div>

      {/* Testimonials Section with subtle background */}
      <div className="relative bg-gradient-to-b from-gray-50/60 via-white to-gray-50/30 border-t border-gray-100/30">
        <Testimonials />
      </div>

      {/* Pricing Section with premium styling */}
      <div className="relative bg-gradient-to-br from-white via-green-50/40 to-blue-50/30 border-t border-green-100/30">
        <Pricing />
      </div>

      {/* FAQ Section with clean finish */}
      <div className="relative bg-gray-50/40 border-t border-gray-200/40">
        <Faq />
      </div>
    </main>
  );
}
