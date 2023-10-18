import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import mini from '../Data/profile.avif'
import { SideBarData } from "../Data/SideBarData";

const SideBar = (props) => {
  return (
    <>
      <aside className="nav-sidebar h-screen fixed w-full sm:w-[300px] overflow-hidden bg-violet-950 z-[999]  ">
        <div className="px-1 py-10">
          <div onClick={props.setNavState} className="sidebar text-white mr-3 m right-0  float-right z-10 cursor-pointer md:hidden hover:text-white">
            <FaIcons.FaTimes size={25} />
          </div>
          <nav>
            <div className="">
              <Link
                to="/"
                className="head-text flex items-center mx-4 text-white text-xl font-semibold gap-2 py-8 px-6  "
              >
                <span className="text-3xl">
                  <RiIcons.RiSettingsLine />
                </span>
                <h1 className="text-white text-2xl">Dashboard</h1>
              </Link>
            </div>
            <ul className="nav-menu-list-items my-3  ">
              <li className="m-4">
                {SideBarData.map((item, index) => {
                  return (
                    <li key={index} className={`${item.cName} list-none`}>
                    <Link
                      className="ml-5 mx-2 flex items-center justify-between mx-auto gap-8  py-2 list-none transform transition-transform duration-300 hover:-translate-y-1 hover:bg-teal-600 hover:text-white active:bg-green-300 hover:px-3 hover:py-2 hover:rounded-lg"
                      to={item.path}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center gap-3 text-2xl py-2 px-3 text-slate-300">
                        {item.icons}
                        <span className="text-base text-slate-400">
                          {item.title}
                        </span>
                      </div>
                      <div className="">
                        <span className="float-right text-2xl text-white">
                          {item.sideIcon}
                        </span>
                      </div>
                    </Link>
                  </li>
                  );
                })}
              </li>
            </ul>
            <div className="mt-[10rem] mx-auto flex justify-center">
              <a
                className="flex items-center justify-center gap-3 py-3 px-4 w-[17rem] rounded-lg bg-indigo-900  "
                href="/"
                target="_top"
                rel="noreferrer"
              >
                <div>
                  <img
                    src={mini}
                    alt="profile pic"
                    loading="lazy"
                    width="40px"
                    height="50px"
                    decoding="async"
                    data-nimg="1"
                    className="profile object-cover border-1 border-white rounded-full shadow-md text-white"
                    // style={{ color: "transparent" }}
                  />
                </div>
                <div className="flex items-center justify-between gap-12">
                  <div>
                    <h2 className="flex flex-col text-white text-sm">
                      Rohan{" "}
                      <span className="text-xs text-gray-200">
                        Front-end Developer
                      </span>
                    </h2>
                  </div>
                  <div className="text-white text-xl">
                    <IoIcons.IoIosArrowDown />
                  </div>
                </div>
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
