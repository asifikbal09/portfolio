import Button from "../button/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaJs, FaNode, FaReact, FaShapes } from "react-icons/fa";
import SingleSkill from "./SingleSkill";
import {
  SiExpress,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoRedux } from "react-icons/bi";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="p-1 md:p-5">
      <Button icon={<FaShapes />} section="SKILLS"></Button>
      <h3 data-aos="fade-up" className="text-5xl primary-color mb-5">
        My <span className="tertiary-color ">Advantages</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 ">
        <SingleSkill
          dataAos="fade-right"
          icon={<FaJs />}
          name="Java Script"
          percentage="75"
        />
        <SingleSkill
          dataAos="fade-up"
          icon={<SiTypescript />}
          name="Type Script"
          percentage="70"
        />
        <SingleSkill
          dataAos="fade-down"
          icon={<FaReact />}
          name="React"
          percentage="80"
        />
        <SingleSkill
          dataAos="fade-left"
          icon={<BiLogoRedux />}
          name="Redux"
          percentage="65"
        />
        <SingleSkill
          dataAos="fade-right"
          icon={<FaNode />}
          name="Node Js"
          percentage="68"
        />
        <SingleSkill
          dataAos="fade-up"
          icon={<SiExpress />}
          name="Express"
          percentage="75"
        />
        <SingleSkill
          dataAos="fade-down"
          icon={<DiMongodb />}
          name="MongoDB"
          percentage="80"
        />
        <SingleSkill
          dataAos="fade-left"
          icon={<SiMongoose />}
          name="Mongoose"
          percentage="70"
        />
        <SingleSkill
          dataAos="fade-down"
          icon={<SiPostgresql />}
          name="Postgres"
          percentage="66"
        />
        <SingleSkill
          dataAos="fade-left"
          icon={<SiPrisma />}
          name="Prisma"
          percentage="70"
        />
      </div>
    </div>
  );
};
export default Skills;
