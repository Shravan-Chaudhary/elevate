import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline";
  highlighted?: boolean;
  badge?: string;
}

export function Pricing() {
  const tiers: PricingTier[] = [
    {
      name: "Free",
      description: "Perfect for beginners to practice interviewing.",
      price: "$0",
      priceDetail: "forever",
      features: [
        "2 interview sessions per month",
        "Basic interview templates",
        "Text-based Q&A format",
        "Standard AI feedback",
        "Interview history (7 days)",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      name: "Pro",
      description: "For job seekers actively interviewing.",
      price: "$19",
      priceDetail: "per month",
      features: [
        "Unlimited interview sessions",
        "20+ industry-specific templates",
        "Advanced AI conversation",
        "Detailed performance analytics",
        "Interview history (unlimited)",
        "Custom interview scenarios",
        "Export transcripts & summaries",
      ],
      buttonText: "Start 7-Day Free Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Team",
      description: "For career coaches and teams.",
      price: "$49",
      priceDetail: "per month",
      features: [
        "Everything in Pro",
        "Team management dashboard",
        "5 team member accounts",
        "Progress tracking",
        "Custom branding",
        "Interview sharing & feedback",
        "API access",
        "Priority support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
    },
  ];

  return (
    <section className="py-20" id="pricing">
      <div className="container max-w-6xl mx-auto px-2 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
            Choose the plan that&apos;s right for you. All plans include a 7-day
            free trial.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col border ${
                tier.highlighted
                  ? "border-green-200 shadow-lg shadow-green-100/40"
                  : "border-border"
              }`}
            >
              <CardHeader className="pb-6">
                {tier.badge && (
                  <Badge className="w-fit mb-2 bg-green-100 text-green-800 hover:bg-green-100">
                    {tier.badge}
                  </Badge>
                )}
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">
                    {tier.priceDetail}
                  </span>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 mt-auto">
                <Button
                  asChild
                  variant={tier.buttonVariant || "default"}
                  className={`w-full ${
                    tier.highlighted ? "bg-green-600 hover:bg-green-700" : ""
                  }`}
                >
                  <Link href={tier.name === "Team" ? "/contact" : "/signup"}>
                    {tier.buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Need something different?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer custom plans for larger teams and organizations. Contact
            our sales team to create a plan tailored to your specific needs.
          </p>
          <Button variant="outline" className="mt-4">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
