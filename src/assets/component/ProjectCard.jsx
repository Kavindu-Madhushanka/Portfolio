const ProjectCard = ({ image, title, description, tech, github, live }) => {
  return (
    <div className="bg-[#0d1a34] border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
      {/* Image */}
      <img src={image} alt={title} className="object-cover w-full h-52" />

      {/* Content */}
      <div className="p-6">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs text-blue-300 rounded-full bg-blue-500/20"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>

        {/* Description */}
        <p className="mb-5 text-sm leading-7 text-gray-400">{description}</p>

        {/* Buttons */}
        <div className="flex gap-4 text-sm">
          <a
            href={live}
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Live Demo
          </a>

          <a
            href={github}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
