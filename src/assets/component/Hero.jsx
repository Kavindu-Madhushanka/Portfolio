import myphoto from "../myphoto.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen px-6 py-20 mx-auto scroll-mt-24 max-w-7xl"
    >
      <div className="grid items-center w-full gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs tracking-widest text-blue-400 uppercase">
            Available for new opportunities
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            L.K. <br /> Madhushanka
          </h1>
          <p className="mb-8 text-gray-300">
            Full-Stack Developer | React | .NET Web API
          </p>

          <div className="flex gap-4 mb-6">
            <a
              href="#projects"
              className="px-5 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/Kavindu-Madhushanka"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kavindu-madushankha/"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="relative w-70 h-70 border-run rounded-3xl">
              <div className="relative z-10 w-full h-full overflow-hidden rounded-3xl bg-[#08142b]">
                <img
                  src={myphoto}
                  alt="my photo"
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
            </div>

            <div className="absolute z-20 px-5 py-4 bg-blue-500 shadow-lg -bottom-5 -left-5 rounded-xl">
              <p className="text-xl font-bold">3+</p>
              <p className="text-xs uppercase">Years Coding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
