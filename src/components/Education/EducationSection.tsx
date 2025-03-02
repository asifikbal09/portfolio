import { GraduationCap, Calendar, MapPin, School } from "lucide-react"
import Button from "../button/Button"
import { FaPenNib } from "react-icons/fa"

const EducationSection = () => {
  return (
    <div className="py-10">
       <Button icon={<FaPenNib />} section="Education"></Button>
      <h3 data-aos="fade-up" className="text-5xl primary-color mb-5">
        My <span className="tertiary-color ">Education</span>
      </h3>

      <div className="card bg-[#1e2124] shadow-xl p-6 max-w-3xl">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#2ed573]/10 rounded-full">
            <School className="w-8 h-8 text-[#2ed573]" />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              Bachelor of Science in Computer Science & Engineering
            </h3>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-300">
                <GraduationCap className="w-5 h-5 text-[#2ed573]" />
                <span>Green University of Bangladesh</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5 text-[#2ed573]" />
                <span>2022 - 2026 (Expected)</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-[#2ed573]" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-[#2ed573]"></div>
                <span className="text-[#2ed573] font-semibold">Current Status</span>
              </div>
              <p className="text-gray-300 pl-4">
                Currently pursuing my degree with a focus on software development, web technologies, and computer
                science fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationSection

