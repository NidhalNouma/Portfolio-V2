import { MouseEffect } from "./components/MouseEffect";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="w-full min-h-screen mx-auto bg-gradient-radial from-background-primary via-background-secondary to-background-primary text-text-secondary selection:bg-accent-primary/30">
      {/* Main Content */}
      <div className="lg:flex lg:justify-between w-full">
        {/* Fixed Hero Section on Large Screens */}
        <div className="lg:sticky lg:top-0 lg:max-h-screen">
          <Hero />
        </div>

        {/* Scrollable Content */}
        <div className="px-6 lg:w-7/12">
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
      <MouseEffect />
    </div>
  );
}

export default App;
