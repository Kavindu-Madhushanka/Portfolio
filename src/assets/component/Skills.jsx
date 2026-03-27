import { FaLaptopCode } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import SkillCard from "./SkillCard";
const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 mx-auto scroll-mt-24 max-w-7xl">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-4xl font-bold">Skills.</h2>
        <p className="text-gray-400">
          Technologies and tools I use to build modern applications.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SkillCard
          title="Frontend"
          skills={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]}
          icon={<FaLaptopCode />}
        />

        <SkillCard
          title="Backend"
          skills={["C#", ".NET Web API", "REST API", "ASP.NET Core"]}
          icon={<FaFileCode />}
        />

        <SkillCard
          title="Database"
          skills={["MySQL", "SQL Server", "Entity Framework"]}
          icon={<FaDatabase />}
        />

        <SkillCard
          title="Tools"
          skills={["Git", "GitHub", "Postman", "VS Code", "Visual Studio"]}
          icon={<FaTools />}
        />

        <SkillCard
          title="Tools"
          skills={["Git", "GitHub", "Postman", "VS Code", "Visual Studio"]}
          icon={<FaTools />}
        />
      </div>
    </section>
  );
};

export default Skills;
