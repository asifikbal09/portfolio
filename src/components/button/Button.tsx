import Aos from "aos";
import { ReactNode, useEffect } from "react";

type TButtonProps = {
  section: string;
  icon: ReactNode;
};

const Button = ({ section, icon }: TButtonProps) => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="flex justify-center items-center gap-2 border w-fit px-2 py-1 rounded-3xl m-5 mb-10 text-sm secondary-color"
    >
      {icon}
      {section}
    </div>
  );
};

export default Button;
