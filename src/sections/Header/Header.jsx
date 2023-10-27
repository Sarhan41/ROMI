import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import SideBar from "./MobileSideBar";
import img from "../../assets/rozi.svg";
import imgdark from "../../assets/rozi.png"

const Header = () => {
  return (
    <header className="sticky dark:border-b-2  dark:border-white">
      {/* //Desktop Header */}
      <nav className="ml-6 hidden sm:flex sm:justify-between sm:items-center z-10">
        <div id="logo" className="flex">
          <Link to="/">
              <img src={img} className="h-16 w-16 dark:hidden"/>
              <img src={imgdark} alt="" className="h-16 w-16 dark:block hidden"/>
          </Link>
          <h1 className="font-young">Romi Finance </h1>
        </div>
        <div
          id="Navlinks"
          className="flex-between gap-10 font-young text-text text-lg dark:text-white dark:bg-black"
        >
            <Link to="/dashboard">
              <div className="hover:text-text-gray mr-16">DashBoard</div>
            </Link>
        </div>
        <div
          id="Navlinks"
          className="flex-between gap-10 font-young text-text text-lg dark:text-white dark:bg-black"
        >
            <Link to="/earn">
              <div className="hover:text-text-gray mr-16">Earn</div>
            </Link>
        </div>
        <div id="darkmode">
          <Icon />
        </div>
      </nav>

      {/* //Mobile Header */}
      <nav className=" ml-6 sm:hidden flex-between ">
        <div>
          <SideBar />
        </div>
        <div id="logo">
          <Link to="/">
          <img src={img} className="h-16 w-16 dark:hidden"/>
          <img src={imgdark} alt="" className="h-16 w-16 dark:block hidden"/>
          </Link>
        </div>
        <div id="darkmode">
          <Icon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
