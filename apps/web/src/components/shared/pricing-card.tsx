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
import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { Description } from "./description";

export interface PricingTierData {
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline";
  highlighted?: boolean;
  badge?: string;
  href?: string;
}

interface PricingCardProps {
  tier: PricingTierData;
  className?: string;
  index?: number;
}

export function PricingCard({ tier, className, index = 0 }: PricingCardProps) {
  const href = tier.href || (tier.name === "Team" ? "/contact" : "/signup");

  return (
    <Card
      className={cn(
        "flex flex-col border transition-all duration-300 hover:shadow-lg group",
        tier.highlighted
          ? "border-green-200 shadow-lg shadow-green-100/40 dark:border-green-700/50 dark:shadow-green-900/20 relative"
          : "border-border hover:border-green-200/50 dark:hover:border-green-700/30",
        className,
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {tier.highlighted && (
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-900/10 dark:to-emerald-900/5 rounded-lg -z-10" />
      )}

      <CardHeader className="pb-6">
        {tier.badge && (
          <Badge className="w-fit mb-2 bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-300">
            {tier.badge}
          </Badge>
        )}
        <CardTitle>
          <Heading level={3} size="2xl" variant="card" weight="bold">
            {tier.name}
          </Heading>
        </CardTitle>
        <CardDescription>
          <Description
            variant="card"
            size="md"
            className="text-muted-foreground"
          >
            {tier.description}
          </Description>
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-6">
        <div className="mb-6">
          <span className="text-4xl font-bold tracking-tight">
            {tier.price}
          </span>
          <span className="text-muted-foreground ml-2 text-lg">
            {tier.priceDetail}
          </span>
        </div>

        <ul className="space-y-3">
          {tier.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start group/feature">
              <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5 transition-colors group-hover/feature:text-green-600" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-4 mt-auto">
        <Button
          asChild
          variant={tier.buttonVariant || "default"}
          className={cn(
            "w-full transition-all duration-300",
            tier.highlighted
              ? "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30"
              : "hover:bg-green-50 dark:hover:bg-green-950/30",
          )}
        >
          <Link href={href}>{tier.buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
