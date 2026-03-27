import About from "./assets/component/About";

import Navbar from "./assets/component/Navbar";
import Hero from "./assets/component/Hero";
import Skills from "./assets/component/Skills";
const App = () => {
  return (
    <div className="bg-[#08142b] text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};
export default App;
