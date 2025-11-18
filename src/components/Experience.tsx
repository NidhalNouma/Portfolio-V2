import { useState } from "react";
import { ExpertiseCard } from "./ExpertiseCard";

interface Job {
  date: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  tech: string[];
}

const jobs: Job[] = [
  {
    date: "2021 — 2025",
    title: "Software Developer",
    company: "Upwork",
    companyUrl: "https://www.upwork.com",
    description:
      "Designed and developed web applications using various frameworks, integrated diverse APIs, and collaborated on AI agent implementations for multiple clients.",
    tech: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    date: "2016 — 2021",
    title: "Software Developer",
    company: "Freelancer",
    companyUrl: "https://www.freelancer.com",
    description:
      "Designed and developed web and mobile applications utilizing various frameworks, and built trading software tailored to diverse client requirements.",
    tech: ["Python", "JavaScript", "PHP", "HTML", "CSS", "C++"],
  }
];

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl">
        <h2 className="text-accent-primary font-mono text-sm mb-16 flex items-center">
          {/* <span className="font-mono mr-4">02.</span> */}
          Where I've Worked
        </h2>
        <div className="space-y-16">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-300 p-2 rounded-lg hover:bg-background-secondary/80 ${
                hoveredIndex === null || hoveredIndex === index
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ExpertiseCard {...job} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
