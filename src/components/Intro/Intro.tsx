import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./intro.css";
import { AiOutlineMail } from "react-icons/ai";
import myPhoto from "./../../assets/asif.jpg"
import { Link } from "react-router-dom";
const Intro = () => {
  const date = new Date();
  return (
    <div className="border p-5 rounded-3xl w-full">
      <div className="flex  justify-between items-center">
        <h1 className="font-bold text-3xl  primary-color">ASIF</h1>
        <p className="font-semibold text-md primary-color ">
          MERN Stack <br />  Developer
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src={myPhoto}
            alt="Md Asif Ikbal"
            title="Md Asif Ikbal"
            className="rounded-lg max-w-60 max-h-52 m-5"
          />
          <p className="primary-color text-xl m-2">asif.ikbal662@gmail.com</p>
          <p className="primary-color text-xl mb-10">
            Based in Dhaka, Bangladesh
          </p>
          <p className="secondary-color text-sm mb-4 w-full">
            © {date.getFullYear()} Md Asif Ikbal. All Rights Reserved
          </p>
        </div>
        <div className="flex gap-2 m-5">
            <Link target="blank" to={"https://github.com/asifikbal09"} >
          <div className="rounded-full p-3 w-fit text-xl icon">
            <FaGithub />
          </div>
            </Link>
            <Link target="blank" to={"https://www.linkedin.com/in/md-asif-ikbal09/"} >
          <div className=" rounded-full p-3 w-fit text-xl icon">
            <FaLinkedin />
          </div>
          </Link>
          <Link target="blank" to={"https://www.instagram.com/asif_ikbal_limon/"} >
          <div className=" rounded-full p-3 w-fit text-xl icon">
            <FaInstagram />
          </div>
          </Link>
        </div>

          <a href="#contact" className="w-full">
        <button className="btn btn-outline w-full rounded-3xl p-3">
            <AiOutlineMail /> HIRE ME!
        </button>
          </a>
      </div>
    </div>
  );
};

export default Intro;
