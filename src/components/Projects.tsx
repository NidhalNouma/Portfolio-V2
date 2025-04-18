import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

import isalgoImg from "../assets/isalgo_img.png";
import automatedTraderImg from "../assets/at_img.png";
import dojibotImg from "../assets/dojibot_img.png";
import talktimeImg from "../assets/talktime_img.png";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  tech: string[];
  stars?: string;

  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "IsAlgo",
    description:
      "A platform offering advanced trading strategies integrated with an automated system compatible with multiple forex and cryptocurrency brokers.",
    link: "https://www.isalgo.com",
    image: isalgoImg,
    tech: ["Django", "Postgress", "React", "Tailwind CSS", "AWS"],
    stars: "",
  },
  {
    title: "Automated Trader",
    description:
      "A platform designed to seamlessly execute, automate, and replicate trades across multiple trading platforms and brokerages.",
    link: "https://app.automatedtrader.com",
    image: automatedTraderImg,
    tech: ["NextJs", "JavaScript", "Tailwind CSS", "Firebase", "GCloud"],
    stars: "",
  },
  {
    title: "DojiBot",
    description:
      "A website offering a specialized Expert Advisor (EA) tailored for seamless integration and automated trading on a specific trading platform.",
    link: "https://doji-ea-web-app-nidhalnouma.vercel.app/",
    image: dojibotImg,
    tech: ["NextJs", "JavaScript", "Tailwind CSS", "Firebase", "Vercel"],
    stars: "",
  },
  {
    title: "TalkTime",
    description:
      "A mobile and web application enabling users to engage in real-time voice conversations with randomly matched individuals.",
    link: "#",
    image: talktimeImg,
    tech: ["IonicJs", "ReactJs", "TypeScript", "Tailwind CSS", "GCloud"],
    stars: "",
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-4xl">
        <h2 className="text-accent-primary font-mono text-sm mb-16 flex items-center">
          {/* <span className="font-mono mr-4">03.</span> */}
          Some Things I've Built
        </h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
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
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
