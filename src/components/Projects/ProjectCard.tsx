
import { useEffect, useState } from "react"
import { Github, ExternalLink, Code } from "lucide-react"
import Aos from "aos"


interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubLink?: string
  liveLink?: string
}

const ProjectCard = ({ title, description, image, technologies, githubLink, liveLink }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
 useEffect(() => {
        Aos.init({
          duration: 1500,
        });
      }, []);
  return (
    <div
      className="card bg-[#1e2124] shadow-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(46,213,115,0.3)]"
      data-aos="fade-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle bg-[#2ed573] hover:bg-[#2ed573]/80 border-none"
            >
              <Github className="w-5 h-5 text-black" />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle bg-[#2ed573] hover:bg-[#2ed573]/80 border-none"
            >
              <ExternalLink className="w-5 h-5 text-black" />
            </a>
          )}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="badge badge-sm bg-[#2ed573]/20 text-[#2ed573] border-[#2ed573]/30 flex items-center gap-1"
            >
              <Code className="w-3 h-3" /> {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

