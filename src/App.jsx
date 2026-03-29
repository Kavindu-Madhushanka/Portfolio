import About from "./assets/component/About";

import Navbar from "./assets/component/Navbar";
import Hero from "./assets/component/Hero";
import Skills from "./assets/component/Skills";
import Project from "./assets/component/Project";
import Resume from "./assets/component/Resume";
import Contact from "./assets/component/Contact";
import Footer from "./assets/component/Footer";
const App = () => {
  return (
    <div className=" w-full  bg-[#08142b] text-white ">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
