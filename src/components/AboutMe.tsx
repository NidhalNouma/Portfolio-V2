function AboutMe() {
  return (
    <section id="about" className="py-32">
      {/* <h2 className="text-2xl font-semibold text-text-primary mb-8 flex items-center">
              <span className="text-text-primary font-mono mr-4">01.</span>
              About Me
            </h2> */}
      <div className="space-y-4 text-text-secondary">
        <p className="leading-relaxed">
          Hello! I'm Nidhal, a software engineer who enjoys creating things that
          live on the internet. My interest in web development started back in
          2012 when I decided to try editing custom Tumblr themes — turns out
          hacking together a custom reblog button taught me a lot about HTML &
          CSS!
        </p>
        <p className="leading-relaxed">
          Fast-forward to today, and I've had the privilege of working at
          various companies, from startups to corporations. My main focus these
          days is building accessible, inclusive products and digital
          experiences for a variety of clients.
        </p>
        <p className="leading-relaxed">
          Here are a few technologies I've been working with recently:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
          <li className="flex items-center">
            <span className="text-text-primary mr-2">▹</span>
            JavaScript (ES6+)
          </li>
          <li className="flex items-center">
            <span className="text-text-primary mr-2">▹</span>
            TypeScript
          </li>
          <li className="flex items-center">
            <span className="text-text-primary mr-2">▹</span>
            React
          </li>
          <li className="flex items-center">
            <span className="text-text-primary mr-2">▹</span>
            Node.js
          </li>
          <li className="flex items-center">
            <span className="text-text-primary mr-2">▹</span>
            Next.js
          </li>
          <li className="flex items-center">
            <span className="text-text-primary mr-2">▹</span>
            Tailwind CSS
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
