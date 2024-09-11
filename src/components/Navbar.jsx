import { MenuIcon, XIcon } from "lucide-react";
import log from "../assets/logo.png";
import { Links } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };
  return (
    <div className="bg-[#2F1F14]  fixed top-2 w-full backdrop-blur-lg h-16 sm:justify-center sm:items-center sm:flex">
      <nav className="  flex flex-col justify-center items-center sm:flex-row sm:justify-between ">
        <div className="w-24 h-24 mx-auto flex justify-center items-center">
          <img src={log} alt="logo" />
        </div>
        <button
          className="text-white absolute  top-4 right-2 sm:hidden"
          onClick={toggleNavbar}
        >
          {!isNavbarVisible ? <MenuIcon /> : <XIcon />}
        </button>

        <div
          className={`my-10 absolute top-6 bg-[#2F1F14] w-full pb-6 pt-4 ${
            isNavbarVisible ? "block" : "hidden"
          } sm:block sm:relative sm:w- sm:bg-[#6F4436] sm:rounded-md sm:top-0 sm:my-0 sm:pt-0 sm:pb-0 sm:px-0`}
        >
          <ul className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:gap-0 sm:justify-around">
            {Links.map((link, index) => (
              <li
                key={index}
                className="text-white font-bold hover:bg-primaryColor hover:text-[#6F4436] px-4 py-2 rounded-md sm:"
              >
                <a href={"#${link.href}"}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
