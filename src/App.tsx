import { MouseEffect } from "./components/MouseEffect";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="min-h-screen bg-gradient-radial from-background-primary via-background-secondary to-background-primary text-text-secondary selection:bg-accent-primary/30">
      <MouseEffect />

      {/* Main Content */}
      <div className="lg:flex max-w-full overflow-x-hidden">
        {/* Fixed Hero Section on Large Screens */}
        <div className="lg:w-1/2 lg:fixed lg:top-0 lg:left-0 lg:h-screen">
          <Hero />
        </div>

        {/* Scrollable Content */}
        <div className="lg:w-1/2 lg:ml-[50%] px-6 max-w-2xl">
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
