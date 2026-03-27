import About from "./assets/component/About";

import Navbar from "./assets/component/Navbar";
import Hero from "./assets/component/Hero";
const App = () => {
  return (
    <div className="bg-[#08142b] text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};
export default App;
