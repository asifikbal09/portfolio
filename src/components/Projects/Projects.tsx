import Aos from "aos";
import { useEffect } from "react";
import { GrProjects } from "react-icons/gr";
import Button from "../button/Button";
import ProjectCard from "./ProjectCard";

import courseReviewImg from "./../../assets/CourseReview.webp";
import flatBookingImg from "./../../assets/FlatBooking.webp";
import eCommerceImg from "./../../assets/E-Commerce.webp";

const Projects = () => {
  const projects = [
    {
      title: "Course Review Backend Project",
      description: "This project is a backend application for managing courses, categories, and reviews. It is built using TypeScript, Express, and Mongoose.",
      image: courseReviewImg,
      technologies: ["TypeScript", "Node.js","Express", "MongoDB","Mongoose"],
      githubLink: "https://github.com/asifikbal09/course-review-with-authentication",
      liveLink: "https://course-review-theta-ten.vercel.app/",
    },
    {
      title: "Flat Sharing Application Backend",
      description:
        "Developed a scalable backend for a flat-sharing platform with secure JWT authentication and role-based access control.",
      image: flatBookingImg,
      technologies: ["Express.js", "TypeScript", "Prisma", "PostgreSQL", "JWT", "Bcrypt", "Zod"],
      githubLink: "https://github.com/asifikbal09/flat-booking-application-server",
      liveLink: "https://flat-sharing-aplication-server-site.vercel.app/",
    },
    {
      title: "E-commerce Backend Project",
    description:
      "A backend application for managing products and orders in an e-commerce platform, featuring authentication, validation, and CRUD operations.",
    image: eCommerceImg,
    technologies: ["TypeScript", "Express.js", "Mongoose", "MongoDB"],
    githubLink: "https://github.com/asifikbal09/e-commerce-server-site",
    liveLink: "https://e-commerce-two-brown.vercel.app/",
    },
  ]
    useEffect(() => {
        Aos.init({
          duration: 1500,
        });
      }, []);
  return (
    <div id="projects" className="p-1 md:p-5">
        <Button icon={<GrProjects />} section="Projects"></Button>
      <h3 data-aos="fade-up" className="text-5xl primary-color mb-5">
        My <span className="tertiary-color ">Projects</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard data-aos="fade-up" key={index} {...project} />
        ))}
      </div>

    </div>
  );
};

export default Projects;
