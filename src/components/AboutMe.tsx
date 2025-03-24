function AboutMe() {
  return (
    <section id="about" className="py-32">
      {/* <h2 className="text-2xl font-semibold text-text-primary mb-8 flex items-center">
              <span className="text-text-primary font-mono mr-4">01.</span>
              About Me
            </h2> */}
      <div className="space-y-4 text-text-secondary ">
        <p className="leading-relaxed font-mono">
          Hi! I'm <strong>Nidhal</strong>, a software developer passionate about
          building <strong>impactful digital experiences</strong> that live on
          the internet. My journey into web development began in{" "}
          <strong>2017</strong>, when I created my first website to showcase
          trading software I had developed sparking a lasting interest in
          technology and design.
        </p>
        <p className="leading-relaxed font-mono">
          Fast-forward to today, and I've had the privilege of collaborating
          with diverse clients from around the world, constantly expanding my
          skill set and embracing <strong>new technologies</strong>. Currently,
          my primary focus is on developing{" "}
          <strong>meaningful, user centric solutions</strong> that make a
          positive difference.
        </p>

        <p className="leading-relaxed font-mono">
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
            Python
          </li>
          <li className="flex items-center">
            <span className="text-text-primary mr-2">▹</span>
            Django
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
