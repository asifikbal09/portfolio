import Aos from "aos";
import { ReactNode, useEffect } from "react";

type TSingleSkillProps = {
  name: string;
  percentage: string;
  icon: ReactNode;
  dataAos?: string;
};

const SingleSkill = ({
  name,
  percentage,
  icon,
  dataAos,
}: TSingleSkillProps) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos={dataAos} className="flex flex-col items-center gap-5 my-5">
      <div className="border flex flex-col justify-center items-center rounded-full p-14 w-fit">
        <div className="text-6xl text-white mb-5">{icon}</div>
        <h3 className="text-3xl tertiary-color">{percentage}%</h3>
      </div>
      <p className="primary-color font-semibold">{name}</p>
    </div>
  );
};
export default SingleSkill;
