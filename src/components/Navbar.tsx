import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed w-full bg-background-primary/90 backdrop-blur-sm z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Terminal className="w-10 h-10 text-accent-primary" />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#expertise" className="nav-link text-sm">
              {"<expertise />"}
            </a>
            <a href="#projects" className="nav-link text-sm">
              {"<projects />"}
            </a>
            <a href="#contact" className="nav-link text-sm">
              {"<contact />"}
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-accent-primary text-accent-primary rounded hover:bg-accent-primary/10 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
