import Aos from "aos";
import { useEffect } from "react";
import { GrProjects } from "react-icons/gr";
import Button from "../button/Button";
import ProjectCard from "./ProjectCard";

import courseReviewImg from "./../../assets/CourseReview.webp";

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
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my skills and projects with dark mode support.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TailwindCSS", "DaisyUI", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourportfolio.com",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for managing tasks with drag-and-drop functionality and team collaboration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Firebase", "TailwindCSS", "Redux"],
      githubLink: "https://github.com/yourusername/taskmanager",
      liveLink: "https://taskmanager-demo.com",
    },
  ]
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </div>
  );
};

export default Projects;
