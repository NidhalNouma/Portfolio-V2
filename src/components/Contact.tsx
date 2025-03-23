import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-accent/5 to-transparent"></div>
      <div className="container mx-auto max-w-3xl text-center relative">
        <div className="space-y-4 mb-16">
          <p className="text-accent-primary font-mono text-sm animate-fade-in">
            What's Next?
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6 animate-slide-up tracking-tight">
            Let's Create Something
            <span className="block mt-2">Together</span>
          </h2>
          <p className="text-base text-text-secondary leading-relaxed max-w-md mx-auto font-mono">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind or just want to connect, I'd love to hear
            from you!
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          <a
            href="mailto:nidhal.nouma.0@gmail.com"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-accent-primary text-background-primary rounded-2xl font-medium text-lg
              transform hover:translate-y-[-2px] hover:shadow-[0_20px_40px_-15px_rgba(var(--accent-primary),0.2)] transition-all duration-300 
              before:absolute before:inset-0 before:bg-accent-primary/20 before:rounded-2xl before:transform before:scale-x-[1.05] before:scale-y-[1.1]
              before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10"
          >
            Let's Talk
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
