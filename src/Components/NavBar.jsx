import { React, useState } from "react";
import SideBar from "./Shared/SideBar";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const setNavState = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <nav className="bg-violet-950 z-[999] w-screen mx-auto h-16 md:hidden fixed top-0 bg-fixed ">
        <div className="flex items-center justify-between py-2 mx-auto">
          <div onClick={setNavState} className="text-2xl text-stone-900 ml-2 cursor-pointer">
            <FaIcons.FaBars />
          </div>
          <div className="bg-white flex items-center p-2 gap-2 rounded-md mx-2">
            <span><BsIcons.BsSearch /></span>
            <input className="outline-none" type="search" name="" id="" placeholder="Search" />
          </div>
          </div>
          {navbar && (
              <div className="menu-navbar absolute top-0 left-0 w-full sm:w-[300px] h-screen overflow-y-auto ">
              <SideBar setNavState={setNavState} />
            </div>
          )}
        
        
      </nav>
      <div className="hidden md:block h-full w-[300px]"><SideBar/></div>
    </>
  );
};

export default NavBar;
