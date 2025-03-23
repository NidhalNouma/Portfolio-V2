import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  tech: string[];
  stars?: string;
  github?: string;
  demo?: string;
}

export function ProjectCard({
  title,
  description,
  link,
  image,
  tech,
  stars,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="relative">
      <div className="flex lg:flex-row flex-col-reverse lg:gap-8 gap-4">
        <div className="mt-0.5 w-64">
          <img
            src={image}
            alt={title}
            className="aspect-video w-full object-cover rounded-md  border border-text-secondary/10"
          />
        </div>
        <div className=" space-y-4">
          <div className="flex items-baseline gap-4">
            <h3 className="text-lg font-bold text-text-primary">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-primary transition-colors inline-flex items-center gap-2 font-mono"
              >
                {title} <ExternalLink className="w-4 h-4" />
              </a>
            </h3>
            {stars && (
              <span className="text-text-secondary font-mono text-sm">
                ★ {stars}
              </span>
            )}
          </div>
          <p className="text-text-secondary text-sm leading-relaxed font-medium font-mono">
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            {tech.map((t, index) => (
              <span
                key={index}
                className="text-text-primary/80 font-mono text-xs"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
