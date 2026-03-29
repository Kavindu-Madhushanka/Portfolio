import AboutCard from "./AboutCard";
import { FaHeadSideVirus } from "react-icons/fa6";
import { VscTerminalCmd } from "react-icons/vsc";
import { MdCastForEducation } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="px-6 py-20 mx-auto max-w-7xl scroll-mt-24">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold">About.</h2>
        <div className="w-16 h-1 mx-auto bg-blue-500 rounded"></div>

        <p className="max-w-3xl mx-auto mt-6 mb-12 text-xl leading-8 text-center text-gray-300">
          I am an ICT undergraduate with a strong passion for building scalable,
          high-performance web applications. I focus on frontend development,
          backend systems, and modern software architecture.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <AboutCard
          title="Education First"
          description="Currently pursuing my ICT degree, focusing on software engineering, programming, algorithms, and system design."
          icon={<MdCastForEducation />}
        />

        <AboutCard
          title="Full-Stack Focus"
          description="Building modern web applications using React, .NET Web API, and databases with clean and scalable architecture."
          icon={<VscTerminalCmd />}
        />

        <AboutCard
          title="AI-Powered Web Development"
          description="Combining AI models with modern web technologies to build smart, interactive, and user-focused web applications."
          icon={<FaHeadSideVirus />}
        />
      </div>
    </section>
  );
};

export default About;
