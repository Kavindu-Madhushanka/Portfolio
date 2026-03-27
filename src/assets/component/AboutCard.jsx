const AboutCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#0d1a34] border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-center w-10 h-10 mb-4 text-blue-400 rounded-lg bg-blue-500/20">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-7 text-gray-400">{description}</p>
    </div>
  );
};
export default AboutCard;
