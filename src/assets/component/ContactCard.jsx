const ContactCard = ({ title, value, icon }) => {
  return (
    <div className="flex items-center gap-4 bg-[#0d1a34] border border-white/10 p-4 rounded-xl hover:bg-white/5 transition duration-300">
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 text-lg text-blue-400 rounded-lg bg-blue-500/20">
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-xs text-gray-400 uppercase">{title}</p>
        <p className="text-sm text-white">{value}</p>
      </div>
    </div>
  );
};

export default ContactCard;
