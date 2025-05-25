/**
 * Global type definitions for the Elevate application
 */

// Interview related types
export interface Interview {
  id: string;
  title: string;
  date: string;
  duration: string;
  score: number;
  category: InterviewCategory;
  status?: InterviewStatus;
}

export type InterviewCategory =
  | "Technical"
  | "Design"
  | "Product"
  | "Behavioral"
  | "General";
export type InterviewStatus =
  | "completed"
  | "pending"
  | "in-progress"
  | "scheduled";

// Dashboard statistics
export interface DashboardStat {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: StatTrend;
}

export interface StatTrend {
  value: number;
  isPositive: boolean;
}

// Feature related types
export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

// FAQ types
export interface FAQItem {
  question: string;
  answer: string;
}

// Testimonial types
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: Array<{ label: string; value: string }>;
}

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface PageLayoutProps extends BaseComponentProps {
  title?: string;
  description?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

// Animation variants
export interface AnimationVariant {
  hidden: Record<string, any>;
  visible: Record<string, any>;
}
