import Button from "../button/Button";
import { FaArrowDown, FaDownload, FaHome } from "react-icons/fa";
import myProjects from "./../../assets/my-project.png"
import { saveAs } from 'file-saver';

const Home = () => {
  const handleResumeDownloader = () => {
    // const link = document.createElement("a");
    // link.href = "/Asif_Ikbal_Resume.pdf";
    // link.download = "Asif_Ikbal_Resume.pdf";
    // link.click();
    saveAs("./public/backend-resume.pdf", "Backend-resume-of-Md-Asif-Ikbal.pdf");
  };
  return (
    <div className="p-1 md:p-5">
      <div>
        <Button icon={<FaHome />} section="INTRODUCE"></Button>
      </div>
      <div className="flex flex-col gap-3">
        <p className=" primary-color uppercase text-3xl">Hello, I am</p>
        <h1 className="primary-color uppercase text-4xl md:text-6xl text-shadow">
          md asif ikbal,
        </h1>
        <h2 className="primary-color uppercase text-3xl md:text-6xl  overflow-hidden h-8 md:h-16">
          <span className="text-animation lg:relative">
            {" "}
            <span className="tertiary-color"> mern stack</span> developer <br />
            <span className="tertiary-color"> full stack</span> developer <br />
            <span className="tertiary-color"> frontend</span> developer <br />
            <span className="tertiary-color"> backend</span> developer <br />
          </span>
        </h2>
      </div>
      <div>
        <p className="secondary-color text-sm my-10">
          I develop and code beautifully simple things and I love what I do.{" "}
          <br /> Just simple like that!
        </p>
      </div>
   
              <button onClick={handleResumeDownloader} className="btn btn-outline rounded-3xl p-3">
              <FaDownload /> Download Resume
              </button>
          
      <div className="flex justify-center md:justify-end md:px-32">
        <a href="#projects">
      <div className="relative flex justify-center items-center border w-fit p-16 rounded-full">

        <img className="animate-spin absolute" src={myProjects} alt="" />
        <FaArrowDown className="text-5xl animate-bounce"/>
      </div>
      </a>
      </div>
    </div>
  );
};  

export default Home;
