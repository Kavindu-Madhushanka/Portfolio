import ProjectCard from "./ProjectCard";
const Project = () => {
  return (
    <section
      id="projects"
      className="px-6 py-20 mx-auto scroll-mt-24 max-w-7xl"
    >
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-4xl font-bold">Projects.</h2>
        <p className="text-gray-400">Some of the projects I have worked on.</p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        <ProjectCard
          image="https://via.placeholder.com/600x350"
          title="SAIAMS System"
          description="Student Academic Information & Attendance Monitoring System with real-time dashboard."
          tech={["React", ".NET API", "MySQL"]}
          github="#"
          live="#"
        />

        <ProjectCard
          image="https://via.placeholder.com/600x350"
          title="BMI Tracker App"
          description="Web application to calculate BMI and store history with user authentication."
          tech={["React", ".NET", "SQL Server"]}
          github="#"
          live="#"
        />

        <ProjectCard
          image="https://via.placeholder.com/600x350"
          title="Stock Management System"
          description="QR-based system to scan products, track inventory, and manage sales."
          tech={["React", "API", "Database"]}
          github="#"
          live="#"
        />
      </div>
    </section>
  );
};

export default Project;
