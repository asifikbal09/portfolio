import { useState } from "react"
import { Award, Calendar, ExternalLink, ChevronDown, ChevronUp, CheckCircle } from "lucide-react"
import Button from "../button/Button"
import programmingHero from "./../../assets/providers/ProgrammingHero.jpg"
import kodeKloud from "./../../assets/providers/KodeKloud.jpg"
import hackerRank from "./../../assets/providers/HackerRank.png"


interface Certification {
  title: string
  provider: string
  date: string
  credentialId?: string
  credentialURL?: string
  skills: string[]
  logo: string
}

const CertificationSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const certifications: Certification[] = [
    {
      title: "Complete Web Development Course with Jhankar Mahbub",
      provider: "Programming Hero",
      date: "October 2023",
      credentialId: "WEB7-4756",
      credentialURL: "https://drive.google.com/file/d/1m4ghM4zEy39r6v42Na9luDji8kovWPW5/view?usp=drive_link",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB"
      ],
      logo: programmingHero,
    },
    {
      title: "Docker Training Course for the Absolute Beginner",
      provider: "KodeKloud",
      date: "February 2025",
      credentialId: "cef927fe-871f-4f98-964b-e8d66b7d59a4",
      credentialURL: "https://learn.kodekloud.com/certificate/cef927fe-871f-4f98-964b-e8d66b7d59a4",
      skills: ["Docker", "Containerization", "DevOps"],
      logo: kodeKloud,
    },
    {
      title: "SQL (Advanced)",
      provider: "HackerRank",
      date: "February 2025",
      credentialId: "79b8f7a348f2",
      credentialURL: "https://www.hackerrank.com/certificates/79b8f7a348f2",
      skills: ["SQL", "Database Management", "Query Optimization"],
      logo: hackerRank,
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="p-1 md:p-5 py-10">
      <Button icon={<Award />} section="Achievement"></Button>
      <h3 data-aos="fade-up" className="text-5xl primary-color mb-5">
        My <span className="tertiary-color ">Certification</span>
      </h3>

      <div data-aos="fade-up" className="grid gap-6 ">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`card bg-[#1e2124] shadow-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(46,213,115,0.15)] ${
              expandedIndex === index ? "border border-[#2ed573]/20" : ""
            }`}
          >
            {/* Header Section */}
            <div className="p-6 cursor-pointer" onClick={() => toggleExpand(index)}>
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="w-12 h-12 rounded-full p-3 bg-[#2ed573]/10  flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#2ed573]" />
                  {/* <img className="rounded-full " src={cert.logo} alt="" /> */}
                </div>

                {/* Title and Provider */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="text-gray-300">{cert.provider}</p>
                </div>

                {/* Date and Expand Button */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#2ed573]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#2ed573]" />
                  )}
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedIndex === index && (
              <div className="px-6 pb-6 pt-2 border-t border-[#2ed573]/10">
                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-300">
                      Credential ID: <span className="text-white">{cert.credentialId}</span>
                    </p>
                  </div>
                )}

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-sm text-[#2ed573] mb-2">Skills Acquired:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-[#2ed573]/10 text-[#2ed573] text-sm flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                {cert.credentialURL && (
                  <a
                    href={cert.credentialURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#2ed573] text-black font-medium hover:bg-[#2ed573]/90 transition-colors"
                  >
                    Verify Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CertificationSection

