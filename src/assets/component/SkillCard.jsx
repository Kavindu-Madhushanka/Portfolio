const SkillCard = ({ title, skills, icon }) => {
  return (
    <div className="bg-[#0d1a34] border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 mb-4 text-lg text-blue-400 rounded-lg bg-blue-500/20">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>

      {/* Skill List */}
      <ul className="space-y-2 text-sm text-gray-400">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center justify-between">
            <span>{skill}</span>

            {/* small dot */}
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
