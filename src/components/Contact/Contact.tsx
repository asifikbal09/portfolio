import { IoMdMail } from "react-icons/io";
import Button from "../button/Button";
import Aos from "aos";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  Aos.init({
    duration: 1500,
  });

  interface Inputs {
    name:string
    email:string
    message:string
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    
    const toastId = toast.loading('Sending...');

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.update(toastId, {
          render: 'Message sent successfully!',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      reset();
      } else {
        toast.update(toastId, {
          render: 'Failed to send message!',
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      }
    } catch (err) {
      toast.update(toastId, {
        render: 'Server error. Please try again later.',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    }
  }

  return (
    <div id="contact" className="md:p-5 w-full mb-10">
      <Button icon={<IoMdMail />} section="CONTACT"></Button>
      <div>
        <h3 data-aos="fade-up" className="primary-color text-3xl md:text-5xl">
          Let's Work <span className="tertiary-color">Together</span>
        </h3>
        <p data-aos="fade-up" className="text-xl primary-color my-5">asif.ikbal662@gmail.com</p>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className=" md:flex justify-between gap-5">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                data-aos="fade-up"
                className="text-sm primary-color p-2 font-semibold"
              >
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                className="input secondary-color font-semibold"
                type="text"
                id="name"
                required
                {...register("name",{required:true})}
                placeholder="Your Full Name"
                data-aos="fade-up"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                data-aos="fade-up"
                className="text-sm primary-color p-2 font-semibold"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                className="input secondary-color font-semibold"
                type="text"
                id="email"
                required
                {...register("email",{required:true})}
                placeholder="Your email address"
                data-aos="fade-up"
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
              id="message"
              {...register("message",{required:true})}
              required
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button type="submit"  className="btn btn-outline w-full rounded-3xl p-3">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
