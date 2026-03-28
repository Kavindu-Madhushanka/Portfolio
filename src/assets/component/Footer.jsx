import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#08142b]">
      <div className="px-6 py-10 mx-auto max-w-7xl">
        {/* TOP */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-white">
              L.K. Madhushanka
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Full-Stack Developer | React | .NET
            </p>
          </div>

          {/* MIDDLE NAV */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          {/* RIGHT SOCIAL */}
          <div className="flex gap-5 text-lg text-gray-400">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="transition hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="transition hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-6 mt-8 text-sm text-center text-gray-500 border-t border-white/10">
          © {new Date().getFullYear()} L.K. Madhushanka. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
