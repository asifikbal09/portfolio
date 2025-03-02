import Contact from "../components/Contact/Contact";
import EducationSection from "../components/Education/EducationSection";
import Home from "../components/Home/Home";
import Intro from "../components/Intro/Intro";
// import Intro from "../components/Intro/Intro";
import Skills from "../components/MySkills/Skills";
import Projects from "../components/Projects/Projects";

const MainLayout = () => {
  return (
    <div className="drawer lg:drawer-open scrollbar-hide">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col-reverse container ">
        <div>
          <Home />
          <Skills />
          <Projects />
          <EducationSection/>
          <Contact />
        </div>
        <label className=" w-full lg:hidden">
          <Intro />
        </label>
      </div>
      <div className="drawer-side scrollbar-hide lg:mx-5">
        <Intro />
      </div>
    </div>
  );
};

export default MainLayout;
