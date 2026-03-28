const Resume = () => {
  return (
    <section id="resume" className="px-6 py-20 mx-auto scroll-mt-24 max-w-7xl">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-4xl font-bold">Resume.</h2>
        <p className="text-gray-400">
          A quick overview of my education, skills, and experience.
        </p>
      </div>

      {/* Resume Card */}
      <div className="max-w-4xl mx-auto bg-[#0d1a34] border border-white/10 rounded-2xl p-8 shadow-md">
        <h3 className="mb-4 text-2xl font-semibold">L.K. Madhushanka</h3>

        <p className="mb-6 leading-7 text-gray-400">
          I am an ICT undergraduate and aspiring full-stack developer with
          experience in building modern web applications using React, .NET Web
          API, and databases. I am passionate about clean UI design, backend
          systems, and scalable software solutions.
        </p>

        {/* Resume Info */}
        <div className="grid gap-8 mb-8 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-lg font-semibold text-blue-400">
              Education
            </h4>
            <p className="text-white">BICT / ICT Undergraduate</p>
            <p className="text-sm text-gray-400">University of Vavuniya</p>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold text-blue-400">Skills</h4>
            <p className="text-sm leading-7 text-gray-400">
              React, JavaScript, Tailwind CSS, C#, .NET Web API, MySQL, SQL
              Server, Git, GitHub, Postman
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/mycv1.pdf"
            className="px-5 py-3 transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="px-5 py-3 transition duration-300 rounded-lg bg-white/10 hover:bg-white/20"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
