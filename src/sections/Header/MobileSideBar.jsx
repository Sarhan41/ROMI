import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => setIsOpen(!isOpen);

  return (
    <section>
      <div
        id="side-bar-overlay"
        className={`bg-gray-200 w-[40vw] h-screen fixed z-50 top-0 left-0 shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300
        `}
      >
        <div className="mt-6 ml-6">
          <AiOutlineCloseCircle
            onClick={toggleSideBar}
            className="h-10 w-10 cursor-pointer text-red-900"
          />
        </div>
        <div
          id="Navlinks"
          className="flex-between gap-10 font-young text-text text-lg dark:text-gray-800 mt-16"
        >
            <Link to="/dashboard">
              <div className="hover:text-text-gray mr-16">DashBoard</div>
            </Link>
        </div>
        <div
          id="Navlinks"
          className="flex-between gap-10 font-young text-text text-lg dark:text-gray-800 mt-16"
        >
            <Link to="/earn">
              <div className="hover:text-text-gray mr-16">Earn</div>
            </Link>
        </div>

      </div>
      <div
        id="pementnent icon"
        onClick={toggleSideBar}
        className="cursor-pointer"
      >
        <GiHamburgerMenu className="h-10 w-10" />
      </div>
    </section>
  );
};

export default SideBar;
