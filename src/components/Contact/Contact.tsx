import { IoMdMail } from "react-icons/io";
import Button from "../button/Button";
import Aos from "aos";

const Contact = () => {
  Aos.init({
    duration: 1500,
  });
  return (
    <div id="contact" className="md:p-5 w-full">
      <Button icon={<IoMdMail />} section="CONTACT"></Button>
      <div>
        <h3 data-aos="fade-up" className="primary-color text-3xl md:text-5xl">
          Let's Work <span className="tertiary-color">Together</span>
        </h3>
        <p data-aos="fade-up" className="text-xl primary-color my-5">asif.ikbal662@gmail.com</p>
        <form className="w-full">
          <div className="flex justify-between gap-5">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                data-aos="fade-right"
                className="text-sm primary-color p-2 font-semibold"
              >
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                className="input secondary-color font-semibold"
                type="text"
                id="name"
                placeholder="Your Full Name"
                data-aos="fade-right"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                data-aos="fade-left"
                className="text-sm primary-color p-2 font-semibold"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                className="input secondary-color font-semibold"
                type="text"
                id="email"
                placeholder="Your email address"
                data-aos="fade-left"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col mb-5">
            <label
              className="p-2 primary-color font-semibold"
              htmlFor="message"
            >
              MESSAGE
            </label>
            <textarea
              className="textarea w-full h-1/3 font-semibold secondary-color"
              name="message"
              id="message"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button  className="btn btn-outline w-full rounded-3xl p-3">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
