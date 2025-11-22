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
    date: "2021 — Present",
    title: "Software Developer",
    company: "TradeSync",
    companyUrl: "",
    description:
      "Developed and maintained web applications and APIs using Python frameworks such as Django and FastAPI. Collaborated with cross-functional teams to deliver scalable solutions and enhance user experience.",
    tech: ["Python", "Django", "FastAPI", "React.js", "Docker"],
  },
  {
    date: "2016 — 2021",
    title: "Software Engenieer",
    company: "Talktime Technology",
    companyUrl: "",
    description:
      "Led the development of real-time communication applications using JavaScript and WebRTC technologies. Implemented robust backend services with Node.js and Socket.io to support high concurrency and low latency requirements.",
    tech: ["JavaScript", "TypeScript", "React.js", "Next.js", "Socket.io", "WebRTC"],
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
