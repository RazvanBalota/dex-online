import React, { useEffect, useState } from "react";
import { TfiCreditCard } from "react-icons/tfi";
import { CiGlobe } from "react-icons/ci";
import { BsFillMoonFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.svg";
import logoDarkMode from "../assets/logoDarkMode.svg";

import { Link } from "react-router-dom";

function Nav() {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.getItem(theme);
  });

  localStorage.setItem("theme", theme);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`flex flex-col lg:flex-row lg:px-28 py-2 bg-white dark:bg-[#242424] shadow-sm text-sm hovercolor tracking-wide `}>
      <div className="flex w-full justify-between text-secondary dark:text-secondaryDark ">
        <div className="flex gap-x-2 px-4 lg:px-0">
          <Link to="/dex-online">
            {theme === "light" ? (
              <img src={logo} alt=" " className="block lg:hidden w-[160px]" />
            ) : (
              <img src={logoDarkMode} alt=" " className="block lg:hidden w-[160px]" />
            )}
          </Link>
          <span className="hidden lg:flex items-center hover ">
            About us <RiArrowDownSFill />
          </span>
          <span className="hidden lg:flex items-center hover">
            Get involved <RiArrowDownSFill />
          </span>
          <span className="hidden lg:flex items-center hover">
            Resources <RiArrowDownSFill />
          </span>
        </div>
        <div className="flex  items-center gap-x-3 px-4 lg:px-0">
          <CiGlobe size={17} className="hover lg:flex hidden " />
          <BsFillMoonFill onClick={handleThemeSwitch} size={15} className="hover lg:flex hidden" />
          <span className="lg:flex items-center gap-x-1 hover hidden ">
            <FaUserAlt /> Anonim <RiArrowDownSFill size={15} />
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black rounded-sm  hover:bg-yellow-400 transition-all delay-75 cursor-pointer">
            <TfiCreditCard size={15} /> Support us
          </span>
          <button
            onClick={openNav}
            className={`border-2 w-[40px] h-[40px] lg:h-[0] lg:w-[0] flex justify-center items-center cursor-pointer ease-in-out delay-500"
            }`}>
            <RxHamburgerMenu size={30} />
          </button>
        </div>
      </div>
      <div>
        <div className="flex  lg:hidden ">
          {nav ? (
            <div className="flex flex-col pt-4 bg-white dark:bg-[#242424] max-h-[280px] pb-4 w-screen transition-all duration-300 ease-linear gap-x-3 px-4 lg:px-0 text-secondary dark:text-secondaryDark gap-y-4 justify-center text-left">
              <span className="flex items-center hover ">
                About us <RiArrowDownSFill />
              </span>
              <span className="flex items-center hover">
                Get involved <RiArrowDownSFill />
              </span>
              <span className="flex items-center hover">
                Resources <RiArrowDownSFill />
              </span>
              <CiGlobe size={17} className="hover " />
              <BsFillMoonFill onClick={handleThemeSwitch} size={15} className="hover toggle-dark " />
              <span className="flex gap-x-2 items-center hover">
                <FaUserAlt /> Anonim <RiArrowDownSFill size={15} />
              </span>
            </div>
          ) : (
            <div className=" flex flex-col bg-white dark:bg-[#242424] max-h-[0] w-screen overflow-hidden transition-all duration-300 ease-linear  gap-x-3 px-4 lg:px-0 text-secondary dark:text-secondaryDark gap-y-4 justify-center text-left">
              <span className="flex items-center hover ">
                About us <RiArrowDownSFill />
              </span>
              <span className="flex items-center hover">
                Get involved <RiArrowDownSFill />
              </span>
              <span className="flex items-center hover">
                Resources <RiArrowDownSFill />
              </span>
              <CiGlobe size={17} className="hover " />
              <BsFillMoonFill onClick={handleThemeSwitch} size={15} className="hover toggle-dark " />
              <span className="flex gap-x-2 items-center hover">
                <FaUserAlt /> Anonim <RiArrowDownSFill size={15} />
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
