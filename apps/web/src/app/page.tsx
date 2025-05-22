import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container max-w-6xl mx-auto px-0 md:px-6 pt-3 md:pt-5 pb-16 md:pb-20">
        <Hero />
      </div>
      <Features />
    </main>
  );
}
