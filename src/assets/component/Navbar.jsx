import myphoto from "../myphoto.jpg";
const link = ["home", "about", "skills", "projects", "resume", "contact"];
const Navbar = () => {
  return (
    <header className="sticky top-0 bg-[#08142b]/90 backdrop-blur border-b border-white/10 z-50 text-lg ">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex gap-4">
          <img src={myphoto} className="w-10 h-10 rounded-full" />
          <h1 className="pt-2 text-xl font-semibold">L.K. Madhushanka</h1>
        </div>
        <ul className="hidden gap-8 text-gray-300 md:flex">
          {link.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className=" hover:text-blue-400 hover:underline"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:scale-110"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
};
export default Navbar;
