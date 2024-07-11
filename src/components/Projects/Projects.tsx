import Aos from "aos";
import React, { useEffect } from "react";
import { GrProjects } from "react-icons/gr";
import Button from "../button/Button";
import SingleProject from "./SingleProject";

const Projects = () => {
    useEffect(() => {
        Aos.init({
          duration: 1500,
        });
      }, []);
  return (
    <div className="p-1 md:p-5">
        <Button icon={<GrProjects />} section="Projects"></Button>
      <h3 data-aos="fade-up" className="text-5xl primary-color mb-5">
        My <span className="tertiary-color ">Projects</span>
      </h3>

<div>
    <SingleProject/>
</div>

    </div>
  );
};

export default Projects;
