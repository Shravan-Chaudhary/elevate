import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  rating: number;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
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

  return (
    <section
      className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-green-50"
      id="testimonials"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[40rem] h-[40rem] rounded-full bg-green-800/10 -top-[10rem] -left-[15rem] blur-3xl"></div>
        <div className="absolute w-[40rem] h-[20rem] rounded-full bg-emerald-800/10 top-[20rem] -right-[15rem] blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40"></div>
      </div>
      <div className="container max-w-6xl mx-auto px-2 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-900 mb-4">
            Loved by Job Seekers Everywhere
          </h2>
          <p className="mt-2 max-w-[700px] text-xl text-gray-600">
            Here&apos;s what our users have to say about their experience with
            InterWiz.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-white/90 border-0 shadow-xl shadow-green-900/10 rounded-3xl group hover:scale-[1.025] hover:shadow-2xl hover:shadow-green-900/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-4 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      stroke={i < testimonial.rating ? "none" : "currentColor"}
                      className="h-5 w-5 drop-shadow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
                <div className="relative mb-6 flex-1">
                  <QuoteIcon className="h-8 w-8 text-green-200/60 absolute -top-4 -left-4" />
                  <p className="text-gray-900 text-lg font-medium relative z-10">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 mr-4 shadow-md shadow-green-900/10">
                    {testimonial.author.avatar ? (
                      <AvatarImage
                        src={testimonial.author.avatar}
                        alt={testimonial.author.name}
                      />
                    ) : null}
                    <AvatarFallback className="bg-green-100 text-green-800">
                      {testimonial.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-green-900">
                      {testimonial.author.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
