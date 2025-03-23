import { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const textToType = "I build things for the web.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          );
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(typingInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative lg:h-screen py-32 flex flex-col justify-between px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl">
        {/* <p className="text-accent-primary font-mono mb-5">Hi, my name is</p> */}
        <h1 className="text-3xl font-extrabold text-text-primary mb-2 tracking-tight">
          Nidhal Nouma
        </h1>
        <h2 className="text-lg font-medium text-text-secondary mb-4 typing-cursor tracking-tight">
          {/* {typedText} */}Software Developer
        </h2>
        <p className="text-sm font-semibold max-w-md mb-12 text-text-secondary leading-relaxed font-mono">
          I’m passionate about building meaningful <br />
          digital products
        </p>

        <nav className="space-y-8">
          <a
            href="#about"
            className={`block transition-colors duration-200 font-mono text-sm ${
              activeSection === "about"
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <span className="text-text-primary mr-4">01.</span>
            ABOUT
          </a>
          <a
            href="#experience"
            className={`block transition-colors duration-200 font-mono text-sm ${
              activeSection === "experience"
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <span className="text-text-primary mr-4">02.</span>
            EXPERIENCE
          </a>
          <a
            href="#projects"
            className={`block transition-colors duration-200 font-mono text-sm ${
              activeSection === "projects"
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <span className="text-text-primary mr-4">03.</span>
            PROJECTS
          </a>
          <a
            href="#contact"
            className={`block transition-colors duration-200 font-mono text-sm ${
              activeSection === "contact"
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <span className="text-text-primary mr-4">04.</span>
            Contact
          </a>
        </nav>
      </div>
      <div className="mt-16">
        <SocialLinks />
      </div>
    </header>
  );
}
