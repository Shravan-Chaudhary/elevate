// Layout and structure
export { Section } from "./section";
export { Container } from "./container";
export { GradientBackground } from "./gradient-background";

// Typography and content
export { Heading } from "./heading";

// Interactive elements
export { CTAButtons } from "./cta-buttons";
export { PromoBadge } from "./promo-badge";

// Display components
export { IconContainer } from "./icon-container";
export { MetricBar } from "./metric-bar";
export { CompanyLogos } from "./company-logos";

// Card components
export { FeatureCard } from "./feature-card";
export { TestimonialCard } from "./testimonial-card";
export { PricingCard } from "./pricing-card";
export { FAQItem } from "./faq-item";

// Re-export types
export type {
  BaseComponentProps,
  FeatureItem,
  MetricData,
  TestimonialData,
  PricingTierData,
  FAQItemData,
} from "../../types/components";
