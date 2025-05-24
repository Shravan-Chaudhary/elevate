import { cn } from "@/lib/utils";
import { BaseComponentProps } from "@/types/components";

interface CompanyLogosProps extends BaseComponentProps {
  title?: string;
  companies: string[];
  animated?: boolean;
}

export function CompanyLogos({
  title = "Trusted by job seekers from",
  companies,
  className,
  animated = false,
}: CompanyLogosProps) {
  return (
    <div className={cn("text-center", className)}>
      {title && (
        <p className="text-sm text-gray-500 mb-5 uppercase tracking-wider font-medium">
          {title}
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-10">
        {companies.map((company, index) => (
          <div
            key={company}
            className={cn(
              "text-gray-400 font-medium transition-colors",
              animated && "hover:text-gray-600",
            )}
            style={
              animated ? { animationDelay: `${index * 100}ms` } : undefined
            }
          >
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}
