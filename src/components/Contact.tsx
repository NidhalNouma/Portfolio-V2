export function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-accent-primary font-mono text-sm mb-4">
          What's Next?
        </p>
        <h2 className="text-4xl sm:text-5xl font-semibold text-text-primary mb-6">
          Get In Touch
        </h2>
        <p className="text-base text-text-secondary mb-12 max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex flex-col items-center gap-8">
          <a
            href="mailto:nidhal.nouma.0@nidhalnouma.com"
            className="inline-block px-8 py-4 border-[1px] border-accent-primary text-accent-primary rounded font-mono text-sm hover:bg-accent-hover transition-colors duration-300"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
