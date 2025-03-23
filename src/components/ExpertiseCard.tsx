import { ExternalLink } from "lucide-react";

interface ExpertiseCardProps {
  date: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  tech: string[];
}

export function ExpertiseCard({
  date,
  title,
  company,
  companyUrl,
  description,
  tech,
}: ExpertiseCardProps) {
  return (
    <div className="relative">
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-2">
        {/* Left side - Date */}
        <h3 className="w-auto text-text-secondary/50 text-sm font-mono">
          {date}
        </h3>

        {/* Right side - Content */}
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-base text-text-primary font-semibold inline-flex items-center gap-2">
              {title}
              <span className="text-text-secondary">·</span>
              <a
                href={companyUrl}
                className="text-accent-primary hover:text-accent-primary/80 transition-colors inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {company} <ExternalLink className="w-4 h-4" />
              </a>
            </h3>
          </div>

          <p className="text-text-secondary text-sm max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <span
                key={index}
                className="text-text-secondary/80 font-mono text-xs bg-background-accent/30 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
