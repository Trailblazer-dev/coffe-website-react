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
    <>
      <div className="mx-auto justify-center flex w-full  bg-[#2F1F14]   sm:backdrop-blur-lg  fixed z-50  top-0 h-14 sm:h-20">
        <button
          className="text-white absolute  top-6 right-2 sm:hidden"
          onClick={toggleNavbar}
        >
          {!isNavbarVisible ? <MenuIcon /> : <XIcon />}
        </button>
        <nav className="flex flex-col  items-center sm:flex-row sm:justify-between">
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto flex justify-center items-center  ">
            <img src={log} alt="logo" />
          </div>

          <div
            className={`my-10 absolute top-4 bg-navbarbg w-full  pb-6 pt-4 ${
              isNavbarVisible ? "block" : "hidden"
            } sm:block sm:relative sm:w-fit sm:rounded-md   sm:top-0 sm:my-0 sm:pt-0 sm:pb-0 `}
          >
            <ul className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:gap-0 sm:bg-navbarbg sm:rounded-md sm:w-fit sm:px-0 sm:space-x-4">
              {Links.map((link, index) => (
                <li
                  key={index}
                  className="text-white font-bold hover:bg-primaryColor hover:text-[#6F4436] py-2 rounded-md sm:px-1 md:px-4"
                >
                  <a href={`#${link.href}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
