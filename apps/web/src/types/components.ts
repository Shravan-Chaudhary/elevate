export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface IconProps extends BaseComponentProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface MetricData {
  label: string;
  value: string;
  percentage: number;
  color: "green" | "amber" | "red" | "blue";
}

export interface TestimonialData {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  rating: number;
}

export interface ButtonVariantProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  className?: string;
}

export interface LayoutContainerProps extends BaseComponentProps {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
}

export interface FAQItemData {
  question: string;
  answer: string;
}

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
