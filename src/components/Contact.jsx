import { Links } from "../constants";
import logo from "../assets/logo.png";
import { MailIcon, PhoneCallIcon } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 text-primaryColor font-PopFam py-10 sm:grid-cols-2  sm:gap-4 sm:place-items-start sm:justify-items-center lg:grid-cols-3"
        id="contact"
      >
        <div className="flex justify-center items-center flex-col px-2 mt-2 mb-4  sm:ml-4">
          <h2 className="text-center font-bold text-3xl">Contact Us</h2>
          <p className="text-center mb-4">Send us a message</p>
          <form
            action=""
            className="flex justify-center items-center flex-col gap-4 sm:items-start"
          >
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full name"
                className="w-10/12 rounded placeholder:pl-2 outline-none text-black px-2 py-1"
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="w-10/12 rounded placeholder:pl-2 outline-none text-black px-2 py-1"
              />
            </label>
            <textarea
              name="message"
              rows="5"
              cols="20"
              id="message"
              placeholder="Your Message"
              className="outline-none  -left-3 relative rounded px-2 py-1 text-black sm:left-0"
            ></textarea>
            <button
              type="submit"
              className="bg-aboutbg px-6 py-2 text-black rounded-lg shadow-sponsorbg shadow-md hover:scale-110"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center mt-2 mb-4">
          <h2 className="text-center font-bold text-3xl ">Sitemap</h2>
          <p className="mb-2 sm:mb-4">All our pages</p>
          <ul className="space-y-2 sm:space-y-4">
            {Links.map((link, index) => (
              <li key={index} className="before:content-['-'] before:mr-2 sm:my-2 sm:mx-4">
                <a href={`#${link.href}`} className="hover:outline hover:outline-orange-400 hover:outline-1 rounded-md sm:text-xl ">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center sm:col-span-2 lg:col-span-1">
          <div className="w-64 h-52 flex justify-center items-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="">
            <a
              href="tel:+08 400 20000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 mb-4 hover:text-orange-400"
            >
              <PhoneCallIcon />
              (08) 400 20000
            </a>
            <a
              href="mailto:"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 hover:text-orange-400"
            >
              <MailIcon />
              coffeeborcelle@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
