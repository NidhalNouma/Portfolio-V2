import { ThemeSwitch } from "./ThemeSwitch";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

{
  /* Social Links and Theme Switch */
}
function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      <ThemeSwitch />
      <a
        href="https://github.com/nidhalnouma"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-text-primary transition-all duration-200"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/nidhal-nouma"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-text-primary transition-all duration-200"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="mailto:nidhal.nouma.0@gmail.com"
        className="text-text-secondary hover:text-text-primary transition-all duration-200"
      >
        <Mail className="w-5 h-5" />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-text-primary transition-all duration-200"
      >
        <FileText className="w-5 h-5" />
      </a>
    </div>
  );
}

export default SocialLinks;
